import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 z-50 bg-background dark:bg-[#1f1f1f]">
      <Logo />
      <div className="md:justify-end md:ml-auto w-full justify-between flex items-center p-x-2 text-muted-background ">
        <Button variant={"ghost"}>Privacy Policy</Button>
        <Button variant={"ghost"}>Terms & Conditions</Button>
      </div>
    </div>
  );
};
