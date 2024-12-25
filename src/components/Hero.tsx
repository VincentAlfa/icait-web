import Link from "next/link";
import Countdown from "./Countdown";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="bg-[url('../assets/img/heroimage.webp')] bg-cover bg-center bg-no-repeat h-full w-full">
        <div className="w-full h-full bg-black/20 grid place-content-center">
          <div className="text-center">
            <p className="text-base mb-2 text-slate-50">
              10-11 September 2025, Yogyakarta, Indonesia
            </p>
            <h1 className="font-bold text-[2.5rem] tracking-wide leading-tight mb-2 text-slate-50">
              The 1<sup>st</sup> International Conference on Artificial
              Intelligence Technology &#40;ICAIT&#41; 2025
            </h1>
            <p className="tracking-wide text-xl italic mb-4 text-slate-50">
              &#34;Artificial Intelligence Applications for a Prosperous and
              Sustainable Living in the Modern Society&#34;
            </p>
            <p className="text-base text-slate-50 mb-1">Started in</p>
            <Countdown className="mb-6 mx-auto" />
            <Button
              className="bg-san-juan-700 hover:bg-san-juan-700/90"
              asChild
            >
              <Link href="#">Registration Here</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
