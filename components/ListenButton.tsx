"use client";

import React, { useEffect } from "react";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { textToSpeech } from "@/lib/utils/text-to-speech";
import { useVoiceContext } from "@/providers/VoiceProvider";

export const ListenButton = ({ text }: { text: string }) => {
  const { selectedVoice } = useVoiceContext();

  return (
    <Button
      className={
        "font-gamja-flower text-text bg-bg-alt cursor-pointer rounded-lg p-6 text-2xl font-medium"
      }
      onClick={() => textToSpeech(text, selectedVoice)}
    >
      <SpeakerWaveIcon className={"size-6"} />
      Listen
    </Button>
  );
};

export const ListenToRhymeButton = ({ rhyme }: { rhyme: string[] }) => {
  const rhymeText = rhyme.join("\n");

  const { selectedVoice } = useVoiceContext();

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <Button
      className={
        "font-flamenco text-text active:bg-primary cursor-pointer rounded-lg bg-transparent text-2xl font-medium"
      }
      onClick={() => {
        console.log(selectedVoice);
        textToSpeech(rhymeText, selectedVoice);
      }}
    >
      <SpeakerWaveIcon className={"size-6"} />
      Listen
    </Button>
  );
};

export default ListenButton;
