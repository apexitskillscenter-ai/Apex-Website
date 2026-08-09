"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { leadSchema, type LeadFormValues } from "@/lib/validations";
import { courses } from "@/content/courses";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface LeadFormProps {
  /** Pre-select a course (used on course detail pages). */
  defaultCourse?: string;
}

export function LeadForm({ defaultCourse }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { course: defaultCourse ?? "" },
  });

  async function onSubmit(values: LeadFormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <div>
          <h3 className="font-display text-xl font-semibold">Thank you!</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            We have received your details and will contact you shortly.
          </p>
        </div>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input id="name" placeholder="Your name" {...register("name")} />
        {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone / WhatsApp *</Label>
        <Input id="phone" placeholder="03XX XXXXXXX" {...register("phone")} />
        {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email (optional)</Label>
        <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
        {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="course">Course of Interest</Label>
        <select
          id="course"
          {...register("course")}
          className="flex h-11 w-full rounded-lg border border-input bg-secondary/40 px-4 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Select a course</option>
          {courses.map((c) => (
            <option key={c.slug} value={c.title}>
              {c.title}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea id="message" placeholder="Any questions?" {...register("message")} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or message us on WhatsApp.
        </p>
      )}

      <Button type="submit" className="w-full" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Request a Call Back"
        )}
      </Button>

      {/* WhatsApp fallback — high-trust channel for local audience */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <MessageCircle className="h-4 w-4" />
        Or message us directly on WhatsApp
      </a>
    </form>
  );
}
