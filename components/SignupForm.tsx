"use client";

import { CARER_COUNT_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import Button from "./ui/Button";
import Input from "./ui/Input";

const waitlistSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.email("Please enter a valid email address"),
  agency: z.string().optional(),
  privacy: z.literal(true, { message: "You must agree to the Privacy Policy" }),
});

const betaSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.email("Please enter a valid email address"),
  agency: z.string().min(2, "Please enter your agency name"),
  carerCount: z.string().min(1, "Please select the number of carers"),
  privacy: z.literal(true, { message: "You must agree to the Privacy Policy" }),
});

type WaitlistData = z.infer<typeof waitlistSchema>;
type BetaData = z.infer<typeof betaSchema>;

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-12 text-center"
    >
      <div className="text-5xl mb-4" role="img" aria-label="Celebration">
        🎉
      </div>
      <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-2">
        You&apos;re in!
      </h3>
      <p className="text-[var(--color-text-secondary)]">
        Check your email for confirmation.
      </p>
    </motion.div>
  );
}

function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "waitlist", ...data }),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      }
    } catch {
      // Fallback: still show success for demo
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) return <SuccessState />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-1">
        Join the Waiting List
      </h3>
      <p className="text-sm text-[var(--color-text-secondary)] mb-4">
        Be first in line when we launch. No commitment.
      </p>

      <Input
        id="waitlist-name"
        label="Full Name"
        placeholder="Jane Smith"
        error={errors.name?.message}
        {...register("name")}
      />
      <Input
        id="waitlist-email"
        label="Email"
        type="email"
        placeholder="jane@agency.co.uk"
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        id="waitlist-agency"
        label="Agency Name (optional)"
        placeholder="Your agency name"
        error={errors.agency?.message}
        {...register("agency")}
      />

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="waitlist-privacy"
          className="mt-1 h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
          {...register("privacy")}
        />
        <label
          htmlFor="waitlist-privacy"
          className="text-sm text-[var(--color-text-secondary)]"
        >
          I agree to the{" "}
          <a
            href="/privacy-policy"
            className="text-[var(--color-primary)] underline hover:no-underline"
          >
            Privacy Policy
          </a>
        </label>
      </div>
      {errors.privacy && (
        <p className="text-sm text-[var(--color-error)]" role="alert">
          {errors.privacy.message}
        </p>
      )}

      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Submitting..." : "Reserve My Spot"}
      </Button>
    </form>
  );
}

function BetaForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BetaData>({
    resolver: zodResolver(betaSchema),
  });

  const onSubmit = async (data: BetaData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "beta", ...data }),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) return <SuccessState />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-1">
        Apply for Beta Access
      </h3>
      <p className="text-sm text-[var(--color-text-secondary)] mb-4">
        Help shape CareGennie. Get free access + direct input.
      </p>

      <Input
        id="beta-name"
        label="Full Name"
        placeholder="Jane Smith"
        error={errors.name?.message}
        {...register("name")}
      />
      <Input
        id="beta-email"
        label="Email"
        type="email"
        placeholder="jane@agency.co.uk"
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        id="beta-agency"
        label="Agency Name"
        placeholder="Your agency name"
        error={errors.agency?.message}
        {...register("agency")}
      />

      <div className="w-full">
        <label
          htmlFor="beta-carerCount"
          className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5"
        >
          Number of Carers
        </label>
        <select
          id="beta-carerCount"
          className={cn(
            "w-full px-4 py-3 rounded-lg border bg-white text-[var(--color-text-primary)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent",
            errors.carerCount
              ? "border-[var(--color-error)]"
              : "border-[var(--color-border)]"
          )}
          {...register("carerCount")}
        >
          <option value="">Select range</option>
          {CARER_COUNT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.carerCount && (
          <p className="mt-1 text-sm text-[var(--color-error)]" role="alert">
            {errors.carerCount.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="beta-privacy"
          className="mt-1 h-4 w-4 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
          {...register("privacy")}
        />
        <label
          htmlFor="beta-privacy"
          className="text-sm text-[var(--color-text-secondary)]"
        >
          I agree to the{" "}
          <a
            href="/privacy-policy"
            className="text-[var(--color-primary)] underline hover:no-underline"
          >
            Privacy Policy
          </a>
        </label>
      </div>
      {errors.privacy && (
        <p className="text-sm text-[var(--color-error)]" role="alert">
          {errors.privacy.message}
        </p>
      )}

      <Button type="submit" variant="secondary" className="w-full" disabled={submitting}>
        {submitting ? "Submitting..." : "Apply for Beta"}
      </Button>
    </form>
  );
}

export default function SignupForm() {
  return (
    <section
      id="signup"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-[var(--color-accent)]/5" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)]">
            Ready to Transform Your Agency?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm"
          >
            <WaitlistForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm"
          >
            <BetaForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
