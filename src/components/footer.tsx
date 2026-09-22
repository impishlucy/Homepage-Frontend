import Link from "next/link";
import { Heart, LogIn } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur">
      <div className="container mx-auto py-4 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">

        {/* Left Side */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center md:justify-start">
          <span>Made by <a className="text-primary" href="https://lucy-codes.de">Lucy</a> with</span>
          <Heart className="h-4 w-4 text-red-500 fill-red-500" />
          <span>© {currentYear} All rights reserved</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center">
          <Link
            href="/imprint"
            className="hover:text-foreground transition-colors"
          >
            Imprint
          </Link>
        </div>

      </div>
    </footer>
  );
}