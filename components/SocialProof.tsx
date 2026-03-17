"use client";

import { STATS } from "@/lib/constants";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  useEffect(() => {
    const unsubscribe = display.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest}${suffix}`;
      }
    });
    return unsubscribe;
  }, [display, suffix]);

  return (
    <span
      ref={ref}
      className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-mono)] text-[var(--color-primary)]"
    >
      0{suffix}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-alt)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-4">
            Trusted by Forward-Thinking Agencies
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            CareGennie is developed by a team with 15+ years of UK homecare industry experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 text-center border border-[var(--color-border)] shadow-sm"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-[var(--color-text-secondary)] font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Founding quote placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 bg-white rounded-2xl p-8 border border-[var(--color-border)] text-center max-w-2xl mx-auto"
        >
          <svg
            className="w-8 h-8 text-[var(--color-primary)]/30 mx-auto mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-lg text-[var(--color-text-secondary)] italic leading-relaxed mb-4">
            &ldquo;We built CareGennie because we saw first-hand how much time homecare teams waste on admin that could be automated. Every hour saved is an hour returned to care.&rdquo;
          </p>
          <p className="text-sm font-semibold text-[var(--color-text-primary)]">
            — The CareGennie Team
          </p>
        </motion.div>
      </div>
    </section>
  );
}
