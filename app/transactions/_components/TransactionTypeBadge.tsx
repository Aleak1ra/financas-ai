import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface BadgeTransactionProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: BadgeTransactionProps) => {
  switch (transaction.type) {
    case TransactionType.DEPOSIT:
      return (
        <Badge className="bg-muted font-bold text-primary hover:bg-muted">
          <CircleIcon className="mr-2 fill-primary" size={10} />
          Depósito
        </Badge>
      );
    case TransactionType.EXPENSE:
      return (
        <Badge className="bg-muted text-destructive hover:bg-muted">
          <CircleIcon className="mr-2 fill-destructive" size={10} />
          Despesa
        </Badge>
      );
    case TransactionType.INVESTMENT:
      return (
        <Badge className="bg-muted text-secondary hover:bg-muted">
          <CircleIcon className="mr-2 fill-white" size={10} />
          Investimento
        </Badge>
      );
    default:
      return (
        <Badge className="text-yellow bg-muted hover:bg-muted">
          <CircleIcon className="fill-yellow mr-2" size={10} />
          Outro
        </Badge>
      );
  }
};

export default TransactionTypeBadge;
