import FooterNav from "../components/FooterNav";
import Contact from "../components/home/Contact";
import HowItWorks from "../components/home/HowItWorks";
import Jumbotron from "../components/home/Jumbotron";
import Latest from "../components/home/Latest";

export default function Home() {
  return (
    <main className="min-h-screen font-karla">
      <Jumbotron />
      <HowItWorks />
      <Latest />
      <Contact />
      <footer className="h-[200vh] mt-5 border-t border-gray-100">
        <div className="w-5/6 mx-auto py-10 px-5">
          <FooterNav />
          <div>2</div>
          <div>3</div>
        </div>
      </footer>
    </main>
  );
}
