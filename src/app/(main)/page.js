import About from "@/components/About";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import IndCards from "@/components/IndCards";
import Main from "@/components/Main";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Services />
      <IndCards />
      <CtaSection />
      <Reviews />
    </>
  );
}
