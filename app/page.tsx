import Image from "next/image";
import {
  LuArrowDown,
  LuArrowUpRight,
  LuAsterisk,
  LuCheck,
  LuCode,
  LuMessageCircle,
  LuMousePointer2,
  LuPencilRuler,
  LuWorkflow,
} from "react-icons/lu";
import type { IconType } from "react-icons";

const services: { title: string; description: string; icon: IconType }[] = [
  {
    title: "Website & SEO",
    description: "Pengembangan website dan analisis SEO sesuai kebutuhan bisnis.",
    icon: LuCode,
  },
  {
    title: "Desain grafis & identitas merek",
    description: "Logo dan materi visual yang membantu usaha tampil konsisten.",
    icon: LuAsterisk,
  },
  {
    title: "Konten media sosial",
    description: "Konten untuk memperkenalkan layanan dan cerita usaha di media sosial.",
    icon: LuPencilRuler,
  },
  {
    title: "Foto, video & drone",
    description: "Produksi visual dari pengarahan hingga pengambilan gambar dan editing.",
    icon: LuWorkflow,
  },
];

const projects = [
  {
    number: "01",
    name: "UMKM & Usaha Lokal",
    type: "Logo · Identitas merek · Website",
    description: "Mendukung kebutuhan digital usaha, dari materi visual hingga pengembangan website.",
    artwork: "market",
  },
  {
    number: "02",
    name: "Biro Haji & Umrah",
    type: "Konten media sosial · Foto/video",
    description: "Konten visual untuk membantu informasi layanan tersampaikan dengan lebih jelas.",
    artwork: "field",
  },
];

const process = [
  ["01", "Pahami kebutuhan", "Kami mendengarkan tujuan dan kebutuhan usaha atau lembaga Anda sebelum menentukan langkah."],
  ["02", "Berkolaborasi sesuai keahlian", "Tim kami berbagi peran dalam website dan SEO, desain grafis, serta produksi foto dan video."],
  ["03", "Tuntaskan dengan amanah", "Kami menjaga komunikasi dan pengerjaan, dengan harapan hasilnya memberi manfaat dan keberkahan."],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.08em]">
      <span className="h-2 w-2 bg-black" />
      {children}
    </p>
  );
}

function ProjectArtwork({ artwork }: { artwork: string }) {
  if (artwork === "market") {
    return (
      <div className="relative flex min-h-64 items-center justify-center overflow-hidden border-2 border-black bg-[#f2f2ef] p-6 sm:min-h-72">
        <div className="absolute left-5 top-5 font-mono text-[10px] font-bold uppercase">Karya untuk usaha sekitar</div>
        <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-2 border-black bg-white sm:h-52 sm:w-52">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-black text-center text-3xl font-black leading-none sm:h-40 sm:w-40 sm:text-4xl">
            USAHA<br />LOKAL
          </div>
          <LuAsterisk className="absolute -right-5 top-3 h-12 w-12" aria-hidden="true" />
          <span className="absolute -bottom-4 left-0 rotate-[-8deg] border-2 border-black bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase">
            Tumbuh bersama
          </span>
        </div>
        <span className="absolute bottom-5 right-5 font-mono text-xs">SEJAK 2020</span>
      </div>
    );
  }

  return (
    <div className="relative min-h-64 overflow-hidden border-2 border-black bg-[#f2f2ef] p-5 sm:min-h-72">
      <div className="flex items-center justify-between font-mono text-[10px] font-bold uppercase">
        <span>Informasi yang bermanfaat</span>
        <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3">
        <div className="flex h-32 items-end border-2 border-black bg-white p-3 sm:h-36">
          <span className="font-mono text-[10px] font-bold uppercase">Dikerjakan dengan amanah</span>
        </div>
        <div className="flex h-32 items-center justify-center border-2 border-black bg-white sm:h-36">
          <div className="h-20 w-20 rotate-12 border-2 border-black sm:h-24 sm:w-24" />
        </div>
      </div>
      <div className="absolute bottom-7 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center border-2 border-black bg-white">
        <LuAsterisk className="h-7 w-7" aria-hidden="true" />
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group border-2 border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <ProjectArtwork artwork={project.artwork} />
      <div className="flex flex-col gap-3 px-2 pb-2 pt-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 font-mono text-[10px] font-bold uppercase text-zinc-500">{project.type}</p>
          <h3 className="text-2xl font-black">{project.name}</h3>
          <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600">{project.description}</p>
        </div>
        <span className="font-mono text-xs font-bold">({project.number})</span>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between border-b-2 border-black px-5 py-5 sm:px-8 lg:px-10">
        <a href="#top" aria-label="Beranda Kontrakan Production" className="inline-flex items-center">
          <img
            src="/icon-long.jpg"
            alt="Logo Kontrakan Production"
            className="h-10 w-full object-cover"
          />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex" aria-label="Navigasi utama">
          <a className="transition hover:underline" href="#work">Karya</a>
          <a className="transition hover:underline" href="#services">Layanan</a>
          <a className="transition hover:underline" href="#studio">Studio</a>
        </nav>
        <a className="inline-flex items-center gap-2 border-2 border-black px-4 py-2.5 text-sm font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]" href="#contact">
          Mari ngobrol <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </header>

      <section id="top" className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:pt-28">
        <div className="relative z-10">
          <SectionLabel>Tiga orang, satu tim kreatif</SectionLabel>
          <h1 className="max-w-2xl text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
            Karya digital,<br />dengan <span className="underline decoration-4 underline-offset-8">amanah.</span>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-zinc-600">
            Sejak 2020, kami membantu UMKM, biro perjalanan Haji dan Umrah, serta pondok pesantren melalui website, desain, SEO, dan konten digital. Kami berharap setiap karya membawa manfaat dan keberkahan.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a className="inline-flex min-h-12 items-center gap-3 border-2 border-black bg-black px-5 py-3 text-sm font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" href="#work">
              Lihat kolaborasi kami <LuArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <span className="font-mono text-xs font-bold uppercase text-zinc-500">Tim kecil. Peran saling melengkapi.</span>
          </div>
          <LuAsterisk className="absolute -right-1 top-0 hidden h-10 w-10 rotate-12 sm:block lg:-right-8" aria-hidden="true" />
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
          <div className="absolute -right-4 -top-4 h-full w-full border-2 border-black" aria-hidden="true" />
          <div className="relative border-2 border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:p-4">
            <div className="flex items-center justify-between border-b-2 border-black pb-3 font-mono text-[10px] font-bold uppercase">
              <span>Dari kebutuhan jadi karya</span>
              <div className="flex gap-1.5" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full border border-black" /><span className="h-2.5 w-2.5 rounded-full border border-black" /><span className="h-2.5 w-2.5 rounded-full border border-black" /></div>
            </div>
            <div className="relative mt-3 flex min-h-72 flex-col justify-between overflow-hidden border-2 border-black bg-[#f2f2ef] p-5 sm:min-h-80 sm:p-7">
              <div className="flex items-center justify-between font-mono text-[10px] font-bold uppercase">
                <span>Kontrakan / Studio</span>
                <LuMousePointer2 className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="relative z-10 py-8">
                <p className="font-mono text-xs font-bold uppercase">Dikerjakan dengan amanah</p>
                <p className="mt-3 max-w-xs text-4xl font-black leading-[0.94] sm:text-5xl">KARYA<br />YANG<br />BERMANFAAT.</p>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex -space-x-2" aria-hidden="true">
                  <span className="h-9 w-9 rounded-full border-2 border-black bg-white" />
                  <span className="h-9 w-9 rounded-full border-2 border-black bg-zinc-300" />
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-black text-white"><LuAsterisk className="h-5 w-5" /></span>
                </div>
                <span className="rotate-[-5deg] border-2 border-black bg-white px-3 py-2 font-mono text-[10px] font-bold uppercase">Saling melengkapi</span>
              </div>
              <span className="absolute -right-7 top-1/3 h-24 w-24 rounded-full border-2 border-black" aria-hidden="true" />
              <span className="absolute -right-2 top-[38%] h-14 w-14 rounded-full border-2 border-black bg-white" aria-hidden="true" />
            </div>
            <div className="flex justify-between px-1 pt-3 font-mono text-[10px] font-bold uppercase">
              <span>Web / Desain / Konten</span><span>01 — 03</span>
            </div>
          </div>
          <span className="absolute -bottom-8 -left-5 rotate-[-7deg] border-2 border-black bg-white px-3 py-2 font-mono text-xs font-bold uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">Mari~berkolaborasi</span>
        </div>
      </section>

      <div className="border-y-2 border-black bg-[#f2f2ef]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 font-mono text-xs font-bold uppercase sm:gap-x-12 sm:px-8 lg:px-10">
          <span>Website & SEO</span><LuAsterisk className="h-4 w-4" aria-hidden="true" />
          <span>Logo & identitas merek</span><LuAsterisk className="h-4 w-4" aria-hidden="true" />
          <span>Konten media sosial</span><LuAsterisk className="h-4 w-4" aria-hidden="true" />
          <span>Foto, video & drone</span>
        </div>
      </div>

      <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Mitra dari beragam bidang</SectionLabel>
            <h2 className="text-4xl font-black sm:text-5xl">Ragam kolaborasi<span className="text-zinc-400">.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-600">Kami pernah mendampingi UMKM, biro perjalanan Haji dan Umrah, hingga pondok pesantren dalam kebutuhan visual dan digital.</p>
        </div>
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>
      </section>

      <section id="services" className="border-y-2 border-black bg-[#f2f2ef]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="mb-10 max-w-xl sm:mb-12">
            <SectionLabel>Keahlian tim kami</SectionLabel>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">Tim kecil.<br />Banyak cara membantu.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, description, icon: Icon }, index) => (
              <article key={title} className="group min-h-56 border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-9 flex items-center justify-between">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                  <span className="font-mono text-xs font-bold text-zinc-500">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="studio" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
        <div>
          <SectionLabel>Berawal sekitar 2020</SectionLabel>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl">Dari proyek iseng, tumbuh lewat karya.</h2>
          <a className="mt-7 inline-flex items-center gap-2 border-b-2 border-black pb-1 text-sm font-bold" href="#contact">
            Ceritakan rencana Anda <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div>
          <p className="text-lg leading-8 text-zinc-700">Kontrakan Production bermula sekitar 2020 sebagai proyek iseng yang kami kerjakan di sela pekerjaan kantor, kuliah, dan kesibukan sebagai desainer grafis. Dari waktu luang, tumbuh ruang untuk berkarya sekaligus mencari penghasilan tambahan.</p>
          <p className="mt-5 text-lg leading-8 text-zinc-700">Kini, kami bertiga berbagi peran sesuai keahlian: pengembangan website dan analisis SEO, desain grafis, serta pengarahan produksi foto dan video, editing, hingga menerbangkan drone. Kami pernah bekerja bersama UMKM, biro perjalanan Haji dan Umrah, hingga pondok pesantren, dengan kebutuhan dari logo dan identitas merek sampai website.</p>
          <p className="mt-5 text-lg leading-8 text-zinc-700">Dalam berkarya, kami berusaha menjunjung nilai-nilai Islam seperti amanah, kejujuran, dan saling menghargai. Kami berharap setiap kolaborasi membawa manfaat dan keberkahan bagi semua.</p>
          <div className="mt-8 grid gap-3 border-t-2 border-black pt-5 sm:grid-cols-2">
            {["Pengembangan website dan analisis SEO", "Desain grafis, logo, dan identitas merek", "Produksi foto/video, editing, dan drone", "Konten media sosial untuk beragam kebutuhan"].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm font-semibold leading-6"><LuCheck className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-black bg-[#f2f2ef]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mb-10">
            <SectionLabel>Langkah kolaborasi</SectionLabel>
            <h2 className="text-4xl font-black sm:text-5xl">Berkarya dengan amanah<span className="text-zinc-400">.</span></h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {process.map(([number, title, description]) => (
              <article key={number} className="border-t-2 border-black pt-5">
                <span className="font-mono text-xs font-bold">{number} / 03</span>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="relative border-2 border-black bg-white p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:p-12 lg:p-16">
          <LuAsterisk className="absolute right-6 top-6 h-9 w-9 sm:right-10 sm:top-10" aria-hidden="true" />
          <SectionLabel>Setiap kolaborasi dimulai dari sini</SectionLabel>
          <h2 className="max-w-3xl text-4xl font-black leading-[1.02] sm:text-6xl">Ada kebutuhan digital?<br />Mari diskusikan bersama.</h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-zinc-600">Ceritakan kebutuhan usaha atau lembaga Anda. Kami siap mendengarkan dan mencari bentuk kolaborasi yang sesuai, dengan harapan menjadi karya yang bermanfaat dan berkah.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="inline-flex min-h-12 items-center gap-2 border-2 border-black bg-[#b8f28b] px-5 py-3 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" href="https://wa.me/?text=Halo%20Kontrakan%20Production%2C%20saya%20ingin%20berdiskusi%20tentang%20kebutuhan%20digital." target="_blank" rel="noopener noreferrer">
              <LuMessageCircle className="h-5 w-5" aria-hidden="true" /> Hubungi kami via WhatsApp <LuArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-7 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <a href="#top" aria-label="Beranda Kontrakan Production" className="inline-flex items-center">
            <Image
              src="/icon-long.jpg"
              alt="Logo Kontrakan Production"
              width={280}
              height={70}
              className="h-10 w-auto object-contain"
            />
          </a>
          <span className="text-zinc-600">Berkarya dengan amanah, berharap membawa keberkahan.</span>
          <a className="inline-flex items-center gap-1 font-bold" href="#top">Kembali ke atas <LuArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </footer>
    </main>
  );
}
