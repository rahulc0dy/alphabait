import { useEffect, useState } from "react";

export const useVoice = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      // If no voice is selected yet, pick the first available voice by default.
      if (!selectedVoice && availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0]);
      }
    };

    if (typeof window !== "undefined" && window.speechSynthesis) {
      loadVoices();
      // Some browsers load voices asynchronously so when they change, update.
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, [selectedVoice]);

  return { voices, selectedVoice, setSelectedVoice };
};
