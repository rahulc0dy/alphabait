import React from "react";
import Link from "next/link";

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const LetterLinks = () => {
  return (
    <div className="grid grid-cols-4 gap-2 py-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-13">
      {letters.map((letter) => (
        <Link
          key={letter}
          href={`/alphabet/${letter.toLowerCase()}`}
          className="text-text flex items-center justify-center rounded bg-gray-200/20 p-2 text-center hover:bg-gray-200/70"
        >
          {letter}
        </Link>
      ))}
    </div>
  );
};
export default LetterLinks;
