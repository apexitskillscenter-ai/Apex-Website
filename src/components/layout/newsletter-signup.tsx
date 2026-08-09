"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * NewsletterSignup
 * ----------------
 * A lightweight subscribe field for the footer. Since there's no email service
 * connected yet, submitting opens WhatsApp with a pre-filled "subscribe"
 * message that includes the entered email — funnelling into the channel Apex
 * already uses. Client island so the rest of the footer stays server-rendered.
 */
export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function subscribe(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    const text = encodeURIComponent(
      `Assalam o Alaikum! Please add me to ${siteConfig.shortName} updates. My email: ${trimmed}`
    );
    window.open(
      `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
    setEmail("");
  }

  if (sent) {
    return (
      <p className="flex items-center gap-2 text-sm text-primary">
        <CheckCircle2 className="h-4 w-4" />
        Thanks! Finish in WhatsApp to subscribe.
      </p>
    );
  }

  return (
    <form onSubmit={subscribe} className="flex gap-2" noValidate>
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        aria-label="Email address for updates"
        className="h-10"
      />
      <Button type="submit" size="icon" aria-label="Subscribe" className="h-10 w-10 shrink-0">
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
