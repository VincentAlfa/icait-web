import AboutConference from "@/components/AboutConference";
import CallForPaper from "@/components/CallForPaper";
import ConferenceSpeakers from "@/components/ConferenceSpeaker";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-plus-jakarta-sans)]">
      {/* <Button className="bg-san-juan-700 hover:bg-san-juan-700/90">test</Button> */}
      <AboutConference />
      <ConferenceSpeakers />
      <CallForPaper />
    </div>
  );
}
