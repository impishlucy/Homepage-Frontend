"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { HomeData } from "@/lib/types"

export default function Page() {
  const [data, setData] = useState<HomeData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const hostname =
          typeof window !== "undefined" ? window.location.hostname : ""
        const apiBaseUrl = `https://api.${hostname}`

        const res = await fetch(`${apiBaseUrl}/data/home`)

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`)
        }

        const text = await res.json()
        const jsonData = text ? text : null
        setData(jsonData)
      } catch (error) {
        console.error("Error fetching home data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <></>
  }

  return (
    <div className="flex w-full flex-col items-center space-y-8 text-center">
      {/* Avatar / Profile Image */}
      <div className="group relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-25 blur transition duration-500 group-hover:opacity-50"></div>
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-background ring-2 ring-primary/20">
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
      <div className="max-w-2xl space-y-4 px-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Hi, I&apos;m{" "}
          <span className="text-primary">{data?.user || "API ERROR"}</span>
        </h1>

        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          <span
            dangerouslySetInnerHTML={{
              __html: data?.blurp ?? "API could not be reached.",
            }}
          />
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <Link
          href="/about"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
        >
          About me
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
