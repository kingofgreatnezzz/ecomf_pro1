import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ErrorPageLoading } from '../services/svg'; // Assuming ErrorPageLoading is an SVG component

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-200 p-4 mt-10">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="mb-8 p-8"
      >
        <ErrorPageLoading className="w-48 h-48" />
      </motion.div>
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-red-600"
      >
        Error Loading Page
      </motion.h1>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-lg text-gray-700 mt-4"
      >
        Sorry, something went wrong while loading the page.
      </motion.p>
      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 bg-red-600 text-slate-100 py-2 px-4 rounded-lg"
        >
          Go to Home
        </motion.button>
      </Link>
    </div>
  );
}
