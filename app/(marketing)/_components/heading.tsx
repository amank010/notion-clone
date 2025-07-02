"use client";

import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-3  items-center mt-30 justify-center">
      <h1 className="font-bold text-3xl md:text-5xl sm:text-4xl">
        Your ideas, documents, & plans. Unified. Welcome to{" "}
        <span className="underline ">Notion</span>
      </h1>
      <h3 className="sm:text-xl md:text-2xl mt-4 font-light text-base">
        Notion is the connected workspace where better, faster work happens.
      </h3>
      {!isLoading && !isAuthenticated && (
        <SignInButton mode="modal">
          <Button>
            Get Notion Free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
      {!isLoading && isAuthenticated && (
        <>
          <Button asChild>
            <Link href={"/documents"}>
              Enter Notion
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </>
      )}
    </div>
  );
};
