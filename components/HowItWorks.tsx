"use client";

import { STEPS } from "@/lib/constants";
import { motion } from "framer-motion";

const stepVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-4">
            Up and Running in Days, Not Months
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Getting started with CareGennie is simple. Here&apos;s how it works.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/40 to-[var(--color-primary)]/20" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                variants={stepVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-lg font-[family-name:var(--font-mono)] mb-6 shadow-lg shadow-[var(--color-primary)]/25">
                  {step.number}
                </div>

                {/* Arrow between steps — mobile only */}
                {i < STEPS.length - 1 && (
                  <div className="lg:hidden w-0.5 h-8 bg-[var(--color-primary)]/20 absolute -bottom-8 left-1/2 -translate-x-1/2" />
                )}

                <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-3">
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
