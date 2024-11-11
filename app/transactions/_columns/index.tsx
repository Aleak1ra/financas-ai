"use client";
import { TransactionDTO } from "./dto/transactionDTO";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/TransactionTypeBadge";
import {
  TRANSACTION_CATEGORY_LABELS,
  TRANSACTION_PAYMENT_METHOD_LABELS,
} from "@/app/_constants/transactions";
import { Button } from "@/app/_components/ui/button";
import { ArrowUpDown, TrashIcon } from "lucide-react";
import EditButton from "../_components/editButton";

export const transactionColumns: ColumnDef<TransactionDTO>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tipo
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Categoria
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row: { original: transaction } }) => (
      <span>
        {
          TRANSACTION_CATEGORY_LABELS[
            transaction.category as keyof typeof TRANSACTION_CATEGORY_LABELS
          ]
        }
      </span>
    ),
  },
  {
    accessorKey: "paymentMethod",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Método de pagamento
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row: { original: transaction } }) => (
      <span>
        {
          TRANSACTION_PAYMENT_METHOD_LABELS[
            transaction.paymentMethod as keyof typeof TRANSACTION_PAYMENT_METHOD_LABELS
          ]
        }
      </span>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row: { original: transaction } }) => (
      <span>
        {new Date(transaction.date).toLocaleDateString("pt-BR", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })}
      </span>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Valor
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row: { original: transaction } }) => (
      <span>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(Number(transaction.amount))}
      </span>
    ),
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row: { original: transaction } }) => (
      <div className="flex justify-end">
        <EditButton transaction={transaction} />
        <Button variant={"ghost"} className="">
          <TrashIcon className="" size={16} />
        </Button>
      </div>
    ),
  },
];
