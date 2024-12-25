import { Card, CardContent } from "./ui/card";

const Countdown = ({ className }: { className: string }) => {
  return (
    <Card
      className={
        "bg-san-juan-950 border-0 w-fit relative overflow-clip " + className
      }
    >
      <CardContent className="p-8 relative z-10">
        <div className="flex justify-center gap-4 text-slate-50">
          <div className="flex flex-col text-center min-w-[4.4rem]">
            <span className="font-bold text-[2.5rem] tabular-nums">76</span>
            <span className="font-normal font-base">Days</span>
          </div>
          <div className="flex flex-col text-center min-w-[4.4rem]">
            <span className="font-bold text-[2.5rem] tabular-nums">17</span>
            <span className="font-normal font-base">Hours</span>
          </div>
          <div className="flex flex-col text-center min-w-[4.4rem]">
            <span className="font-bold text-[2.5rem] tabular-nums">39</span>
            <span className="font-normal font-base">Minutes</span>
          </div>
          <div className="flex flex-col text-center min-w-[4.4rem]">
            <span className="font-bold text-[2.5rem] tabular-nums">05</span>
            <span className="font-normal font-base">Seconds</span>
          </div>
        </div>
      </CardContent>
      <div className="absolute top-8 -left-9 bg-san-juan-800 rounded-full w-[244px] h-[244px] blur-3xl"></div>
      <div className="absolute bottom-11 -right-20 bg-san-juan-800 rounded-full w-[178px] h-[178px] blur-3xl"></div>
    </Card>
  );
};

export default Countdown;
