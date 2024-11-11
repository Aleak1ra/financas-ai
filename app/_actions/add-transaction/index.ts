"use server"

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";

import { AddTransactionSchema } from "./schema";
import { TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface AddTransactionProps {
    id: string;
    amount: number;
    name: string;
    type: TransactionType
    category: TransactionCategory;
    paymentMethod: TransactionPaymentMethod;
    date: Date;
}

export const AddTransaction = async (transaction: AddTransactionProps) => {
    AddTransactionSchema.parse(transaction);
    const { userId } = await auth();
    if (!userId) {
        throw new Error("User not found");
    }
    await db.transaction.upsert({
        where: {
            id: transaction.id,
        },
        create: { ...transaction, userId },
        update: { ...transaction, userId },
    });
    revalidatePath("/transactions");
}