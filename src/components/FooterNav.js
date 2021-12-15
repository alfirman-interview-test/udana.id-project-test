import Instagram from "./icon/Instagram";
import LinkedIn from "./icon/LinkedIn";

export default function FooterNav() {
  return (
    <div className="w-11/12 md:w-[700px] lg:w-5/6 mx-auto py-10 px-5">
      <ul className="lg:flex text-xs text-gray-600 space-y-6 lg:space-y-0 lg:space-x-4">
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
            {lists.map((list, i) => (
              <li key={i}>
                <a href={list.link}>{list.name}</a>
              </li>
            ))}
          </ul>
        </li>
        <li className="flex-1 space-y-3">
          <h6 className="font-bold text-gray-400">Investor</h6>
          <ul className="text-sm text-gray-800 space-y-2">
            <li>
              <a href="https://udana.id/faq">FAQ</a>
            </li>
            <li>
              <a href="https://udana.id/">Resiko Investasi</a>
            </li>
          </ul>
        </li>
        <li className="flex-1 space-y-1">
          <h6 className="font-bold text-gray-400">Social Media</h6>
          <div className="flex space-x-2">
            <a href="https://www.instagram.com/udanainaja/" className="h-5 w-5">
              <Instagram />
            </a>
            <a
              href="https://www.linkedin.com/company/udana-id/"
              className="h-5 w-5"
            >
              <LinkedIn />
            </a>
          </div>
        </li>
        <li className="flex-1">
          <h6 className="font-bold text-gray-400">Didukung oleh</h6>
          <div className="flex flex-col">
            <div className="flex items-center">
              {partners.map((partner, i) => (
                <a key={i} href={partner.link} className="inline-block w-full h-full">
                  <img
                    className="max-w-[100%] h-auto lg:max-w-none lg:h-[50px] lg:w-[50px]"
                    src={partner.image}
                    alt={partner.image}
                  />
                </a>
              ))}
            </div>
            <div>
              <a href="https://www.cbqaglobal.com/validation/company/pt-dana-rintis-indonesia/?cred_referrer_form_id=58">
                <img src="/assets/logo/iso.png" alt="iso" width={"100%"} />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

const partners = [
  {
    image: "/assets/logo/kominfo.png",
    link: "https://pse.kominfo.go.id/tdpse-detail/1425",
  },
  {
    image: "/assets/logo/pse.png",
    link: "https://pse.kominfo.go.id/tdpse-detail/1677",
  },
  {
    image: "/assets/logo/aludi.png",
    link: "https://aludi.id/",
  },
];

const lists = [
  {
    name: "Tentang",
    link: "https://udana.id/about",
  },
  {
    name: "Hubungi Kami",
    link: "https://udana.id/",
  },
  {
    name: "Syarat & Ketentuan",
    link: "https://udana.id/tnc",
  },
  {
    name: "Kebijakan Privasi",
    link: "https://udana.id/privacy",
  },
];
