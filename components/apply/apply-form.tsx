"use client";

import { useState } from "react";
import { useForm, Controller, type Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  applyFormSchema,
  ageRanges,
  deviceOptions,
  internetSpeedOptions,
  hoursPerDayOptions,
  weekendOptions,
  sourceOptions,
  type ApplyFormValues,
} from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const STEP_FIELDS: ReadonlyArray<ReadonlyArray<Path<ApplyFormValues>>> = [
  ["firstName", "age", "city", "whatsapp"],
  ["device", "internetSpeed", "hoursPerDay", "weekends"],
  ["source", "questions", "consent"],
];

const TOTAL_STEPS = STEP_FIELDS.length;

export function ApplyForm(): React.JSX.Element {
  const t = useTranslations("apply");
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    control,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applyFormSchema),
    mode: "onSubmit",
    defaultValues: {
      firstName: "",
      city: "",
      whatsapp: "",
      questions: "",
    },
  });

  async function goNext(): Promise<void> {
    const valid = await trigger(STEP_FIELDS[step]);
    if (valid) {
      setStep((current) => Math.min(current + 1, TOTAL_STEPS - 1));
    }
  }

  function goBack(): void {
    setStep((current) => Math.max(current - 1, 0));
  }

  async function onSubmit(values: ApplyFormValues): Promise<void> {
    setSubmitError(null);
    setSubmitting(true);
    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.status === 429) {
        setSubmitError(t("errorRateLimit"));
        return;
      }
      if (!response.ok) {
        setSubmitError(t("errorGeneric"));
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(t("errorGeneric"));
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-none border border-charcoal/10 bg-white p-10 text-center shadow-sm"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-rose-dark" />
        <h2 className="mt-4 font-serif text-2xl italic text-charcoal">
          {t("success.title")}
        </h2>
        <p className="mt-2 text-charcoal/60">{t("success.text")}</p>
      </motion.div>
    );
  }

  return (
    <div className="rounded-none border border-charcoal/10 bg-white p-6 shadow-sm sm:p-10">
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium text-charcoal/50">
          {t("stepLabel", { current: step + 1, total: TOTAL_STEPS })}
        </p>
        <Progress value={((step + 1) / TOTAL_STEPS) * 100} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
          >
            {step === 0 && (
              <div className="space-y-5">
                <h2 className="font-serif text-xl italic text-charcoal">
                  {t("steps.one.title")}
                </h2>
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t("steps.one.firstName")}</Label>
                  <Input
                    id="firstName"
                    placeholder={t("steps.one.firstNamePlaceholder")}
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-destructive">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>{t("steps.one.age")}</Label>
                  <Controller
                    name="age"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder={t("steps.one.agePlaceholder")} />
                        </SelectTrigger>
                        <SelectContent>
                          {ageRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.age && (
                    <p className="text-sm text-destructive">{t("steps.one.agePlaceholder")}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">{t("steps.one.city")}</Label>
                  <Input
                    id="city"
                    placeholder={t("steps.one.cityPlaceholder")}
                    {...register("city")}
                  />
                  {errors.city && (
                    <p className="text-sm text-destructive">{errors.city.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">{t("steps.one.whatsapp")}</Label>
                  <Input
                    id="whatsapp"
                    placeholder={t("steps.one.whatsappPlaceholder")}
                    {...register("whatsapp")}
                  />
                  {errors.whatsapp && (
                    <p className="text-sm text-destructive">
                      {errors.whatsapp.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <h2 className="font-serif text-xl italic text-charcoal">
                  {t("steps.two.title")}
                </h2>

                <div className="space-y-2">
                  <Label>{t("steps.two.device")}</Label>
                  <Controller
                    name="device"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {deviceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {t(`steps.two.deviceOptions.${option}`)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <Label>{t("steps.two.internetSpeed")}</Label>
                  <Controller
                    name="internetSpeed"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {internetSpeedOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {t(`steps.two.internetSpeedOptions.${option}`)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <Label>{t("steps.two.hoursPerDay")}</Label>
                  <Controller
                    name="hoursPerDay"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {hoursPerDayOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <Label>{t("steps.two.weekends")}</Label>
                  <Controller
                    name="weekends"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {weekendOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {t(`steps.two.weekendOptions.${option}`)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h2 className="font-serif text-xl italic text-charcoal">
                  {t("steps.three.title")}
                </h2>

                <div className="space-y-2">
                  <Label>{t("steps.three.source")}</Label>
                  <Controller
                    name="source"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {sourceOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {t(`steps.three.sourceOptions.${option}`)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="questions">{t("steps.three.questions")}</Label>
                  <Textarea
                    id="questions"
                    placeholder={t("steps.three.questionsPlaceholder")}
                    {...register("questions")}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Controller
                    name="consent"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        id="consent"
                        checked={field.value ?? false}
                        onCheckedChange={field.onChange}
                      />
                    )}
                  />
                  <Label htmlFor="consent" className="font-normal leading-snug">
                    {t("steps.three.consent")}
                  </Label>
                </div>
                {errors.consent && (
                  <p className="text-sm text-destructive">
                    {t("steps.three.consent")}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {submitError && (
          <p className="mt-4 text-sm text-destructive">{submitError}</p>
        )}

        <div className="mt-8 flex items-center justify-between">
          {step > 0 ? (
            <Button
              type="button"
              variant="outline"
              onClick={goBack}
              className="rounded-none border-charcoal/20 text-xs font-medium uppercase tracking-widest2 text-charcoal hover:bg-charcoal/5"
            >
              {t("back")}
            </Button>
          ) : (
            <span />
          )}

          {step < TOTAL_STEPS - 1 ? (
            <Button
              type="button"
              onClick={goNext}
              className="rounded-none bg-charcoal px-6 text-xs font-medium uppercase tracking-widest2 text-cream hover:bg-charcoal-light"
            >
              {t("next")}
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={submitting}
              className="rounded-none bg-charcoal px-6 text-xs font-medium uppercase tracking-widest2 text-cream hover:bg-charcoal-light"
            >
              {submitting ? t("submitting") : t("steps.three.submit")}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
