"use client";

import { useState, useEffect, JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { ImprintData } from "@/lib/types"; // Adjust path if needed

export default function ImprintPage(): JSX.Element {
  const [data, setData] = useState<ImprintData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const hostname = window.location.hostname;
        const baseUrl = `https://api.${hostname}`;
        const res = await fetch(`${baseUrl}/data/imprint`);

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching imprint data:", error);
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
    <div className="flex flex-col items-center text-left space-y-8 w-full py-8">
      <div className="space-y-6 max-w-2xl px-4 w-full">

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">
          Imprint
        </h1>

        <Card className="bg-card/50">
          <CardContent className="p-6 space-y-6 text-sm text-foreground leading-relaxed">

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Information according to § 5 TMG (Telemedia Act)</h2>
              <div className="space-y-1">
                <p className="font-medium">{data?.name ?? "API error"}</p>

                <p>
                  <span dangerouslySetInnerHTML={{ __html: data?.address ?? "API error" }} />
                </p>

                <p>
                  <span className="font-medium">Phone:</span> {data?.phone ?? "API error"}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {data?.email ?? "API error"}
                </p>
              </div>
            </section>

            <hr className="border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Disclaimer</h2>

              <div className="space-y-2">
                <h3 className="font-semibold">Liability for Content</h3>
                <p>
                  As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 (1) TMG. Under § 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under the general laws remain unaffected. A liability in this respect is, however, only possible from the point in time at which a concrete infringement of the law becomes known. If we become aware of any such infringements, we will remove this content immediately.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Liability for Links</h3>
                <p>
                  Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.
                </p>
              </div>
            </section>

            <hr className="border-border" />

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Copyright</h2>
              <p>
                The contents and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use.
              </p>
            </section>

            <hr className="border-border" />

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Hosting and Server Logs</h2>
              <p>
                This website is hosted by an external service provider (hoster). The personal data collected on this website is stored on the hoster&apos;s servers. This may include, but is not limited to, IP addresses, browser type, device information, and referrer URLs.
              </p>
              <p>
                This data is collected automatically by the hoster&apos;s infrastructure via standard HTTP traffic to ensure the secure and efficient operation of the website. As the website operator, I do not manually collect, merge, analyze, or have direct access to delete or modify this server-side log data. The processing is based on Art. 6 (1) (f) GDPR (legitimate interest in the technically error-free provision of the service).
              </p>
            </section>

          </CardContent>
        </Card>

      </div>
    </div>
  );
}