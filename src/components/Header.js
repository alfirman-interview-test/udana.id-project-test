export default function Header() {
  return (
    <header className="w-5/6 mx-auto p-3 flex justify-between items-center">
      <nav>
        <ul className="flex items-center text-sm space-x-12">
          <li>
            <img
              src="/assets/img/logo.png"
              alt="logo-udana.id"
              width={150}
              height={35}
            />
          </li>
          <li className="font-bold">
            <a href="#">Waralaba</a>
          </li>
          <li className="font-bold">
            <a href="#">FAQ</a>
          </li>
          <li className="font-bold">
            <a href="#">Tentang</a>
          </li>
        </ul>
      </nav>
      <div className="space-x-6 text-sm">
        <button className="font-bold">Masuk</button>
        <button className="font-bold py-3 px-5 bg-yellow-400 hover:bg-yellow-500 duration-500 rounded-lg">
          Mulai Daftar
        </button>
      </div>
    </header>
  );
}
