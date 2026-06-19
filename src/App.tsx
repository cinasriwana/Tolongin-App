import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { HowItWorks } from "./components/HowItWorks";
import { CustomerHelper } from "./components/CustomerHelper";
import { PremiumMembership } from "./components/PremiumMembership";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <CustomerHelper />
        <PremiumMembership />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
