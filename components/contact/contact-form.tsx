"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm(): React.JSX.Element {
  const t = useTranslations("contactPage");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "rateLimit">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: ContactFormValues): Promise<void> {
    setStatus("idle");
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.status === 429) {
        setStatus("rateLimit");
        return;
      }
      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-none border border-charcoal/10 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="space-y-2">
        <Label htmlFor="name">{t("name")}</Label>
        <Input id="name" placeholder={t("namePlaceholder")} {...register("name")} />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact">{t("contact")}</Label>
        <Input
          id="contact"
          placeholder={t("contactPlaceholder")}
          {...register("contact")}
        />
        {errors.contact && (
          <p className="text-sm text-destructive">{errors.contact.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t("message")}</Label>
        <Textarea
          id="message"
          placeholder={t("messagePlaceholder")}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {status === "success" && (
        <p className="text-sm font-medium text-rose-dark">{t("success")}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive">{t("errorGeneric")}</p>
      )}
      {status === "rateLimit" && (
        <p className="text-sm text-destructive">{t("errorRateLimit")}</p>
      )}

      <Button
        type="submit"
        disabled={submitting}
        className="w-full rounded-none bg-charcoal text-xs font-medium uppercase tracking-widest2 text-cream hover:bg-charcoal-light"
      >
        {submitting ? t("submitting") : t("submit")}
      </Button>
    </form>
  );
}
