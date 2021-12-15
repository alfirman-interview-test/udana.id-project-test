import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function Header() {
  const [isNavOpened, setNavOpened] = useState(false);

  return (
    <header className="py-4 flex justify-between items-center relative">
      <nav>
        <ul className="flex items-center text-sm space-x-10">
          <li>
            <a href="https://udana.id/">
              <img
                src="/assets/logo/udana1.png"
                alt="logo-udana.id"
                width={150}
                height={35}
              />
            </a>
          </li>
          {lists.map((list, i) => (
            <li key={i} className="font-bold hidden md:block">
              <a href={list.link}>{list.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <MenuIcon
        onClick={() => setNavOpened(!isNavOpened)}
        className="h-8 w-8 md:hidden"
      />
      <div className="space-x-6 text-sm hidden md:block">
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
      <div
        className={`${
          !isNavOpened ? "hidden" : "block md:hidden"
        } absolute top-14 left-0 border-t w-full border-gray-600`}
      >
        <div className="mt-2 flex flex-wrap bg-neutral-600 py-3 space-y-7">
          <button className="w-full text-left px-6 font-bold">Masuk</button>
          <button className="w-full text-center py-3 px-6 font-bold bg-yellow-500 rounded-xl">
            Mulai Daftar
          </button>
        </div>
        <div className="mt-2 flex flex-wrap bg-neutral-600 p-6 space-y-7">
          <ul className="space-y-7">
            {lists.map((list, i) => (
              <li key={i}>
                <a href={list.link} className="font-bold">
                  {list.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

const lists = [
  {
    name: "Waralaba",
    link: "https://udana.id/waralaba",
  },
  {
    name: "FAQ",
    link: "https://udana.id/faq",
  },
  {
    name: "Tentang",
    link: "https://udana.id/about",
  },
];
