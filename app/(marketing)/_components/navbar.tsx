"use client";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
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
        <ModeToggle />
      </div>
    </div>
  );
};
