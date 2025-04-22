import React from "react";
import { z } from "zod";

const alphabetValidation = z
  .string({ message: "Unable to parse the alphabet entered." })
  .length(1, "Looks like you passed a load of characters, We don't allow that.")
  .regex(/^[a-z0-9]$/i, "The alphabet is invalid or not yet supported.")
  .toLowerCase();

const LetterPage = async ({
  params,
}: {
  params: Promise<{ alphabet: string }>;
}) => {
  const { alphabet } = await params;

  const parsed = alphabetValidation.safeParse(alphabet);

  if (!parsed.success) {
    throw parsed.error;
  }

  const validAlphabet = parsed.data;

  return <main className="wrapper">{validAlphabet}</main>;
};

export default LetterPage;
