"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useVoiceContext } from "@/providers/VoiceProvider";

const VoiceSelection = () => {
  const { voices, selectedVoice, setSelectedVoice } = useVoiceContext();

  const handleSelectVoice = (voice: SpeechSynthesisVoice) => {
    setSelectedVoice(voice);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-bg hover:bg-bg-alt hover:text-text flex max-w-4/5 items-center gap-2 self-center overflow-hidden border-none text-left shadow-none"
        >
          {selectedVoice ? selectedVoice.name : "Select Voice"}
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-bg text-text max-h-60 overflow-y-auto">
        {voices.map((voice) => (
          <DropdownMenuItem
            key={voice.name}
            onClick={() => handleSelectVoice(voice)}
          >
            {voice.name} {voice.lang ? `(${voice.lang})` : ""}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default VoiceSelection;
