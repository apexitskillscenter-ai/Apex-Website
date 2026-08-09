"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import { admissionSchema, type AdmissionFormValues } from "@/lib/validations";
import { courses } from "@/content/courses";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

/**
 * AdmissionForm — 5-field WhatsApp-integrated form.
 * No framer-motion; uses CSS transitions for smooth states.
 */
const CITY_SUGGESTIONS = ["Zafarwal", "Narowal", "Shakargarh", "Sialkot", "Daska"];

interface AdmissionFormProps {
  defaultCourse?: string;
}

export function AdmissionForm({ defaultCourse }: AdmissionFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionSchema),
    defaultValues: { course: defaultCourse ?? "" },
  });

  function buildWhatsAppUrl(values: AdmissionFormValues) {
    const lines = [
      `Assalam o Alaikum! I'd like to enquire about admission at ${siteConfig.shortName}.`,
      "",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Course: ${values.course}`,
      `City: ${values.city}`,
    ];
    if (values.message?.trim()) lines.push(`Message: ${values.message.trim()}`);
    return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  function onSubmit(values: AdmissionFormValues) {
    setStatus("submitting");
    setTimeout(() => {
      window.open(buildWhatsAppUrl(values), "_blank", "noopener,noreferrer");
      setStatus("success");
    }, 400);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <div>
          <h3 className="font-display text-xl font-semibold">You&apos;re almost there!</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            WhatsApp is opening with your details — just hit send. Didn&apos;t open?{" "}
            <a href={buildWhatsAppUrl(getValues())} target="_blank" rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline">
              Tap here
            </a>.
          </p>
        </div>
        <Button variant="outline" onClick={() => { reset({ course: defaultCourse ?? "" }); setStatus("idle"); }}>
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="space-y-2">
        <Label htmlFor="adm-name">Full Name *</Label>
        <Input id="adm-name" placeholder="Your name" {...register("name")} />
        {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="adm-phone">Phone / WhatsApp *</Label>
        <Input id="adm-phone" placeholder="03XX XXXXXXX" {...register("phone")} />
        {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="adm-course">Interested Course *</Label>
        <select id="adm-course" {...register("course")}
          className="flex h-11 w-full rounded-lg border border-input bg-secondary/40 px-4 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <option value="">Select a course</option>
          {courses.map((c) => (
            <option key={c.slug} value={c.title}>{c.title}</option>
          ))}
        </select>
        {errors.course && <p className="text-xs text-red-600">{errors.course.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="adm-city">City *</Label>
        <Input id="adm-city" list="city-suggestions" placeholder="e.g. Zafarwal" {...register("city")} />
        <datalist id="city-suggestions">
          {CITY_SUGGESTIONS.map((c) => <option key={c} value={c} />)}
        </datalist>
        {errors.city && <p className="text-xs text-red-600">{errors.city.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="adm-message">Message (optional)</Label>
        <Textarea id="adm-message" placeholder="Any questions about timings, fees, etc.?" {...register("message")} />
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Opening WhatsApp...</>
        ) : (
          <><MessageCircle className="h-4 w-4" /> Send via WhatsApp</>
        )}
      </Button>
      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
        <Send className="h-3 w-3" />
        We&apos;ll reply on WhatsApp — usually within a few hours.
      </p>
    </form>
  );
}
