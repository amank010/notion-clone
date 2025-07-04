"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({
      title: "Untitled",
    });
    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "Note created!",
      error: "Failed to create a new note",
    });
  };

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
      <Button onClick={onCreate}>
        <PlusCircle />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
