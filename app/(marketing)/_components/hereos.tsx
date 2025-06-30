import Image from "next/image";
export const Hereos = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/hereo1.png"
            alt="hereo1"
            className="object-contain"
            fill
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden sm:block">
          <Image
            src="/hereo1.png"
            alt="hereo2"
            className="object-contain"
            fill
          />
        </div>
      </div>
    </div>
  );
};
