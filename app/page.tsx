import AboutMe from "@/components/about-me";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="pd-40">
      <Navbar />
      <Introduction />
      <AboutMe />
    </main>
  );
}
