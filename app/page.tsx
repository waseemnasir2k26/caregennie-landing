import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import ProblemSolution from "@/components/ProblemSolution";
import SignupForm from "@/components/SignupForm";
import SocialProof from "@/components/SocialProof";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CareGennie",
  url: "https://caregennie.app",
  description:
    "Intelligent software platform that automates scheduling, compliance, and care management for UK homecare agencies.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
    description: "Join the waiting list for free early access",
  },
  creator: [
    {
      "@type": "Organization",
      name: "SkynetLabs",
      url: "https://www.skynetjoe.com",
    },
    {
      "@type": "Person",
      name: "Waseem Nasir",
      url: "https://www.waseemnasir.com",
    },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "UK Homecare Agencies",
    geographicArea: {
      "@type": "Country",
      name: "United Kingdom",
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is CareGennie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CareGennie is an all-in-one software platform designed specifically for UK homecare agencies. It handles scheduling, care plans, compliance documentation, and team management.",
      },
    },
    {
      "@type": "Question",
      name: "When will CareGennie launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We\u2019re currently in beta testing with a select group of agencies. Join the waiting list to be notified as soon as we open up access.",
      },
    },
    {
      "@type": "Question",
      name: "How much will CareGennie cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We\u2019ll announce pricing closer to launch. Waiting list members will receive exclusive early-bird pricing. Beta testers get extended free access.",
      },
    },
    {
      "@type": "Question",
      name: "Is CareGennie CQC compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CareGennie is built from the ground up with CQC requirements in mind. All documentation and audit trails are designed to meet regulatory standards.",
      },
    },
    {
      "@type": "Question",
      name: "What if I\u2019m already using other software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CareGennie is designed to integrate with common UK homecare systems. We\u2019ll work with you to ensure a smooth transition.",
      },
    },
    {
      "@type": "Question",
      name: "How do I qualify for beta testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We\u2019re looking for UK homecare agencies of all sizes who want early access and are willing to provide feedback. Apply through the beta testing form above.",
      },
    },
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CareGennie",
  url: "https://caregennie.app",
  description: "Intelligent Software for UK Homecare Agencies",
  foundingLocation: {
    "@type": "Country",
    name: "United Kingdom",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <SocialProof />
        <SignupForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
