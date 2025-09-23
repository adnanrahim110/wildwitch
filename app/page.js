import AuthorTeaser from "@/components/home/AuthorTeaser";
import BookTeaser from "@/components/home/BookTeaser";
import CTA from "@/components/home/CTA";
import Definition from "@/components/home/Definition";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Definition />
      <AuthorTeaser />
      <CTA />
      <BookTeaser />
    </main>
  );
}
