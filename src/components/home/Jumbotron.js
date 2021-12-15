import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import Header from "../Header";
import Wave from "../Wave";

export default function Jumbotron() {
  return (
    <section className="h-[700px] text-white bg-cover relative bg-hero-image-mobile md:bg-hero-image">
      <div className="flex flex-col w-11/12 md:w-[700px] lg:w-5/6 h-full mx-auto">
        <Header />
        <div className="my-auto md:w-[550px] lg:relative -top-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-ubuntu text-yellow-400">
            Jadilah Investor UMKM & Waralaba
          </h1>
          <p className="md:text-xl mt-8">
            Temukan bisnis UMKM & Waralaba yang anda sukai dan mulai menjadi
            investor untuk kemajuan perekonomian bangsa tanpa perlu pusing
            dengan operasional sehari-hari
          </p>
          <a
            href="https://udana.id/register"
            className="mt-10 inline-flex items-center space-x-3 py-3 px-5 bg-yellow-400 hover:bg-yellow-500 duration-500 rounded-lg text-lg tracking-wider"
          >
            <span>Investasi Sekarang</span>
            <ArrowNarrowRightIcon className="h-6 w-6" strokeWidth={1} />
          </a>
        </div>
      </div>
      <Wave />
    </section>
  );
}
