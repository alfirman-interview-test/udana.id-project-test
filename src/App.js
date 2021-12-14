import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen w-screen font-karla">
      <div
        className="h-[700px] w-full text-white"
        style={{
          backgroundImage: "url('/assets/img/hero-image.jpg')",
        }}
      >
        <Header />
      </div>
    </div>
  );
}

export default App;
