import Sample from "@/components/book/Sample";
import AuthorTeaser from "@/components/home/AuthorTeaser";
import BookTeaser from "@/components/home/BookTeaser";
import BookTrailer from "@/components/home/BookTrailer";
import CTA from "@/components/home/CTA";
import Definition from "@/components/home/Definition";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Definition />
      <AuthorTeaser />
      <BookTrailer />
      <Sample />
      <BookTeaser />
      <CTA />
    </main>
  );
}
