"use client";

import { useState } from "react";
import DialogForm from "./dialogForm";
import { Button } from "./ui/button";
import { ArrowDownUpIcon } from "lucide-react";

const AddTransactionButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setIsModalOpen(true)}
      >
        Adicionar Transação
        <ArrowDownUpIcon />
      </Button>
      <DialogForm isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};

export default AddTransactionButton;
