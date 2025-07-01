import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
const font = Poppins({ weight: ["700", "600"], subsets: ["latin"] });
export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src={"/logo.png"} alt="logo" width={40} height={40} />
      <p className={cn("font-semibold", font.className)}>Notion</p>
    </div>
  );
};
