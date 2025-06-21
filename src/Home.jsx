import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return <div className="bg-[#f9f9f9]">
    <About />
    <Portfolio />
    <Contact />
  </div>;
}
