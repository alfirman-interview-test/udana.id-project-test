import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";

export default function Contact() {
  return (
    <section className="h-[200vh] mt-20 text-white">
      <div
        className="w-5/6 mx-auto bg-yellow-400 rounded-3xl bg-no-repeat bg-right"
        style={{ backgroundImage: "url('/assets/img/contact-us-bg.png')" }}
      >
        <div className="flex py-10 px-14 space-x-20 after:flex-1">
          <div className="flex-[1.5]">
            <h3 className="font-ubuntu text-4xl font-bold">
              Kami siap membantu Anda
            </h3>
            <p className="mt-5">
              Apabila Anda ingin mengetahui lebih lanjut mengenai Udana.
              Silahkan menghubungi kami
            </p>
          </div>
          <div className="flex-[1.5]">
            <ul className="space-y-4">
              <li className="flex space-x-3">
                <LocationMarkerIcon className="h-6 w-6 mt-1" />
                <div className="w-full">
                  <h6 className="font-bold">PT Dana Rintis Indonesia</h6>
                  <p>
                    Jl. KH. Hasyim Ashari No.17, Petojo Utara, Kecamatan Gambir,
                    Kota Jakarta Pusat Daerah Khusus Ibukota Jakarta, 10130
                  </p>
                </div>
              </li>
              <li className="flex space-x-3">
                <MailIcon className="h-6 w-6 mt-1" />
                <h6 className="font-bold">support@udana.id</h6>
              </li>
              <li className="flex space-x-3">
                <PhoneIcon className="h-6 w-6 mt-1" />
                <h6 className="font-bold">087709999430</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
