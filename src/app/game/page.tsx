"use client"

import { Ban, Home } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Game() {
  const [isSupportedDevice, setIsSupportedDevice] = useState<boolean | null>(
    null
  )
  const [isGameAvailable, setIsGameAvailable] = useState<boolean | null>(null)

  useEffect(() => {
    const hasMouse = window.matchMedia("(pointer: fine)").matches
    const hasHover = window.matchMedia("(hover: hover)").matches
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0

    const isSupported = hasMouse && hasHover && !hasTouch
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsSupportedDevice(isSupported)

    // Only check game availability if device is supported
    if (isSupported) {
      const hostname = window.location.hostname
      const url = `https://game.${hostname}`

      fetch(url, { method: "HEAD" })
        .then((response) => {
          setIsGameAvailable(response.ok)
        })
        .catch(() => {
          setIsGameAvailable(false)
        })
    } else {
      // For unsupported devices, set to true so we don't wait for it
      setIsGameAvailable(true)
    }
  }, [])

  const hostname = typeof window !== "undefined" ? window.location.hostname : ""
  const gameUrl = `https://game.${hostname}`

  // Loading state - wait for both checks
  if (isSupportedDevice === null || isGameAvailable === null) {
    return <></>
  }

  // Mobile / Unsupported device state
  if (!isSupportedDevice) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
        <Ban className="mb-6 h-16 w-16 text-red-500" />
        <h2 className="mb-3 text-2xl font-bold">Mobile Device Detected</h2>
        <p className="mb-6 max-w-md text-muted-foreground">
          This game requires a Mouse & Keyboard. Please visit this website on a
          PC to play.
        </p>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Home className="h-4 w-4" />
          Go Back Home
        </Link>
      </div>
    )
  }

  // Game unavailable / 404 state
  if (!isGameAvailable) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
        <Ban className="mb-6 h-16 w-16 text-yellow-500" />
        <h2 className="mb-3 text-2xl font-bold">Game Not Implemented Yet</h2>
        <p className="mb-6 max-w-md text-muted-foreground">
          The game server is currently unavailable or not implemented at this
          time. Please check back later!
        </p>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Home className="h-4 w-4" />
          Go Back Home
        </Link>
      </div>
    )
  }

  // Render game iframe for supported & available devices
  return (
    <div className="flex h-full min-h-0 w-full flex-col">
      <iframe
        src={gameUrl}
        className="block h-full w-full border-0"
        title="Lucy's Game"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups"
      />
    </div>
  )
}
