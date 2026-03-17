"use client";

import { motion } from "framer-motion";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-[var(--color-bg)] to-[var(--color-accent)]/5" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={item}>
            <Badge>
              <span role="img" aria-label="UK flag">🇬🇧</span> Built for UK Homecare Agencies
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] leading-tight max-w-4xl"
          >
            Stop Drowning in Paperwork.{" "}
            <span className="text-[var(--color-primary)]">
              Start Delivering Better Care.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed"
          >
            CareGennie is the intelligent software platform that automates
            scheduling, compliance, and care management — so your team can focus
            on what matters most.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Button
              size="lg"
              onClick={() => {
                document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Join the Waiting List
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Apply for Beta Testing
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-sm text-[var(--color-text-secondary)]"
          >
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Free early access
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Built for CQC compliance
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
