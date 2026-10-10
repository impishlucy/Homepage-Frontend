"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { HomeData } from "@/lib/types"
import type { SVGProps } from "react"

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 250" {...props}>
      <path
        fill="#ffffff"
        d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403"
      />
    </svg>
  )
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 180" {...props}>
      <path
        fill="red"
        d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
      />
      <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
    </svg>
  )
}

export function BlueskyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 226" {...props}>
      <path
        fill="#1185fe"
        d="M55.491 15.172c29.35 22.035 60.917 66.712 72.509 90.686c11.592-23.974 43.159-68.651 72.509-90.686C221.686-.727 256-13.028 256 26.116c0 7.818-4.482 65.674-7.111 75.068c-9.138 32.654-42.436 40.983-72.057 35.942c51.775 8.812 64.946 38 36.501 67.187c-54.021 55.433-77.644-13.908-83.696-31.676c-1.11-3.257-1.63-4.78-1.637-3.485c-.008-1.296-.527.228-1.637 3.485c-6.052 17.768-29.675 87.11-83.696 31.676c-28.445-29.187-15.274-58.375 36.5-67.187c-29.62 5.041-62.918-3.288-72.056-35.942C4.482 91.79 0 33.934 0 26.116C0-13.028 34.314-.727 55.491 15.172"
      />
    </svg>
  )
}

export function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 290" {...props}>
      <path
        fill="#ff004f"
        d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9"
      />
      <path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z" />
      <path
        fill="#00f2ea"
        d="M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833"
      />
    </svg>
  )
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 264.583 264.583"
      {...props}
    >
      <defs>
        <radialGradient
          xlinkHref="#a"
          id="f"
          cx="158.429"
          cy="578.088"
          r="52.352"
          fx="158.429"
          fy="578.088"
          gradientTransform="matrix(0 -4.03418 4.28018 0 -2332.227 942.236)"
          gradientUnits="userSpaceOnUse"
        />
        <radialGradient
          xlinkHref="#b"
          id="g"
          cx="172.615"
          cy="600.692"
          r="65"
          fx="172.615"
          fy="600.692"
          gradientTransform="rotate(-59.87 -448.718 683.191)scale(1.34356 1.74916)"
          gradientUnits="userSpaceOnUse"
        />
        <radialGradient
          xlinkHref="#c"
          id="h"
          cx="144.012"
          cy="51.337"
          r="67.081"
          fx="144.012"
          fy="51.337"
          gradientTransform="matrix(-2.3989 .67549 -.23008 -.81732 464.996 -26.404)"
          gradientUnits="userSpaceOnUse"
        />
        <radialGradient
          xlinkHref="#d"
          id="e"
          cx="199.788"
          cy="628.438"
          r="52.352"
          fx="199.788"
          fy="628.438"
          gradientTransform="rotate(164.25 577.79 780.16)scale(3.2292 2.32649)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient id="d">
          <stop offset="0" stopColor="#ff005f" />
          <stop offset="1" stopColor="#fc01d8" />
        </linearGradient>
        <linearGradient id="c">
          <stop offset="0" stopColor="#780cff" />
          <stop offset="1" stopColor="#820bff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="b">
          <stop offset="0" stopColor="#fc0" />
          <stop offset="1" stopColor="#fc0" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="a">
          <stop offset="0" stopColor="#fc0" />
          <stop offset=".124" stopColor="#fc0" />
          <stop offset=".567" stopColor="#fe4a05" />
          <stop offset=".694" stopColor="#ff0f3f" />
          <stop offset="1" stopColor="#fe0657" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        fill="url(#e)"
        d="M204.15 18.143c-55.23 0-71.383.057-74.523.317-11.334.943-18.387 2.728-26.07 6.554-5.922 2.942-10.592 6.351-15.201 11.13-8.394 8.716-13.481 19.439-15.323 32.184-.895 6.188-1.156 7.45-1.209 39.056-.02 10.536 0 24.4 0 42.999 0 55.2.062 71.341.326 74.476.916 11.032 2.645 17.973 6.308 25.565 7 14.533 20.37 25.443 36.12 29.514 5.453 1.404 11.476 2.178 19.208 2.544 3.277.142 36.669.244 70.081.244s66.826-.04 70.02-.203c8.954-.422 14.153-1.12 19.901-2.606 15.852-4.09 28.977-14.838 36.12-29.575 3.591-7.409 5.412-14.614 6.236-25.07.18-2.28.255-38.626.255-74.924 0-36.304-.082-72.583-.26-74.863-.835-10.625-2.656-17.77-6.364-25.32-3.042-6.182-6.42-10.799-11.324-15.519-8.752-8.361-19.455-13.45-32.21-15.29-6.18-.894-7.41-1.158-39.033-1.213z"
        transform="translate(-71.816 -18.143)"
      />
      <path
        fill="url(#f)"
        d="M204.15 18.143c-55.23 0-71.383.057-74.523.317-11.334.943-18.387 2.728-26.07 6.554-5.922 2.942-10.592 6.351-15.201 11.13-8.394 8.716-13.481 19.439-15.323 32.184-.895 6.188-1.156 7.45-1.209 39.056-.02 10.536 0 24.4 0 42.999 0 55.2.062 71.341.326 74.476.916 11.032 2.645 17.973 6.308 25.565 7 14.533 20.37 25.443 36.12 29.514 5.453 1.404 11.476 2.178 19.208 2.544 3.277.142 36.669.244 70.081.244s66.826-.04 70.02-.203c8.954-.422 14.153-1.12 19.901-2.606 15.852-4.09 28.977-14.838 36.12-29.575 3.591-7.409 5.412-14.614 6.236-25.07.18-2.28.255-38.626.255-74.924 0-36.304-.082-72.583-.26-74.863-.835-10.625-2.656-17.77-6.364-25.32-3.042-6.182-6.42-10.799-11.324-15.519-8.752-8.361-19.455-13.45-32.21-15.29-6.18-.894-7.41-1.158-39.033-1.213z"
        transform="translate(-71.816 -18.143)"
      />
      <path
        fill="url(#g)"
        d="M204.15 18.143c-55.23 0-71.383.057-74.523.317-11.334.943-18.387 2.728-26.07 6.554-5.922 2.942-10.592 6.351-15.201 11.13-8.394 8.716-13.481 19.439-15.323 32.184-.895 6.188-1.156 7.45-1.209 39.056-.02 10.536 0 24.4 0 42.999 0 55.2.062 71.341.326 74.476.916 11.032 2.645 17.973 6.308 25.565 7 14.533 20.37 25.443 36.12 29.514 5.453 1.404 11.476 2.178 19.208 2.544 3.277.142 36.669.244 70.081.244s66.826-.04 70.02-.203c8.954-.422 14.153-1.12 19.901-2.606 15.852-4.09 28.977-14.838 36.12-29.575 3.591-7.409 5.412-14.614 6.236-25.07.18-2.28.255-38.626.255-74.924 0-36.304-.082-72.583-.26-74.863-.835-10.625-2.656-17.77-6.364-25.32-3.042-6.182-6.42-10.799-11.324-15.519-8.752-8.361-19.455-13.45-32.21-15.29-6.18-.894-7.41-1.158-39.033-1.213z"
        transform="translate(-71.816 -18.143)"
      />
      <path
        fill="url(#h)"
        d="M204.15 18.143c-55.23 0-71.383.057-74.523.317-11.334.943-18.387 2.728-26.07 6.554-5.922 2.942-10.592 6.351-15.201 11.13-8.394 8.716-13.481 19.439-15.323 32.184-.895 6.188-1.156 7.45-1.209 39.056-.02 10.536 0 24.4 0 42.999 0 55.2.062 71.341.326 74.476.916 11.032 2.645 17.973 6.308 25.565 7 14.533 20.37 25.443 36.12 29.514 5.453 1.404 11.476 2.178 19.208 2.544 3.277.142 36.669.244 70.081.244s66.826-.04 70.02-.203c8.954-.422 14.153-1.12 19.901-2.606 15.852-4.09 28.977-14.838 36.12-29.575 3.591-7.409 5.412-14.614 6.236-25.07.18-2.28.255-38.626.255-74.924 0-36.304-.082-72.583-.26-74.863-.835-10.625-2.656-17.77-6.364-25.32-3.042-6.182-6.42-10.799-11.324-15.519-8.752-8.361-19.455-13.45-32.21-15.29-6.18-.894-7.41-1.158-39.033-1.213z"
        transform="translate(-71.816 -18.143)"
      />
      <path
        fill="#fff"
        d="M132.345 33.973c-26.716 0-30.07.117-40.563.594-10.472.48-17.62 2.136-23.876 4.567-6.47 2.51-11.958 5.87-17.426 11.335-5.472 5.464-8.834 10.948-11.354 17.412-2.44 6.252-4.1 13.397-4.57 23.858-.47 10.486-.593 13.838-.593 40.535s.119 30.037.594 40.522c.482 10.465 2.14 17.609 4.57 23.859 2.515 6.465 5.876 11.95 11.346 17.414 5.466 5.468 10.955 8.834 17.42 11.345 6.26 2.431 13.41 4.088 23.881 4.567 10.493.477 13.844.594 40.559.594 26.719 0 30.061-.117 40.555-.594 10.472-.48 17.63-2.136 23.888-4.567 6.468-2.51 11.948-5.877 17.414-11.345 5.472-5.464 8.834-10.949 11.354-17.412 2.419-6.252 4.079-13.398 4.57-23.858.472-10.486.595-13.828.595-40.525s-.123-30.047-.594-40.533c-.492-10.465-2.152-17.608-4.57-23.858-2.521-6.466-5.883-11.95-11.355-17.414-5.472-5.468-10.944-8.827-17.42-11.335-6.271-2.431-13.424-4.088-23.897-4.567-10.493-.477-13.834-.594-40.558-.594zm-8.825 17.715c2.62-.004 5.542 0 8.825 0 26.266 0 29.38.094 39.752.565 9.591.438 14.797 2.04 18.264 3.385 4.591 1.782 7.864 3.912 11.305 7.352 3.443 3.44 5.575 6.717 7.362 11.305 1.346 3.46 2.951 8.663 3.388 18.247.47 10.363.573 13.475.573 39.71 0 26.233-.102 29.346-.573 39.709-.44 9.584-2.042 14.786-3.388 18.247-1.783 4.587-3.919 7.854-7.362 11.292-3.443 3.441-6.712 5.57-11.305 7.352-3.463 1.352-8.673 2.95-18.264 3.388-10.37.47-13.486.573-39.752.573-26.268 0-29.38-.102-39.751-.573-9.592-.443-14.797-2.044-18.267-3.39-4.59-1.781-7.87-3.911-11.313-7.352-3.443-3.44-5.574-6.709-7.362-11.298-1.346-3.461-2.95-8.663-3.387-18.247-.472-10.363-.566-13.476-.566-39.726s.094-29.347.566-39.71c.438-9.584 2.04-14.786 3.387-18.25 1.783-4.588 3.919-7.865 7.362-11.305 3.443-3.441 6.722-5.57 11.313-7.357 3.468-1.351 8.675-2.949 18.267-3.389 9.075-.41 12.592-.532 30.926-.553zm61.337 16.322c-6.518 0-11.805 5.277-11.805 11.792 0 6.512 5.287 11.796 11.805 11.796s11.804-5.284 11.804-11.796c0-6.513-5.287-11.796-11.805-11.796zm-52.512 13.782c-27.9 0-50.519 22.603-50.519 50.482s22.62 50.471 50.52 50.471 50.51-22.592 50.51-50.471-22.613-50.482-50.513-50.482zm0 17.715c18.11 0 32.792 14.67 32.792 32.767 0 18.096-14.683 32.767-32.792 32.767s-32.791-14.671-32.791-32.767c0-18.098 14.68-32.767 32.791-32.767"
      />
    </svg>
  )
}


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

      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        {data?.links?.github && (
          <Link
            href={data.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile in a new tab"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground shadow transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
          >
            <GithubIcon className="h-10 w-10" />
          </Link>
        )}
        {data?.links?.youTube && (
          <Link
            href={data.links.youTube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile in a new tab"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground shadow transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
          >
            <YoutubeIcon className="h-10 w-10" />
          </Link>
        )}
        {data?.links?.bluesky && (
          <Link
            href={data.links.bluesky}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile in a new tab"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground shadow transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
          >
            <BlueskyIcon className="h-10 w-10" />
          </Link>
        )}
        {data?.links?.tiktok && (
          <Link
            href={data.links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile in a new tab"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground shadow transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
          >
            <TiktokIcon className="h-10 w-10" />
          </Link>
        )}
        {data?.links?.instagram && (
          <Link
            href={data.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile in a new tab"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground shadow transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
          >
            <InstagramIcon className="h-10 w-10" />
          </Link>
        )}
      </div>
    </div>
  )
}
