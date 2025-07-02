"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { ClerkProvider, SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Navbar = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "dark:bg-[#1f1f1f] z-50 bg-background fixed w-full p-6 flex items-center top-0",
        scrolled && "shadow-sm border-b",
      )}
    >
      <Logo />
      <div className="justify-between md:ml-auto flex items-center w-full gap-x-2 md:justify-end">
        {isLoading && (
          <p>
            <Spinner />
          </p>
        )}
        {!isLoading && !isAuthenticated && (
          <>
            <SignInButton>
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size={"sm"}>Get Notion Free</Button>
            </SignInButton>
          </>
        )}
        {!isLoading && isAuthenticated && (
          <>
            <Button variant={"ghost"} size={"sm"} asChild>
              <Link href="/documents">Enter Notion</Link>
            </Button>
            <UserButton />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
