// dtos/transaction.dto.ts
import { TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export function TransactionDTO(transaction: {
    id: string;
    name: string;
    type: TransactionType;
    amount: Decimal;
    category: TransactionCategory;
    paymentMethod: TransactionPaymentMethod;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
}) {
    return {
        id: transaction.id,
        name: transaction.name,
        type: transaction.type,
        amount: transaction.amount.toString(), // Convertendo para string
        category: transaction.category,
        paymentMethod: transaction.paymentMethod,
        date: transaction.date.toISOString(),
        createdAt: transaction.createdAt.toISOString(),
        updatedAt: transaction.updatedAt.toISOString(),
        userId: transaction.userId,
    };
}
