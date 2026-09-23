"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { HomeData } from "@/lib/types";

export default function Page() {
  const [data, setData] = useState<HomeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const hostname = typeof window !== "undefined" ? window.location.hostname : "";
        const apiBaseUrl = `https://api.${hostname}`;

        const res = await fetch(`${apiBaseUrl}/data/home`);

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const text = await res.json();
        const jsonData = text ? text : null;
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching home data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
      </>
    );
  }

  return (
    <div className="flex flex-col items-center text-center space-y-8 w-full">
      {/* Avatar / Profile Image */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
        <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-background ring-2 ring-primary/20">
          <Image
            src={data?.avatar || "/favicon.ico"}
            alt={`${data?.user || "User"} Avatar`}
            width={128}
            height={128}
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-4 max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Hi, I&apos;m <span className="text-primary">{data?.user || "API ERROR"}</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {data?.blurp || "API could not be reached."}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <Link
          href="/about"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          About me
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>

      </div>
    </div>
  );
}