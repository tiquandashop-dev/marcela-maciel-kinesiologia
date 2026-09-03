import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  HeartPulse,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { marcela, reviews, services, timeline } from "../data";

export const metadata = {
  title: "Lic. Marcela Maciel · Kinesiología",
  description: "Kinesiología y rehabilitación personalizada en Florida Oeste.",
};

export default function MarcelaMacielPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f9fcfb] text-[#19384a]">
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-4 px-5 py-5 lg:px-8">
          <Link href="#inicio" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#19384a] text-white">
              <HeartPulse size={19} />
            </span>
            <span className="text-lg font-extrabold tracking-tight">
              Marcela <span className="text-[#2ca887]">Maciel</span>
            </span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-semibold text-[#607d88] md:flex">
            <Link href="#tratamientos">Tratamientos</Link>
            <Link href="#sobre-mi">Sobre mí</Link>
            <Link href="#opiniones">Opiniones</Link>
          </div>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <Link
              href="/admin"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#c9e1df] bg-white/75 px-3 py-2.5 text-sm font-bold text-[#466877] hover:bg-white sm:flex-none"
            >
              <ShieldCheck size={16} /> Dashboard
            </Link>
            <a
              href={marcela.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#2ca887] px-3 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#2ca887]/20 hover:bg-[#218d7a] sm:flex-none sm:px-4"
            >
              Consultar turno <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      </header>
      <section id="inicio" className="relative bg-[#e8f5f2] pt-32">
        <div className="absolute right-[-9rem] top-16 h-80 w-80 rounded-full border border-[#a9d8cf]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:pb-28">
          <div className="relative z-10">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#bfe1d9] bg-white/75 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#228a73]">
              <span className="h-2 w-2 rounded-full bg-[#2ca887]" />
              Kinesiología · Florida Oeste
            </p>
            <h1 className="max-w-xl text-5xl font-extrabold leading-[1.07] tracking-[-.04em] text-[#19384a] lg:text-7xl">
              Tu recuperación,{" "}
              <span className="text-[#2ca887]">con acompañamiento.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[#637f8a]">
              Un abordaje cercano y personalizado para que vuelvas a moverte
              mejor, con más seguridad y confianza.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={marcela.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#19384a] px-5 py-3.5 font-bold text-white shadow-xl shadow-[#19384a]/15 hover:bg-[#24536b]"
              >
                Quiero hacer una consulta <ArrowRight size={16} />
              </a>
              <a
                href={`tel:${marcela.phone.replaceAll(" ", "")}`}
                className="inline-flex items-center gap-2 rounded-lg border border-[#c9e1df] bg-white/70 px-5 py-3.5 font-bold text-[#466877]"
              >
                <Phone size={16} />
                Llamar
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#66828b]">
              <span className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#2ca887]" />
                Atención profesional
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={18} className="text-[#2ca887]" />
                Florida Oeste
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="overflow-hidden rounded-[2rem] rounded-bl-[5rem] bg-[#b5d8d4] shadow-2xl shadow-[#4c8f8b]/20">
              <Image
                src={marcela.photo}
                alt="Profesional de kinesiología"
                width={1000}
                height={900}
                priority
                className="h-[430px] w-full object-cover object-center mix-blend-multiply opacity-90 lg:h-[545px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-xl border border-white bg-white p-4 shadow-xl sm:-left-8">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#e3f5f0] text-[#228f77]">
                <Sparkles size={19} />
              </span>
              <div>
                <p className="text-xs text-[#80959c]">
                  Experiencia y formación
                </p>
                <p className="font-extrabold">Desde 2003</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tratamientos" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="section-label">Cómo puedo ayudarte</p>
              <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight lg:text-4xl">
                Tratamientos pensados para tu bienestar
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#718b95]">
              Cada proceso comienza con una evaluación y se adapta a tus
              objetivos.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.number}
                className="group border-t-2 border-[#d7ebe7] pt-5 transition hover:border-[#2ca887]"
              >
                <span className="text-xs font-bold tracking-widest text-[#2ca887]">
                  {service.number}
                </span>
                <h3 className="mt-8 text-xl font-bold leading-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#718b95]">
                  {service.text}
                </p>
                <a
                  href={marcela.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#228f77]"
                >
                  Consultar <ArrowUpRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="sobre-mi" className="bg-[#19384a] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.13em] text-[#77d0bb]">
              Sobre mí
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight lg:text-4xl">
              Experiencia que se traduce en confianza.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#b8d0d1]">
              Soy Licenciada Kinesióloga Fisiatra y acompaño a cada paciente con
              escucha, criterio clínico y un plan de trabajo claro.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-[#b8d0d1]">
              <Clock3 size={18} className="text-[#77d0bb]" />
              Consultas con turno previo
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {timeline.map(([year, text]) => (
              <div key={year} className="border-l border-[#4c7180] pl-5">
                <p className="text-sm font-bold text-[#77d0bb]">{year}</p>
                <p className="mt-2 text-sm leading-6 text-[#d5e5e4]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="opiniones" className="bg-[#f1f8f6] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="section-label">Lo que dicen mis pacientes</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                Experiencias reales
              </h2>
            </div>
            <span className="hidden items-center gap-2 text-sm font-bold text-[#6f8790] sm:flex">
              5.0 <span className="text-[#e5a62b]">★★★★★</span> · Google
            </span>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.author}
                className="rounded-2xl border border-[#dcebe7] bg-white p-6"
              >
                <div className="text-sm tracking-widest text-[#e5a62b]">
                  ★★★★★
                </div>
                <blockquote className="mt-5 text-[15px] leading-7 text-[#52717d]">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[#edf3f1] pt-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#dff3ed] text-xs font-bold text-[#258e76]">
                    <Check size={15} />
                  </span>
                  <div>
                    <strong className="block text-sm">{review.author}</strong>
                    <span className="text-xs text-[#8ba0a5]">
                      {review.detail}
                    </span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="section-label">Dónde encontrarme</p>
            <h2 className="mt-3 text-3xl font-extrabold">
              ReKiMM Kinesiología
            </h2>
            <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-[#718b95]">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#2ca887]" />
              {marcela.location}
              <br />
              Turnos coordinados previamente
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-start-1 lg:row-start-2">
            <Link href="/admin" className="inline-flex items-center gap-2 rounded-lg border border-[#c9e1df] bg-white/70 px-3 py-2.5 text-sm font-bold text-[#466877] hover:bg-white">
              <ShieldCheck size={16} /> Dashboard
            </Link>
            <a
              href="https://maps.google.com/?q=Peru+1306+Florida+Oeste"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#dcebe7] px-4 py-3 text-sm font-bold text-[#466877] hover:bg-[#f5faf8]"
            >
              <Navigation size={16} />
              Cómo llegar
            </a>
            <a
              href={marcela.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#2ca887] px-4 py-3 text-sm font-bold text-white hover:bg-[#218d7a]"
            >
              <MessageCircle size={16} />
              Escribir por WhatsApp
            </a>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[#dcebe7] bg-[#e8f5f2] shadow-soft sm:min-h-[360px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:min-h-[400px]">
            <iframe
              title="Ubicación de ReKiMM Kinesiología"
              src="https://www.google.com/maps?q=Peru+1306+Florida+Oeste+Buenos+Aires&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <footer className="bg-[#102f40] py-6 text-[#a4c0c2]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 text-xs sm:flex-row lg:px-8">
          <span>© 2024 Lic. Marcela Maciel · Kinesiología</span>
          <span>{marcela.phone}</span>
        </div>
      </footer>
    </main>
  );
}
