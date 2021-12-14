import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen font-karla">
      <div
        className="h-[700px] text-white bg-cover"
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
