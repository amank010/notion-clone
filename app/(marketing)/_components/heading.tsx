"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-3  items-center mt-30 justify-center">
      <h1 className="font-bold text-3xl md:text-6xl sm:text-5xl">
        Your ideas, documents, & plans. Unified. Welcome to{" "}
        <span className="underline">Notion</span>
      </h1>
      <h3 className="sm:text-xl md:text-2xl font-medium text-base">
        Motion is the connected workspace where better, faster work happens.
      </h3>
      <Button>
        {" "}
        Enter Notion
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};
