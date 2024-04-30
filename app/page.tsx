import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className=" pd-40 ">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Services />
      <Portfolio />
    </main>
  );
}
