"use client";

import React from "react";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { textToSpeech } from "@/lib/utils/text-to-speech";

const ListenButton = ({ text }: { text: string }) => {
  return (
    <Button
      className={
        "font-gamja-flower text-text bg-bg-alt cursor-pointer rounded-lg p-6 text-2xl font-medium"
      }
      onClick={() => textToSpeech(text)}
    >
      <SpeakerWaveIcon className={"size-6"} />
      Listen
    </Button>
  );
};
export default ListenButton;
