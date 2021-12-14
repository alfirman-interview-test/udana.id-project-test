export default function CardProduct({ product }) {
  return (
    <div className="h-[370px] border rounded-2xl shadow-lg flex flex-col">
      <div className="h-[40px] flex items-center justify-center">
        <span className="font-ubuntu font-bold text-lg">F&B</span>
      </div>
      <div className="h-[200px] border">
        <img
          alt="img"
          className="h-full w-full"
          src={`/assets/product/${product.image}`}
        />
      </div>
      <div className="flex-grow flex justify-center items-center">
        <h6 className="font-bold text-lg text-yellow-400">{product.title}</h6>
      </div>
      <div className="h-[49px] flex items-center justify-center bg-gray-100">
        <a href={product.url} alt={product.url} className="font-bold uppercase">
          lihat detail
        </a>
      </div>
    </div>
  );
}
