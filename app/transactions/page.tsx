import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import { db } from "../_lib/prisma";
import AddTransactionButton from "../_components/add-transaction-button";
import { createTransactionDTO } from "./dto/transactionDTO";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  // Transformar os dados da transação em plain objects usando a função TransactionDTO
  const transactionData = transactions.map(createTransactionDTO);

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionColumns} data={transactionData} />
    </div>
  );
};

export default TransactionsPage;
