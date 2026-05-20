import Hero from "@/components/home/Hero";
import dynamic from "next/dynamic";

const Definition = dynamic(() => import("@/components/home/Definition"), {
  loading: () => null,
});

const AuthorTeaser = dynamic(() => import("@/components/home/AuthorTeaser"), {
  loading: () => null,
});

const BookTrailer = dynamic(() => import("@/components/home/BookTrailer"), {
  loading: () => null,
});

const Sample = dynamic(() => import("@/components/book/Sample"), {
  loading: () => null,
});

const BookTeaser = dynamic(() => import("@/components/home/BookTeaser"), {
  loading: () => null,
});

const CTA = dynamic(() => import("@/components/home/CTA"), {
  loading: () => null,
});

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
