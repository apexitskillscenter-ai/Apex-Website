import { TopBar } from "@/components/layout/top-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";

export const dynamic = "force-dynamic";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
