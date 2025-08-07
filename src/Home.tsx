import Intro from "./components/Intro";
import Brands from "./components/Brands";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="h-screen">
      <Intro />
      <Brands />
      <Features />
      <Portfolio />
      <Testimonials />
      <Footer />
    </main>
  );
}
