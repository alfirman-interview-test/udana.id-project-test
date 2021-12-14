export default function Header() {
  return (
    <header className="w-5/6 mx-auto py-3 flex justify-between items-center">
      <nav>
        <ul className="flex items-center text-sm space-x-10">
          <li>
            <a href="https://udana.id/">
              <img
                src="/assets/img/logo.png"
                alt="logo-udana.id"
                width={150}
                height={35}
              />
            </a>
          </li>
          <li className="font-bold">
            <a href="https://udana.id/waralaba">Waralaba</a>
          </li>
          <li className="font-bold">
            <a href="https://udana.id/faq">FAQ</a>
          </li>
          <li className="font-bold">
            <a href="https://udana.id/about">Tentang</a>
          </li>
        </ul>
      </nav>
      <div className="space-x-6 text-sm">
        <a href="https://udana.id/login" className="font-bold">
          Masuk
        </a>
        <a
          href="https://udana.id/register"
          className="font-bold py-3 px-5 bg-yellow-400 hover:bg-yellow-500 duration-500 rounded-lg"
        >
          Mulai Daftar
        </a>
      </div>
    </header>
  );
}
