import HowItWorks from "../components/home/HowItWorks";
import Jumbotron from "../components/home/Jumbotron";

export default function Home() {
  return (
    <main className="min-h-screen font-karla">
      <Jumbotron />
      <HowItWorks />
    </main>
  );
}
