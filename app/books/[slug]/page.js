import Blurb from "@/components/book/Blurb";
import BookHero from "@/components/book/Hero";
import Inside from "@/components/book/Inside";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { books } from "@/constants/books";
import { notFound } from "next/navigation";

export function generateMetadata({ params }) {
  const book = books.find((b) => b.slug === params.slug);
  if (!book) return { title: "Not Found" };
  
  return {
    title: `${book.title} | Author Portfolio`,
    description: book.description,
  };
}

export function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export default function BookDetailPage({ params }) {
  const book = books.find((b) => b.slug === params.slug);
  
  if (!book) {
    notFound();
  }

  return (
    <>
      <BookHero book={book} />
      <Blurb book={book} />
      <Inside book={book} />
      {book.trailers && book.trailers.length > 0 && (
        <section className="font-aria relative py-14 md:py-20 pb-24">
          <div className="container-max relative max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h2
                className="text-balance font-extrabold tracking-tight text-red-500"
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                }}
              >
                Watch The Trailer
              </h2>
            </div>
            <VideoPlayer trailers={book.trailers} />
          </div>
        </section>
      )}
    </>
  );
}
