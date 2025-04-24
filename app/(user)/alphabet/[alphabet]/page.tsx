import React from "react";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { getAlphabetData } from "@/lib/utils/alphabet-data";
import ListenButton, { ListenToRhymeButton } from "@/components/ListenButton";
import WordCard from "@/components/WordCard";
import LetterLinks from "@/components/LetterLinks";

const alphabetValidation = z
  .string({ message: "Unable to parse the alphabet entered." })
  .length(1, "Looks like you passed a load of characters, We don't allow that.")
  .regex(/^[a-z0-9]$/i, "The alphabet is invalid or not yet supported.")
  .toLowerCase();

export const dynamicParams = false;

export async function generateStaticParams() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  return letters.map((letter) => ({ alphabet: letter }));
}

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

  const alphabetData = await getAlphabetData(validAlphabet);

  if (!alphabetData) {
    return (
      <main className="wrapper">
        <p>
          The alphabet {validAlphabet.toUpperCase()} is not yet available to
          learn.
        </p>
      </main>
    );
  }

  const { pronunciation, details, regionalMappings, wordsData, rhymes } =
    alphabetData;

  return (
    <main className="wrapper">
      <section
        className={"flex flex-wrap items-center justify-around gap-10 py-5"}
      >
        <h2 className={"font-gelasio text-9xl"}>
          {validAlphabet.toUpperCase()}
        </h2>

        <div
          className={
            "border-muted grid aspect-square h-full grid-cols-2 place-items-center border-2"
          }
        >
          <p className={"font-give-you-glory px-5 text-xl"}>
            {validAlphabet.toUpperCase()}
          </p>
          <p className={"px-5 text-xl"}>{validAlphabet}</p>
          <p className={"font-gruppo px-5 text-xl"}>
            {validAlphabet.toUpperCase()}
          </p>
          <p className={"font-gruppo px-5 text-xl"}>{validAlphabet}</p>
        </div>

        <div>
          <h3 className={"font-gamja-flower text-xl"}>Regional Mappings</h3>
          <hr className={"w-full"} />
          <div className={"grid gap-5 pt-5 sm:grid-cols-2"}>
            <Card className={"bg-bg-alt gap-0 px-6 py-2"}>
              <CardHeader>
                <Image
                  src={regionalMappings.Bengali}
                  alt={`${validAlphabet} in bengali`}
                  width={100}
                  height={100}
                />
              </CardHeader>
              <CardFooter className={"text-text text-center"}>
                <span>Bengali</span>
              </CardFooter>
            </Card>
            <Card className={"bg-bg-alt gap-0 px-6 py-2"}>
              <CardHeader>
                <Image
                  src={regionalMappings.Hindi}
                  alt={`${validAlphabet} in hindi`}
                  width={100}
                  height={100}
                />
              </CardHeader>
              <CardFooter className={"text-text flex w-full justify-center"}>
                <span>Hindi</span>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className={"grid gap-10 py-5 sm:grid-cols-2"}>
        <div>
          <h3 className={"font-gamja-flower text-xl"}>Details</h3>
          <hr />
          <p className={"font-fenix text-lg"}>{details}</p>
        </div>

        <div>
          <h3 className={"font-gamja-flower text-xl"}>Pronunciation</h3>
          <hr />
          <div className={"flex flex-wrap gap-5 py-4"}>
            <p
              className={
                "font-gamja-flower text-primary bg-bg-alt rounded-lg px-4 py-2 text-2xl font-medium"
              }
            >
              {pronunciation.ipa}
            </p>
            <p
              className={
                "font-gamja-flower text-primary bg-bg-alt rounded-lg px-4 py-2 text-2xl font-medium"
              }
            >
              {pronunciation.spelling}
            </p>
            <ListenButton text={validAlphabet} />
          </div>
        </div>
      </section>

      <section>
        <h3 className={"font-gamja-flower text-xl"}>Words</h3>
        <hr />
        <div
          className={
            "flex w-full grow flex-wrap justify-center gap-5 py-4 sm:justify-between"
          }
        >
          {wordsData.map((word) => (
            <WordCard image={word.image} word={word.word} key={word.word} />
          ))}
        </div>
      </section>

      <section>
        <h3 className={"font-gamja-flower text-xl"}>Rhymes</h3>
        <hr />
        <div className={"font-flamenco grid gap-10 py-4 sm:grid-cols-2"}>
          {rhymes.map((rhyme) => (
            <Card
              className={"border-bg-alt bg-bg border-2 shadow-none"}
              key={rhyme.name}
            >
              <CardHeader className={"text-primary text-3xl font-medium"}>
                {rhyme.name}
              </CardHeader>
              <CardContent
                className={
                  "text-text flex flex-col items-center justify-center gap-2 text-xl"
                }
              >
                {rhyme.content.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </CardContent>
              <CardFooter className={"flex items-center justify-center"}>
                <ListenToRhymeButton rhyme={rhyme.content} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className={"py-4"}>
        <h3>Other letters</h3>
        <LetterLinks />
      </section>
    </main>
  );
};

export default LetterPage;
