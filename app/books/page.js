import BookGrid from "@/components/book/BookGrid";
import { books } from "@/constants/books";

export const metadata = {
  title: "Books | Author Portfolio",
  description: "Explore the collection of books.",
};

export default function BooksPage() {
  return (
    <div className="font-aria relative min-h-screen py-32 lg:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(110%_70%_at_50%_-10%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute left-[50%] top-0 size-120 -translate-x-1/2 rounded-full bg-[#ff4444]/10 blur-3xl" />
      <div className="bg-noise" />

      <div className="container-max relative z-10">
        <div className="mb-16 text-center">
          <h1 className="font-extrabold tracking-tight text-white" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "clamp(2rem,4vw,3.5rem)" }}>
            The <span className="text-red-500 font-comic-sans">Wild Witch</span> Series
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            Enter worlds where magic, mystery, and adventure collide.
          </p>
        </div>

        <BookGrid books={books} />
      </div>
    </div>
  );
}
