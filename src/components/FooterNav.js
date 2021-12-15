import Instagram from "./icon/Instagram";
import LinkedIn from "./icon/LinkedIn";

export default function FooterNav() {
  return (
    <ul className="flex text-xs text-gray-600 space-x-4">
      <li className="flex-1 flex flex-col items-center space-y-3">
        <img
          src="/assets/logo/udana2.png"
          alt="logo2"
          width={108}
          height={64}
        />
        <span className="font-bold">PT. Dana Rintis Indonesia</span>
      </li>
      <li className="flex-1 leading-relaxed">
        Jl. KH. Hasyim Ashari No.17, Petojo Utara, Kecamatan Gambir, Kota
        Jakarta Pusat, Daerah Khusus Ibukota Jakarta, 10130 E:
        <b>support@udana.id W: 087709999430</b>
      </li>
      <li className="flex-1 space-y-3">
        <h6 className="font-bold text-gray-400">Perusahaan</h6>
        <ul className="text-sm text-gray-800 space-y-2">
          <li>
            <a href="#ads">Tentang</a>
          </li>
          <li>
            <a href="#ads">Hubungi Kami</a>
          </li>
          <li>
            <a href="#ads">Syarat & Ketentuan</a>
          </li>
          <li>
            <a href="#ads">Kebijakan Privasi</a>
          </li>
        </ul>
      </li>
      <li className="flex-1 space-y-3">
        <h6 className="font-bold text-gray-400">Investor</h6>
        <ul className="text-sm text-gray-800 space-y-2">
          <li>
            <a href="#ads">FAQ</a>
          </li>
          <li>
            <a href="#ads">Resiko Investasi</a>
          </li>
        </ul>
      </li>
      <li className="flex-1 space-y-1">
        <h6 className="font-bold text-gray-400">Social Media</h6>
        <div className="flex space-x-2">
          <a href="#sad" className="h-5 w-5">
            <Instagram />
          </a>
          <a href="#sad" className="h-5 w-5">
            <LinkedIn />
          </a>
        </div>
      </li>
      <li className="flex-1">
        <h6 className="font-bold text-gray-400">Didukung oleh</h6>
        <div className="flex flex-col">
          <div className="flex items-center">
            <img
              src="/assets/logo/kominfo.png"
              alt="kominfo"
              width={50}
              height={50}
            />
            <img src="/assets/logo/pse.png" alt="pse" width={50} height={50} />
            <img
              src="/assets/logo/aludi.png"
              alt="aludi"
              width={50}
              height={50}
            />
          </div>
          <div>
            <img src="/assets/logo/iso.png" alt="iso" width={"100%"} />
          </div>
        </div>
      </li>
    </ul>
  );
}
