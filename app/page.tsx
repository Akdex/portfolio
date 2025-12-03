import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Marquee from "@/components/Marquee";
import StudioStatement from "@/components/StudioStatement";
import BigCTA from "@/components/BigCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="relative bg-white text-black overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Marquee />
      <StudioStatement />
      <BigCTA />
      <ContactForm />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
