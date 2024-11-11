// dtos/transaction.dto.ts
import { TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

// Definição do tipo TransactionDTO
export type TransactionDTO = {
    id: string;
    name: string;
    type: TransactionType;
    amount: string; // Será convertido para string na função
    category: TransactionCategory;
    paymentMethod: TransactionPaymentMethod;
    date: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
};

// Função para transformar a transação em DTO
export function createTransactionDTO(transaction: {
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
}): TransactionDTO {
    return {
        id: transaction.id,
        name: transaction.name,
        type: transaction.type,
        amount: transaction.amount.toString(), // Convertendo Decimal para string
        category: transaction.category,
        paymentMethod: transaction.paymentMethod,
        date: transaction.date.toISOString(),
        createdAt: transaction.createdAt.toISOString(),
        updatedAt: transaction.updatedAt.toISOString(),
        userId: transaction.userId,
    };
}
