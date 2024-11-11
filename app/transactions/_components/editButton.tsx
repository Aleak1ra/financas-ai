"use client";

import DialogForm from "@/app/_components/dialogForm";
import { Button } from "@/app/_components/ui/button";
import type { TransactionDTO } from "@/app/transactions/dto/transactionDTO";

import { EditIcon } from "lucide-react";
import { useState } from "react";

interface EditButtonProps {
  transaction: TransactionDTO;
}

const EditButton = ({ transaction }: EditButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button variant={"ghost"} onClick={() => setIsModalOpen(true)}>
        <EditIcon className="" size={16} />
      </Button>
      <DialogForm
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        defaultValues={{
          ...transaction,
        }}
        transactionId={transaction.id}
      />
    </>
  );
};

export default EditButton;
