"use client";

import { motion } from "framer-motion";
import BookCard from "./BookCard";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BookGrid({ books }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      {books.map((book) => (
        <motion.div key={book.id} variants={itemVariants} className="h-full">
          <BookCard book={book} />
        </motion.div>
      ))}
    </motion.div>
  );
}
