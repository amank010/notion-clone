"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div className="text-center justify-center flex flex-col h-full items-center space-y-4">
      <Image
        src="/logo.png"
        alt="notion"
        className="object-contain"
        width={200}
        height={200}
      />
      <h2 className="text-lg font-medium">
        Welcome to Notion, {user?.firstName}
      </h2>
      <Button>
        <PlusCircle />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
