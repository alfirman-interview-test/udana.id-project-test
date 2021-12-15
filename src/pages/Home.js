import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";
import HowItWorks from "../components/home/HowItWorks";
import Jumbotron from "../components/home/Jumbotron";
import Latest from "../components/home/Latest";

export default function Home() {
  return (
    <main className="min-h-screen font-karla">
      <Jumbotron />
      <HowItWorks />
      {/* <Latest />
      <Contact />
      <Footer /> */}
    </main>
  );
}
