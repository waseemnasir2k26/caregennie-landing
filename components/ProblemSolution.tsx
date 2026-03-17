"use client";

import { PAIN_POINTS, SOLUTIONS } from "@/lib/constants";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

function PainIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    clock: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M12 6v6l4 2" />
      </svg>
    ),
    alert: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86l-8.8 15.32A1 1 0 002.36 21h17.28a1 1 0 00.87-1.5l-8.8-15.32a1 1 0 00-1.74 0z" />
      </svg>
    ),
    paperwork: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  };
  return <>{icons[type]}</>;
}

function SolutionIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    zap: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    shield: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    automation: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  };
  return <>{icons[type]}</>;
}

export default function ProblemSolution() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)]">
            Homecare Agencies Deserve Better Tools
          </h2>
        </motion.div>

        {/* Pain points */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-white rounded-2xl p-8 border border-[var(--color-error)]/20 hover:border-[var(--color-error)]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-error)]/10 flex items-center justify-center text-[var(--color-error)] mb-5">
                <PainIcon type={point.icon} />
              </div>
              <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-3">
                {point.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-semibold text-lg">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            CareGennie changes everything.
          </div>
        </motion.div>

        {/* Solutions */}
        <div className="grid md:grid-cols-3 gap-6">
          {SOLUTIONS.map((solution, i) => (
            <motion.div
              key={solution.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-white rounded-2xl p-8 border border-[var(--color-success)]/20 hover:border-[var(--color-success)]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-success)]/10 flex items-center justify-center text-[var(--color-success)] mb-5">
                <SolutionIcon type={solution.icon} />
              </div>
              <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-3">
                {solution.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
