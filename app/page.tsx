import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import ProblemSolution from "@/components/ProblemSolution";
import SignupForm from "@/components/SignupForm";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <>
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
