import Image from "next/image";
export const Hereos = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[400px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[500px]">
          <Image
            src="/hereo2white.png"
            alt="hereo1"
            className="object-contain hidden dark:block"
            fill
          />
          <Image
            src="/hereo2black.png"
            alt="hereo1"
            className="object-contain dark:hidden"
            fill
          />
        </div>
        <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[500px] hidden sm:block">
          <Image
            src="/hereo1white.png"
            alt="hereo2"
            className="object-contain hidden dark:block"
            fill
          />
          <Image
            src="/hereo1black.png"
            alt="hereo2"
            className="object-contain dark:hidden"
            fill
          />
        </div>
      </div>
    </div>
  );
};
