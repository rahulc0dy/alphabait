"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface VoiceContextProps {
  voices: SpeechSynthesisVoice[];
  selectedVoice: SpeechSynthesisVoice | null;
  setSelectedVoice: (voice: SpeechSynthesisVoice) => void;
}

const VoiceContext = createContext<VoiceContextProps | undefined>(undefined);

export const VoiceProvider = ({ children }: { children: React.ReactNode }) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      // If nothing is selected yet, set the first one (or choose a specific one if you prefer)
      if (!selectedVoice && availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0]);
      }
    };

    if (typeof window !== "undefined" && window.speechSynthesis) {
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []); // run once

  return (
    <VoiceContext.Provider value={{ voices, selectedVoice, setSelectedVoice }}>
      {children}
    </VoiceContext.Provider>
  );
};

export const useVoiceContext = () => {
  const context = useContext(VoiceContext);
  if (!context) {
    throw new Error("useVoiceContext must be used within a VoiceProvider.");
  }
  return context;
};
