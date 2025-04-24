"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
import { textToSpeech } from "@/lib/utils/text-to-speech";
import { useVoiceContext } from "@/providers/VoiceProvider";

interface WordCardProps {
  word: string;
  image: string;
}

const WordCard = ({ word, image }: WordCardProps) => {
  const { selectedVoice } = useVoiceContext();
  return (
    <div
      className={
        "from-bg to-bg-alt hover:from-bg-alt cursor-pointer rounded-2xl bg-gradient-to-b p-0.5 transition-all duration-300 hover:scale-105"
      }
      onClick={() => textToSpeech(word, selectedVoice)}
      key={word}
    >
      <Card
        className={"bg-bg w-full border-none px-5 py-2 shadow-none sm:w-auto"}
      >
        <CardContent
          className={"flex flex-col items-center justify-center gap-2"}
        >
          <Image alt={word} src={image} width={100} height={100} />
          <p
            className={
              "text-text flex items-center justify-center gap-2 text-center text-lg uppercase"
            }
          >
            <SpeakerWaveIcon className={"size-5"} />
            <span className={"first-letter:text-primary"}>{word}</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
export default WordCard;
