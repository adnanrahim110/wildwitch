import Blurb from "@/components/book/Blurb";
import Details from "@/components/book/Details";
import BookHero from "@/components/book/Hero";
import Inside from "@/components/book/Inside";
import Sample from "@/components/book/Sample";

export default function AboutBookPage() {
  return (
    <>
      <BookHero />
      <Blurb />
      <Inside />
    </>
  );
}
