"use client";

import { useState, useEffect, JSX } from "react";
import Link from "next/link";
import type { ProjectData } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import { SVGProps } from 'react';
import { Globe } from "lucide-react"

// Using https://logos.lndev.me/ Expand / Edit this to your needs.

export function CSharpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 285" {...props}>
      <defs>
        <linearGradient id="SVGfnwjfeci" x1="17.42%" x2="56.516%" y1="21.86%" y2="97.437%">
          <stop offset="0%" stopColor="#927be5" />
          <stop offset="100%" stopColor="#512bd4" />
        </linearGradient>
      </defs>
      <path fill="url(#SVGfnwjfeci)" d="M0 89.355v105.576c0 13.06 6.967 25.14 18.286 31.666l91.429 52.794a36.56 36.56 0 0 0 36.571 0l91.429-52.794A36.56 36.56 0 0 0 256 194.93V89.356a36.56 36.56 0 0 0-18.285-31.672l-91.43-52.78a36.55 36.55 0 0 0-36.57 0l-91.43 52.78A36.57 36.57 0 0 0 0 89.356" />
      <path fill="#fff" d="M64.003 123.872v36.575a9.13 9.13 0 0 0 9.145 9.145a9.14 9.14 0 0 0 9.145-9.145a9.142 9.142 0 1 1 18.285 0c0 15.149-12.28 27.43-27.43 27.43s-27.43-12.281-27.43-27.43v-36.57c0-15.15 12.28-27.43 27.43-27.43s27.43 12.28 27.43 27.43a9.142 9.142 0 0 1-18.285 0a9.142 9.142 0 1 0-18.285 0zm146.29 36.575a9.134 9.134 0 0 1-9.146 9.145h-9.145v9.14c0 2.427-.96 4.753-2.678 6.466a9.124 9.124 0 0 1-12.928 0a9.17 9.17 0 0 1-2.679-6.467v-9.14h-18.284v9.14a9.124 9.124 0 0 1-9.146 9.146a9.124 9.124 0 0 1-9.14-9.146v-9.14h-9.15a9.142 9.142 0 0 1 0-18.284h9.145v-18.285h-9.145a9.142 9.142 0 0 1 0-18.285h9.145v-9.145a9.142 9.142 0 0 1 18.285 0v9.14h18.285v-9.14a9.142 9.142 0 0 1 18.285 0v9.14h9.145a9.12 9.12 0 0 1 6.461 2.678a9.124 9.124 0 0 1 0 12.928a9.13 9.13 0 0 1-6.46 2.684h-9.146v18.285h9.145a9.166 9.166 0 0 1 9.145 9.14zm-36.576-27.425h-18.284v18.285h18.284z" />
    </svg>
  );
}

export function TypescriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <path fill="#3178c6" d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0" />
      <path fill="#fff" d="M150.518 200.475v27.62q6.738 3.453 15.938 5.179T185.849 235q9.934 0 18.874-1.899t15.678-6.257q6.738-4.359 10.669-11.394q3.93-7.033 3.93-17.391q0-7.51-2.246-13.163a30.8 30.8 0 0 0-6.479-10.055q-4.232-4.402-10.149-7.898t-13.347-6.602q-5.442-2.245-9.761-4.359t-7.342-4.316q-3.024-2.2-4.665-4.661t-1.641-5.567q0-2.848 1.468-5.135q1.469-2.288 4.147-3.927t6.565-2.547q3.887-.906 8.638-.906q3.456 0 7.299.518q3.844.517 7.732 1.597a54 54 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807q-6.306-2.417-13.778-3.582T198.633 107q-9.847 0-18.658 2.115q-8.811 2.114-15.506 6.602q-6.694 4.49-10.582 11.437Q150 134.102 150 143.769q0 12.342 7.127 21.06t21.638 14.759a292 292 0 0 1 10.625 4.575q4.924 2.244 8.509 4.66t5.658 5.265t2.073 6.474a9.9 9.9 0 0 1-1.296 4.963q-1.295 2.287-3.93 3.97t-6.565 2.632t-9.2.95q-8.983 0-17.794-3.151t-16.327-9.451m-46.036-68.733H140V109H41v22.742h35.345V233h28.137z" />
    </svg>
  );
}

export function HtmlIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="74.6 0 362.8 512" {...props}>
      <path d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23m53.5-69h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8-16.1-24.8V69h-22.6m89.2-69h23v46.2h32.6V69h-55.6" />
      <path fill="#e44d26" d="m107.6 471-33-370.4h362.8l-33 370.2L255.7 512" />
      <path fill="#f16529" d="M256 480.5V131h148.3L376 447" />
      <path fill="#ebebeb" d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4m2 22.8H202l3.2 36.3 50.8 13.6v47.4l-93.2-26" />
      <path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6m-4.1 46.5H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8" />
    </svg>
  );
}

export function UnityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 263" {...props}>
      <path fill="#FFF1F2FF" d="m166.872 131.237l45.91-79.275l22.184 79.275l-22.185 79.256zm-22.376 12.874l45.916 79.262l-79.966-20.486l-57.77-58.776zm45.906-105.033l-45.906 79.275h-91.82l57.77-58.78zm65.539 65.18L227.933.06l-104.54 27.925l-15.475 27.207l-31.401-.225L0 131.244l76.517 76.259h.003l31.388-.232l15.497 27.207l104.528 27.92L255.94 158.22l-15.906-26.982z" />
    </svg>
  );
}

export function NextjsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <defs>
        <linearGradient
          id="SVGrDou6dwg"
          x1="55.633%"
          x2="83.228%"
          y1="56.385%"
          y2="96.08%"
        >
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="SVG9onTObtB"
          x1="50%"
          x2="49.953%"
          y1="0%"
          y2="73.438%"
        >
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <circle id="SVGN5eQqeMK" cx="128" cy="128" r="128" />
      </defs>
      <mask id="SVGMX2wGdvm" fill="#fff">
        <use href="#SVGN5eQqeMK" />
      </mask>
      <g mask="url(#SVGMX2wGdvm)">
        <circle cx="128" cy="128" r="128" />
        <path
          fill="url(#SVGrDou6dwg)"
          d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"
        />
        <path
          fill="url(#SVG9onTObtB)"
          d="M163.556 76.8h17.067v102.4h-17.067z"
        />
      </g>
    </svg>
  )
}


function GetIcon(name: string) {
  switch (name.toLowerCase()) {
    case "c#":
    case "c-sharp":
    case "csharp":
      return CSharpIcon;
    case "typescript":
    case "ts":
      return TypescriptIcon;
    case "html":
      return HtmlIcon;
    case "unity":
      return UnityIcon;
    case "next":
    case "next.js":
    case "nextjs":
      return NextjsIcon;
    default:
      return null;
  }
}

export default function ProjectPage() {
  const [data, setData] = useState<ProjectData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const hostname = typeof window !== "undefined" ? window.location.hostname : "";
        const apiBaseUrl = `https://api.${hostname}`;
        const res = await fetch(`${apiBaseUrl}/data/projects`);

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const text = await res.json();
        const jsonData = text ? text : null;
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching projects data:", error);
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
    <div className="flex flex-col items-center text-center space-y-8 w-full py-8">
      <div className="space-y-6 max-w-2xl px-4 w-full">

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {data ? "My Projects" : "API ERROR"}
        </h1>

        {data?.projects?.slice().reverse().map((project, index) => {
          const title = project.title ?? "Untitled Project";
          const imageUrl = project.imageUrl ?? "";
          const description = project.description ?? "No description provided.";
          const projectUrl = project.projectUrl ?? "";

          return (
            <Card key={index} className="w-full bg-card/50 text-left">
              <CardContent className="space-y-4 p-6">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <h2 className="text-xl font-semibold text-foreground">
                    {title}
                  </h2>

                  <div className="flex flex-row flex-wrap items-center gap-2">
                    {project.technologies?.map((tech, techIndex) => {
                      const IconComponent = GetIcon(tech)
                      if (!IconComponent) return null

                      return (
                        <IconComponent
                          key={techIndex}
                          className="h-6 w-6 text-foreground"
                        />
                      )
                    })}
                  </div>
                </div>

                <p className="text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
                  <span
                    dangerouslySetInnerHTML={{ __html: description ?? "" }}
                  />
                </p>

                {imageUrl && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-md border bg-muted">
                    <Image
                      src={imageUrl}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}

                {projectUrl && (
                  <Link
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
                  >
                    <span>View Project</span>
                    <Globe className="pl-1 h-5 w-5" />
                  </Link>
                )}
              </CardContent>
            </Card>
          )
        })}

      </div>
    </div>
  );
}