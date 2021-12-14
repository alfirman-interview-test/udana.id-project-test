export default function HowItWorks() {
  return (
    <div className="text-gray-900 mt-[180px]">
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
            <li key={step.name} className="flex-1">
              <img
                className="w-full"
                src={`/assets/img/${step.name}.png`}
                alt={step.name}
                height={360}
              />
              <div className="px-8 mt-5 space-y-3">
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
    name: "step1",
    title: "Pilih UMKM",
    description: "Temukan usaha yang anda minati pada galeri.",
  },
  {
    name: "step2",
    title: "Analisa Bisnis",
    description: "Lakukan analisa profil bisnis dan pengusaha.",
  },
  {
    name: "step3",
    title: "Mulai Berinvestasi",
    description:
      "Menjadi investor startup dengan modal minimal 100.000 Rupiah.",
  },
];
