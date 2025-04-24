"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

const PWAInstallButton: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      // Prevent the default mini-infobar on mobile.
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response: ${outcome}`);
      // Optionally, clear the deferred prompt after prompting.
      setDeferredPrompt(null);
    } else {
      alert("PWA installation is not available at this time.");
    }
  };

  return (
    <Button
      onClick={handleInstallClick}
      className="text-shadow bg-primary text-text cursor-pointer text-lg"
    >
      Download AlphaBait
    </Button>
  );
};

export default PWAInstallButton;
