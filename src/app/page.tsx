import ExtraDetail from "@/components/ExtraDetail";
import FeaturedCourse from "@/components/FeaturedCourse";
import { SpotlightPreview } from "@/components/HeroSection";
import HoverCard from "@/components/HoverCard";
import Review from "@/components/Review";
import TeamPage from "@/components/TeamPage";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <SpotlightPreview/>
  <FeaturedCourse/>
  <ExtraDetail/>
  <Review/>
  <HoverCard/>
  <TeamPage/>
  </>
  );
}
