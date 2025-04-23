import React from "react";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";

const alphabetValidation = z
  .string({ message: "Unable to parse the alphabet entered." })
  .length(1, "Looks like you passed a load of characters, We don't allow that.")
  .regex(/^[a-z0-9]$/i, "The alphabet is invalid or not yet supported.")
  .toLowerCase();

export async function generateStaticParams() {
  const letters = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
  return letters.map((letter) => ({ alphabet: letter }));
}

const wordsData = [
  {
    word: "Ant",
    definition: "a small animal with a long body and a short neck",
    example: "an ant is a small animal with a long body and a short neck",
    image: "/assets/images/ant.png",
  },
  {
    word: "Apple",
    definition: "a small animal with a long body and a short neck",
    example: "an ant is a small animal with a long body and a short neck",
    image: "/assets/images/apple.png",
  },
  {
    word: "Axe",
    definition: "a small animal with a long body and a short neck",
    example: "an ant is a small animal with a long body and a short neck",
    image: "/assets/images/axe.png",
  },
  {
    word: "Arm",
    definition: "a small animal with a long body and a short neck",
    example: "an ant is a small animal with a long body and a short neck",
    image: "/assets/images/arm.png",
  },
];

const rhymes: [
  { name: string; content: string },
  { name: string; content: string },
] = [
  {
    name: "A is for Ants (hear the tune here)",
    content:
      "The ants go marching one by one, Hurrah, hurrah. The ants go marching one by one, Hurrah, hurrah. The ants go marching one by one, The little one stops to such his thumb, And they all go marching down Into the ground to get out of the rain, BOOM! BOOM! BOOM!",
  },
  {
    name: "A is for Apple Tree (sing to the tune of “A is for Apple Tree”)",
    content:
      "Once a little apple seed was planted in the ground. Down came the raindrops, falling all around. Out came the big sun, bright as bright could be, And that little apple seed Grew into a tree!",
  },
];

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
                  src={`/assets/vectors/letters/bengali/${validAlphabet}.png`}
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
                  src={`/assets/vectors/letters/hindi/${validAlphabet}.png`}
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
          <p className={"font-fenix text-lg"}>
            A, ora, is the first letter and the first vowel letter of the cyka
            Latin alphabet,used in the modern English alphabet, and others
            worldwide.
          </p>
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
              /&apos;eɪ/
            </p>
            <p
              className={
                "font-gamja-flower text-primary bg-bg-alt rounded-lg px-4 py-2 text-2xl font-medium"
              }
            >
              AY
            </p>
            <Button
              className={
                "font-gamja-flower text-text bg-bg-alt cursor-pointer rounded-lg p-6 text-2xl font-medium"
              }
            >
              <SpeakerWaveIcon className={"size-6"} />
              Listen
            </Button>
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
            <div
              className={
                "from-bg to-bg-alt hover:from-bg-alt cursor-pointer rounded-2xl bg-gradient-to-b p-0.5 transition-all duration-300 hover:scale-105"
              }
              key={word.word}
            >
              <Card
                className={
                  "bg-bg w-full border-none px-5 py-2 shadow-none sm:w-auto"
                }
              >
                <CardContent
                  className={"flex flex-col items-center justify-center gap-2"}
                >
                  <Image
                    alt={word.word}
                    src={word.image}
                    width={100}
                    height={100}
                  />
                  <p
                    className={
                      "text-text flex items-center justify-center gap-2 text-center text-lg uppercase"
                    }
                  >
                    <SpeakerWaveIcon className={"size-5"} />
                    <span className={"first-letter:text-primary"}>
                      {word.word}
                    </span>
                  </p>
                </CardContent>
              </Card>
            </div>
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
                  "text-text flex flex-col items-center justify-center gap-2 text-2xl"
                }
              >
                {rhyme.content}
              </CardContent>
              <CardFooter className={"flex items-center justify-center"}>
                <button
                  className={
                    "text-text flex cursor-pointer items-center justify-center gap-3 font-sans"
                  }
                >
                  <SpeakerWaveIcon className={"size-6"} /> Listen to this rhyme.
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LetterPage;
