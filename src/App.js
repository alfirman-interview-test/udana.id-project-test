import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen w-screen font-karla overflow-hidden">
      <div
        className="h-[700px] text-white"
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
