import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen font-karla">
      <div
        className="h-[657px] text-white bg-cover "
        style={{
          backgroundImage: "url('/assets/img/hero-image.jpg')",
        }}
      >
        <div className="flex flex-col w-5/6 h-full mx-auto">
          <Header />
          <div className="my-auto w-[550px]">
            <h1 className="text-6xl font-bold font-ubuntu text-yellow-400">
              Jadilah Investor UMKM & Waralaba
            </h1>
            <p className="text-xl mt-8">
              Temukan bisnis UMKM & Waralaba yang anda sukai dan mulai menjadi
              investor untuk kemajuan perekonomian bangsa tanpa perlu pusing
              dengan operasional sehari-hari
            </p>
            <a
              href="https://udana.id/register"
              className="mt-10 inline-block py-3 px-5 bg-yellow-400 hover:bg-yellow-500 duration-500 rounded-lg text-xl tracking-wider"
            >
              Investasi Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
