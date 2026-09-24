import Link from "next/link"
import { Heart, LogIn } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="sticky bottom-0 w-full border-t bg-background/95 backdrop-blur">
      <div className="container mx-auto flex flex-col items-center justify-between py-4 text-sm text-muted-foreground md:flex-row">
        {/* Left Side */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 md:justify-start">
          <span>
            Made by{" "}
            <a className="text-primary" href="https://lucy-codes.de">
              Lucy
            </a>{" "}
            with
          </span>
          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          <span>© {currentYear} All rights reserved</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center">
          <Link
            href="/imprint"
            className="transition-colors hover:text-foreground"
          >
            Imprint
          </Link>
        </div>
      </div>
    </footer>
  )
}
