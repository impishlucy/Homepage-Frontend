"use client";

import { Ban, Home } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Game() {
  const [isSupportedDevice, setIsSupportedDevice] = useState<boolean | null>(null);
  const [isGameAvailable, setIsGameAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    const hasMouse = window.matchMedia("(pointer: fine)").matches;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const isSupported = hasMouse && hasHover && !hasTouch;
    setIsSupportedDevice(isSupported);

    // Only check game availability if device is supported
    if (isSupported) {
      const hostname = window.location.hostname;
      const url = `https://game.${hostname}`;

      fetch(url, { method: 'HEAD' })
        .then((response) => {
          setIsGameAvailable(response.ok);
        })
        .catch(() => {
          setIsGameAvailable(false);
        });
    } else {
      // For unsupported devices, set to true so we don't wait for it
      setIsGameAvailable(true);
    }
  }, []);

  const hostname = typeof window !== "undefined" ? window.location.hostname : "";
  const gameUrl = `https://game.${hostname}`;

  // Loading state - wait for both checks
  if (isSupportedDevice === null || isGameAvailable === null) {
    return (
      <>
      </>
    );
  }

  // Mobile / Unsupported device state
  if (!isSupportedDevice) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
        <Ban className="w-16 h-16 text-red-500 mb-6" />
        <h2 className="text-2xl font-bold mb-3">Mobile Device Detected</h2>
        <p className="text-muted-foreground max-w-md mb-6">
          This game requires a Mouse & Keyboard. Please visit this website on a PC to play.
        </p>
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          <Home className="w-4 h-4" />
          Go Back Home
        </Link>
      </div>
    );
  }

  // Game unavailable / 404 state
  if (!isGameAvailable) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
        <Ban className="w-16 h-16 text-yellow-500 mb-6" />
        <h2 className="text-2xl font-bold mb-3">Game Not Implemented Yet</h2>
        <p className="text-muted-foreground max-w-md mb-6">
          The game server is currently unavailable or not implemented at this time. Please check back later!
        </p>
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          <Home className="w-4 h-4" />
          Go Back Home
        </Link>
      </div>
    );
  }

  // Render game iframe for supported & available devices
  return (
    <div className="w-full h-full flex flex-col min-h-0">
      <iframe
        src={gameUrl}
        className="w-full h-full border-0 block"
        title="Lucy's Game"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups"
      />
    </div>
  );
}