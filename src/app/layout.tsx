import type { Metadata, Viewport } from "next";
import "./globals.css";
import { buildMetadata, organizationSchema } from "@/lib/seo";
import { siteConfig } from "@/content/site";
export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), ...buildMetadata({}), icons: { icon: "/favicon.ico" } };
export const viewport: Viewport = { themeColor: "#14233f", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />{children}</body></html>);
}
