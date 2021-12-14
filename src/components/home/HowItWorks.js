export default function HowItWorks() {
  return (
    <div
      className="text-gray-900 mt-[180px] bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/img/bg-step.png')",
        backgroundPositionX: "1020px",
      }}
    >
      <div className="w-5/6 mx-auto">
        <div className="flex after:flex-1">
          <h3 className="text-4xl font-ubuntu font-bold flex-1">
            Menjadi Investor UMKM itu gampang
          </h3>
          <p className="ml-20 text-xl text-gray-400 flex-1">
            Berinvestasi pada UMKM bisa dilakukan oleh siapa saja dan dimana
            saja.
          </p>
        </div>
        <ul className="flex mt-10 space-x-10">
          {steps.map((step) => (
            <li key={step.num} className="flex-1">
              <img
                className="w-full"
                src={`/assets/img/step${step.num}.png`}
                alt={step.name}
                height={360}
              />
              <div
                className="mx-8 mt-5 space-y-3 bg-right bg-no-repeat"
                style={{
                  backgroundImage: `url('/assets/img/bg-no${step.num}.png')`,
                }}
              >
                <h4 className="text-2xl font-bold font-ubuntu">{step.title}</h4>
                <p className="text-xl text-gray-400">{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const steps = [
  {
    num: "1",
    title: "Pilih UMKM",
    description: "Temukan usaha yang anda minati pada galeri.",
  },
  {
    num: "2",
    title: "Analisa Bisnis",
    description: "Lakukan analisa profil bisnis dan pengusaha.",
  },
  {
    num: "3",
    title: "Mulai Berinvestasi",
    description:
      "Menjadi investor startup dengan modal minimal 100.000 Rupiah.",
  },
];
