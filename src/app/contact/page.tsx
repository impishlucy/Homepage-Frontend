"use client";

import { useState, useEffect, JSX } from "react";
import type { ContactData } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

function CopyToClipboard(text: string) {
  if (!text) return; // Prevent copying empty/undefined values

  navigator.clipboard.writeText(text).then(() => {
    toast.add({
      title: "Copied to clipboard"
    });
  }).catch((err) => {
    console.error("Failed to copy text: ", err);
    toast.add({
      title: "Failed to copy"
    });
  });
}

export default function ContactPage(): JSX.Element {
  const [data, setData] = useState<ContactData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const hostname = window.location.hostname;
        const baseUrl = `https://api.${hostname}`;
        const res = await fetch(`${baseUrl}/data/contact`);

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const jsonData = await res.json();
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
      <div className="space-y-4 max-w-2xl px-4">

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {data ? "Contact Me" : "API ERROR"}
        </h1>

        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          {data?.discord ? <Card>
            <CardContent>
              <h2>Discord</h2>
              <Button onClick={() => CopyToClipboard(data?.discord ?? "")}>
                Copy Name
              </Button>
            </CardContent>
          </Card> : null}

          {data?.email ? <Card>
            <CardContent>
              <h2>Mail</h2>
              <Button>
                <Link href={data.email} />
              </Button>
            </CardContent>
          </Card> : null}

          {data?.twitter ? <Card>
            <CardContent>
              <h2>Mail</h2>
              <Button>
                <Link href={data.twitter} />
              </Button>
            </CardContent>
          </Card> : null}

          {data?.phone ? <Card>
            <CardContent>
              <h2>Mail</h2>
              <Button>
                <Link href={data.phone} />
              </Button>
            </CardContent>
          </Card> : null}

          {data?.linkedin ? <Card>
            <CardContent>
              <h2>Mail</h2>
              <Button>
                <Link href={data.linkedin} />
              </Button>
            </CardContent>
          </Card> : null}

        </div>
      </div>
    </div>
  );
}