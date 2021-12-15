import CardProduct from "../CardProduct";

export default function Latest() {
  return (
    <section className="mt-20">
      <div className="w-11/12 md:w-[700px] lg:w-5/6 mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-ubuntu font-bold text-gray-900">
          Siap Memulai Berbisnis?
        </h2>
        <p className="text-center text-xl text-gray-400 mt-5">
          Tentukan bisnis waralaba pilihan Anda sekarang
        </p>
        <div className="border-t border-gray-200 mt-12 py-6 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6">
          {products.map((product, index) => (
            <CardProduct key={index} product={product} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-2">
          <a
            className="font-semibold text-lg text-yellow-400 border-b-2 border-yellow-400 "
            href="https://udana.id/waralaba"
            alt="see_all"
          >
            Lihat Semua
          </a>
        </div>
      </div>
    </section>
  );
}

const products = [
  {
    image: "product1.png",
    title: "Rindu Candu Milk Bar",
    url: "https://udana.id/waralaba/rindu-candu-milk-bar",
  },
  {
    image: "product2.png",
    title: "Mr. Big",
    url: "https://udana.id/waralaba/mr-big",
  },
  {
    image: "product3.png",
    title: "Nasi Balap",
    url: "https://udana.id/waralaba/nasi-balap",
  },
  {
    image: "product4.png",
    title: "Nyoklat Teen",
    url: "https://udana.id/waralaba/nyoklat-teen",
  },
  {
    image: "product5.png",
    title: "Haba Haus",
    url: "https://udana.id/waralaba/haba-haus",
  },
  {
    image: "product6.png",
    title: "Hello Sugar",
    url: "https://udana.id/waralaba/hello-sugar",
  },
];
