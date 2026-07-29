import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import comedyLoungeImg from "@/assets/comedy-lounge.jpg.asset.json";
import sundaySinglesImg from "@/assets/sunday-singles.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#about", label: "About" },
];

const FEATURED = [
  {
    tag: "@ComedyLounge",
    role: "Sound & Coordinator",
    title: "Comedy Lounge Perth",
    blurb:
      "Front-of-house audio and weekly show coordination for one of Perth's busiest live comedy rooms.",
    accent: "#ff8899",
    image: comedyLoungeImg.url,
    imagePos: "center",
    imageBg: "#f5c518",
  },
  {
    tag: "@SundaySingles",
    role: "Editor",
    title: "Sunday Singles",
    blurb:
      "Cutting highlight edits and managing socials — turning raw show footage into shareable moments.",
    accent: "#ff8899",
    image: sundaySinglesImg.url,
    imagePos: "center",
    imageBg: "#111",
  },
];

const SIDE = [
  { title: "Freelance Design", role: "Owner", blurb: "Branding, layout & digital art for independent clients since 2022." },
  { title: "CurseForge Modding", role: "Developer", blurb: "Custom scripts and community content published free to CurseForge." },
];

const TESTIMONIALS = [
  { quote: "Cade brings calm, professional energy to every show. Sound checks are fast, mixes are clean, and the room just works.", name: "Venue Manager", role: "Comedy Lounge, Perth" },
  { quote: "Turnaround on edits is unreal — sharp cuts and strong instincts for what makes a clip travel online.", name: "Freelance Client", role: "Content Creator" },
  { quote: "Reliable, disciplined, and genuinely cares about the craft. The kind of person you want backstage.", name: "Show Producer", role: "Perth, WA" },
];

const ROTATOR = ["A SHOW", "AN EDIT", "A BRAND", "SOMETHING"];

// --- Minimalist gradient hero background ---
function AbstractHeroBG() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Deep base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0b0f1a 0%, #0a0d16 55%, #06080f 100%)",
        }}
      />
      {/* Cool aurora sweep */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(60% 55% at 82% 22%, rgba(70,110,190,.35), transparent 70%)," +
            "radial-gradient(45% 45% at 8% 78%, rgba(120,90,220,.22), transparent 72%)",
        }}
      />
      {/* Red accent bloom */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 640,
          height: 640,
          right: "-10%",
          top: "42%",
          background: "radial-gradient(circle, rgba(255,46,77,.32), transparent 65%)",
          animation: "pulse-glow 9s ease-in-out infinite",
        }}
      />
      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px, 64px 64px",
          maskImage:
            "radial-gradient(80% 65% at 50% 55%, #000 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(80% 65% at 50% 55%, #000 40%, transparent 90%)",
        }}
      />
      {/* Large offset ring */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="ringGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,46,77,.55)" />
            <stop offset="100%" stopColor="rgba(120,150,220,.15)" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="45%" stopColor="rgba(255,46,77,.7)" />
            <stop offset="55%" stopColor="rgba(255,46,77,.7)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        {/* Big ring — anchor on the right */}
        <circle cx="1420" cy="520" r="520" fill="none" stroke="url(#ringGrad)" strokeWidth="1.2" opacity="0.55" />
        <circle cx="1420" cy="520" r="360" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
        <circle cx="1420" cy="520" r="200" fill="none" stroke="rgba(255,46,77,.28)" strokeWidth="1" strokeDasharray="2 10" />
        {/* Floating pill */}
        <rect x="180" y="620" width="220" height="6" rx="3" fill="rgba(255,255,255,.08)" />
        <rect x="180" y="640" width="120" height="4" rx="2" fill="rgba(255,46,77,.35)" />
        {/* Diagonal spark */}
        <line x1="200" y1="120" x2="360" y2="60" stroke="rgba(255,255,255,.18)" strokeWidth="1" />
        <circle cx="360" cy="60" r="3" fill="#ff5a70" />
      </svg>
      {/* Bottom horizon glow line */}
      <div
        className="absolute left-0 right-0"
        style={{
          bottom: 0,
          height: 1,
          background: "url(#lineGrad)",
          backgroundImage:
            "linear-gradient(90deg, transparent, rgba(255,255,255,.12) 30%, rgba(255,46,77,.75) 50%, rgba(255,255,255,.12) 70%, transparent)",
        }}
      />
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.7) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />
      {/* Vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(120% 90% at 50% 50%, transparent 40%, rgba(6,8,15,.85) 100%)" }} />
    </div>
  );
}

// --- Scroll progress ---
function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 z-[70] h-[2px]"
      style={{
        width: `${p}%`,
        background: "var(--accent)",
        boxShadow: "0 0 8px rgba(255,46,77,.55)",
        transition: "width 0.1s linear",
      }}
    />
  );
}

// --- Reveal on scroll ---
function Reveal({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setShown(true), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition: "opacity 800ms cubic-bezier(0.22,1,0.36,1), transform 800ms cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {children}
    </div>
  );
}

// --- Nav ---
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 80);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-5">
        <div
          className="pointer-events-none absolute -top-10 left-0 right-0 -bottom-8 -z-10 transition-opacity"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,5,9,.85) 0%, rgba(15,5,9,.4) 55%, rgba(15,5,9,0) 100%)",
            backdropFilter: "blur(2.5px)",
            WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 60%, rgba(0,0,0,.55) 80%, transparent 100%)",
            maskImage: "linear-gradient(180deg, #000 0%, #000 60%, rgba(0,0,0,.55) 80%, transparent 100%)",
          }}
        />
        <a
          href="#home"
          className="font-syne font-extrabold uppercase text-[22px]"
          style={{
            letterSpacing: "0.42em",
            color: "var(--text-hi)",
            opacity: scrolled ? 1 : 0,
            transform: scrolled ? "translateX(0)" : "translateX(-8px)",
            pointerEvents: scrolled ? "auto" : "none",
            transition: "opacity .4s ease, transform .4s ease",
          }}
        >
          CADE
        </a>
        <div className="hidden md:flex items-center gap-9 font-outfit uppercase text-[13px] font-medium" style={{ letterSpacing: "0.14em" }}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors" style={{ color: "var(--text-mid)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-hi)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-mid)")}>
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-[2px] font-outfit uppercase"
            style={{
              background: "var(--accent)",
              color: "#1a0208",
              padding: "11px 20px",
              letterSpacing: "0.08em",
              boxShadow: "0 8px 30px rgba(255,46,77,.25)",
            }}
          >
            Contact
          </a>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          className="md:hidden p-2 -m-2"
          style={{ color: "var(--text-hi)" }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-x-0 top-0 z-40 md:hidden flex flex-col gap-0.5 px-5 pt-20 pb-5"
          style={{ background: "rgba(15,5,9,.97)", backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,255,255,.08)" }}
        >
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}
              className="font-outfit uppercase text-[15px] py-4 px-1.5 border-b"
              style={{ letterSpacing: "0.14em", color: "var(--text)", borderColor: "rgba(255,255,255,.06)" }}>
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-3 text-center rounded-[2px] font-outfit uppercase py-4"
            style={{ background: "var(--accent)", color: "#1a0208", letterSpacing: "0.08em", fontWeight: 600 }}>
            Contact
          </a>
        </div>
      )}
    </>
  );
}

// --- Hero ---
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      <AbstractHeroBG />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(10,13,20,.55) 0%, rgba(10,13,20,.15) 40%, rgba(10,13,20,.7) 78%, #0a0d14 100%)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(90deg, rgba(10,13,20,.75) 0%, rgba(10,13,20,.08) 55%, rgba(10,13,20,0) 100%)" }}
      />
      <div className="relative mt-auto px-6 md:px-14 pb-24 max-w-[820px]">
        <Reveal>
          <div
            className="font-outfit uppercase mb-5 flex items-center gap-3"
            style={{ color: "var(--text-mid)", fontSize: 12, letterSpacing: "0.4em" }}
          >
            <span className="inline-block w-6 h-px" style={{ background: "var(--accent)" }} />
            Cade Leeming · Perth, WA
          </div>
          <h1
            className="font-syne uppercase m-0"
            style={{
              fontWeight: 800,
              fontSize: "clamp(72px, 11vw, 150px)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              color: "var(--text-hi)",
            }}
          >
            Cade
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="font-outfit font-light mt-7 mb-9 max-w-[560px]"
            style={{ fontSize: "clamp(18px,2vw,23px)", lineHeight: 1.55, color: "var(--text)" }}>
            I run live sound, edit video and design for shows &amp; creators. Turning raw production into moments people remember.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="flex gap-4 items-center flex-wrap font-outfit uppercase" style={{ letterSpacing: "0.08em", fontSize: 13 }}>
            <a href="#contact" className="rounded-[2px]"
              style={{ background: "var(--accent)", color: "#1a0208", padding: "16px 30px", fontWeight: 600, boxShadow: "0 8px 30px rgba(255,46,77,.28)" }}>
              Get in touch
            </a>
            <a href="#work" className="rounded-[2px]"
              style={{ color: "var(--text-hi)", border: "1px solid rgba(245,234,234,.28)", padding: "15px 28px", fontWeight: 500 }}>
              See the work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// --- Section heading ---
function SectionH2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-syne m-0"
      style={{
        fontWeight: 700,
        fontSize: "clamp(40px,5vw,66px)",
        lineHeight: 1,
        letterSpacing: "-0.02em",
        color: "var(--text-hi)",
      }}
    >
      {children}
    </h2>
  );
}

// --- Work ---
function WorkCard({ p }: { p: (typeof FEATURED)[number] }) {
  return (
    <a
      href="#contact"
      className="group relative block no-underline overflow-hidden rounded-[4px] transition-transform"
      style={{ background: "var(--bg-elev)", border: "1px solid rgba(255,255,255,.07)" }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div className="absolute inset-0" style={{ background: p.imageBg }} />
        <img
          src={p.image}
          alt={p.title}
          className="absolute inset-0 w-full h-full object-contain transition-transform duration-[900ms] group-hover:scale-105"
          style={{ objectFit: p.tag === "@SundaySingles" ? "cover" : "contain", padding: p.tag === "@SundaySingles" ? 0 : "18px" }}
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, transparent 45%, rgba(10,13,20,.85) 100%)" }} />
        <div className="absolute left-0 right-0 bottom-0 flex items-end justify-between gap-4 px-5 py-4 z-[2]">
          <span className="inline-flex items-center gap-2 font-outfit text-[14px] font-medium"
            style={{ color: "var(--text-hi)", textShadow: "0 1px 6px rgba(0,0,0,.5)" }}>
            <span className="inline-block w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
            {p.tag}
          </span>
          <span className="font-outfit text-[14px]"
            style={{ color: p.accent, textShadow: "0 1px 6px rgba(0,0,0,.5)", fontWeight: 600 }}>
            {p.role}
          </span>
        </div>
      </div>
      <div className="px-7 pt-6 pb-7">
        <h3 className="font-syne m-0" style={{ fontWeight: 700, fontSize: 30, lineHeight: 1.05, color: "var(--text-hi)" }}>
          {p.title}
        </h3>
        <p className="font-outfit font-light mt-2.5 mb-0" style={{ fontSize: 15, lineHeight: 1.6, color: "var(--text-mid)" }}>
          {p.blurb}
        </p>
        <span
          className="inline-flex items-center gap-1.5 mt-5 font-outfit uppercase transition-transform group-hover:translate-x-1"
          style={{ color: "var(--accent)", fontSize: 12, letterSpacing: "0.14em", fontWeight: 600 }}
        >
          View project
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h13" /><path d="M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </a>
  );
}

function Work() {
  return (
    <section id="work" className="relative px-6 md:px-14 pt-32 pb-10 max-w-[1280px] mx-auto">
      <Reveal>
        <SectionH2>Previous Work</SectionH2>
      </Reveal>
      <div className="mt-12 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(380px,1fr))" }}>
        {FEATURED.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <WorkCard p={p} />
          </Reveal>
        ))}
      </div>
      <div className="mt-6 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
        {SIDE.map((s, i) => (
          <Reveal key={s.title} delay={i * 120}>
            <a href="#contact" className="flex items-center gap-5 no-underline rounded-[4px] px-6 py-5"
              style={{ background: "var(--bg-elev-2)", border: "1px solid rgba(255,255,255,.06)" }}>
              <div className="flex-none w-[54px] h-[54px] rounded flex items-center justify-center font-syne font-extrabold text-2xl"
                style={{ background: "linear-gradient(135deg, #ff2e4d, #ff8899)", color: "#1a0208" }}>
                {s.title[0]}
              </div>
              <div className="flex-1 min-w-0 self-start pt-1">
                <h4 className="font-syne m-0" style={{ fontWeight: 600, fontSize: 19, color: "var(--text-hi)" }}>{s.title}</h4>
                <p className="font-outfit font-light m-0 mt-1" style={{ fontSize: 13, color: "var(--text-low)" }}>{s.blurb}</p>
              </div>
              <span className="flex-none font-outfit uppercase"
                style={{ fontSize: 11, letterSpacing: "0.18em", color: "#ff8899", fontWeight: 600 }}>
                {s.role}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// --- YouTube 3D preview ---
function YouTubeSection() {
  const avatar = "/__l5e/assets-v1/001a072c-c369-4ad7-be33-ed3bcc477409/redstonechicken-avatar.jpg";
  const banner = "/__l5e/assets-v1/15258579-9072-4958-83a1-958537b6ca2a/redstonechicken-banner.jpg";
  const [tilt, setTilt] = useState({ x: -14, y: 22 });
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -14 + dy * -14, y: 22 + dx * -18 });
  };
  const reset = () => setTilt({ x: -14, y: 22 });

  return (
    <section className="relative px-6 md:px-14 pt-24 pb-10 max-w-[1280px] mx-auto">
      <div className="grid gap-14 md:gap-20 items-center" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>
        <Reveal>
          <div className="font-outfit uppercase" style={{ color: "var(--accent)", fontSize: 12, letterSpacing: "0.35em" }}>
            YouTube · @redstonechickenmc
          </div>
          <SectionH2>
            <span className="block mt-3">Modding, showcases</span>
            <span className="block text-gradient-red">&amp; tutorials.</span>
          </SectionH2>
          <p className="font-outfit font-light mt-6 max-w-[440px]" style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-mid)" }}>
            My long-running passion channel: Minecraft mods, redstone experiments and free CurseForge content. Where the design work, the edit work and the game dev all meet.
          </p>
          <a
            href="https://www.youtube.com/@redstonechickenmc"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 mt-7 rounded-[2px] font-outfit uppercase"
            style={{
              background: "var(--accent)",
              color: "#1a0208",
              padding: "14px 26px",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              boxShadow: "0 10px 40px rgba(255,46,77,.3)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Visit the channel
          </a>
        </Reveal>

        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={reset}
          className="relative h-[420px]"
          style={{ perspective: 1400 }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 -z-10 blur-3xl opacity-70"
            style={{ background: "radial-gradient(50% 50% at 60% 50%, rgba(255,46,77,.45), transparent 70%)" }}
          />
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            {/* Browser chrome card */}
            <div
              className="relative w-[92%] max-w-[520px] rounded-xl overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #1a0710, #2a090f)",
                border: "1px solid rgba(255,255,255,.08)",
                boxShadow:
                  "0 40px 80px -30px rgba(255,46,77,.55), 0 30px 60px -20px rgba(0,0,0,.9)",
                transform: "translateZ(30px)",
              }}
            >
              <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,.06)" }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5a70" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffb84a" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#4ade80" }} />
                <span className="ml-3 font-outfit text-[11px]" style={{ color: "var(--text-low)" }}>
                  youtube.com/@redstonechickenmc
                </span>
              </div>
              {/* Channel banner */}
              <div className="relative w-full aspect-[8/1] overflow-hidden">
                <img src={banner} alt="Channel banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0), rgba(20,7,10,.7))" }} />
              </div>
              {/* Header */}
              <div className="flex items-center gap-4 px-5 py-4">
                <img
                  src={avatar}
                  alt="Redstone Chicken avatar"
                  className="w-14 h-14 rounded-full flex-none object-cover"
                  style={{ boxShadow: "0 0 0 2px rgba(255,46,77,.5)" }}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-syne" style={{ fontWeight: 700, fontSize: 18, color: "var(--text-hi)" }}>
                    Redstone Chicken
                  </div>
                  <div className="font-outfit text-[12px]" style={{ color: "var(--text-low)" }}>
                    @redstonechickenmc · Minecraft · Modding
                  </div>
                </div>
                <span className="rounded-full font-outfit uppercase text-[10px]"
                  style={{ background: "var(--accent)", color: "#1a0208", padding: "7px 14px", fontWeight: 700, letterSpacing: "0.1em" }}>
                  Subscribe
                </span>
              </div>
              {/* Thumbnail grid */}
              <div className="grid grid-cols-2 gap-2 p-3">
                {[
                  { id: "kqpTBfUkk_0", len: "10:24" },
                  { id: "OcJv-49R7S8", len: "8:12" },
                  { id: "KcnVVNOjZ8o", len: "14:03" },
                  { id: "lmhCOoHP_to", len: "6:47" },
                ].map((v) => (
                  <a
                    key={v.id}
                    href={`https://www.youtube.com/watch?v=${v.id}`}
                    target="_blank"
                    rel="noopener"
                    className="relative aspect-video overflow-hidden rounded-md block group/thumb"
                    style={{ background: "#000" }}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                      alt="Recent video thumbnail"
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,.55))" }} />
                    <span className="absolute bottom-1 right-1.5 font-outfit text-[10px] px-1.5 py-[1px] rounded"
                      style={{ background: "rgba(0,0,0,.75)", color: "#fff" }}>
                      {v.len}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(255,46,77,.9)" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Testimonials ---
function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 md:px-14 py-32 max-w-[1280px] mx-auto">
      <Reveal>
        <SectionH2>People I've worked with</SectionH2>
      </Reveal>
      <div className="mt-14 grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={i * 120}>
            <figure className="h-full flex flex-col rounded-[4px] p-8 pb-4"
              style={{ background: "var(--bg-elev)", border: "1px solid rgba(255,255,255,.07)" }}>
              <div className="font-syne" style={{ fontSize: 54, lineHeight: 0.6, color: "#ff8899", height: 30 }}>
                &ldquo;
              </div>
              <blockquote className="font-outfit font-light m-0 mb-5" style={{ fontSize: 16, lineHeight: 1.65, color: "var(--text)" }}>
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto pt-4 flex items-center gap-2.5"
                style={{ borderTop: "1px solid rgba(255,255,255,.07)" }}>
                <span className="w-[26px] h-[26px] rounded-full flex-none"
                  style={{ background: "linear-gradient(135deg,#ff2e4d,#ff8899)" }} />
                <span className="font-syne" style={{ fontWeight: 600, fontSize: 15, color: "var(--text-hi)" }}>
                  {t.name}
                </span>
                <span className="font-outfit" style={{ fontSize: 12, color: "var(--text-low)" }}>
                  · &nbsp;{t.role}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// --- Divider ---
function Divider() {
  return (
    <div className="max-w-[1180px] mx-auto px-6 md:px-14">
      <div className="flex items-center gap-5 py-2">
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,136,153,.55))" }} />
        <div className="w-2 h-2 rotate-45" style={{ background: "var(--accent)", boxShadow: "0 0 10px rgba(255,46,77,.7)" }} />
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(255,136,153,.55), transparent)" }} />
      </div>
    </div>
  );
}

// --- About ---
function About() {
  return (
    <section id="about" className="relative px-6 md:px-14 pt-32 pb-10 max-w-[1280px] mx-auto">
      <div className="grid gap-16" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>
        <Reveal>
          <SectionH2>Hey, I'm Cade.</SectionH2>
          <div className="mt-8 flex flex-col gap-6">
            {[
              ["Based in", "Perth, WA"],
              ["Timezone", "AWST / GMT+8"],
              ["Currently", "Comedy Lounge · Sunday Singles"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="font-outfit uppercase mb-1.5" style={{ color: "var(--text-low)", letterSpacing: "0.16em", fontSize: 12 }}>{label}</div>
                <div style={{ color: "var(--text-hi)", fontSize: 20 }}>{value}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="flex flex-col gap-6 font-outfit font-light max-w-[560px]"
            style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)" }}>
            <p className="m-0">
              I split my time between live sound at Comedy Lounge, editing for Sunday Singles and freelance design work — plus modding on the side. Long-form patience meets fast turnaround.
            </p>
            <p className="m-0">
              I like taking an idea from raw concept through to a finished piece — a mixed show, a cut clip, a brand — and shipping something people actually enjoy. Martial arts black belt, physical media collector, Minecraft modder on CurseForge.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// --- What I do (tabs) ---
const WHAT = [
  { title: "Live Sound Engineering", body: "Mixing rooms, running FOH, wrangling stage plots. I get shows sounding tight fast so performers can focus on the performance." },
  { title: "Video Editing & Post", body: "Highlight reels, social cutdowns and long-form edits. Fast turnaround, sharp cuts, strong sense for what actually lands online." },
  { title: "Design & Modding", body: "Freelance branding, layout and digital art, plus published game mods on CurseForge. The overlap is where the fun happens." },
];

function WhatIDo() {
  const [tab, setTab] = useState(0);
  return (
    <section id="services" className="relative px-6 md:px-14 pt-32 max-w-[1280px] mx-auto">
      <Reveal>
        <SectionH2>What I do</SectionH2>
      </Reveal>
      <div className="mt-10 grid gap-9 items-stretch" style={{ gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" }}>
        <div className="flex flex-col justify-center gap-2.5">
          {WHAT.map((w, i) => (
            <button key={w.title} onClick={() => setTab(i)}
              className="relative flex gap-5 items-stretch text-left px-1 py-4 bg-transparent border-0 cursor-pointer">
              <span className="flex-none relative w-0.5 rounded" style={{ background: "rgba(255,255,255,.10)" }}>
                <span
                  className="absolute left-0 w-full rounded"
                  style={{
                    background: "#ff8899",
                    boxShadow: "0 0 8px rgba(255,136,153,.5)",
                    top: tab === i ? 0 : "auto",
                    bottom: tab === i ? "auto" : 0,
                    height: tab === i ? "100%" : "0%",
                    transition: tab === i ? "height .4s cubic-bezier(.22,1,.36,1) .1s" : "height .2s cubic-bezier(.5,0,.8,.4)",
                  }}
                />
              </span>
              <span className="font-syne transition-colors"
                style={{ fontWeight: 600, fontSize: 23, lineHeight: 1.5, color: tab === i ? "var(--text-hi)" : "var(--text-low)" }}>
                {w.title}
              </span>
            </button>
          ))}
        </div>
        <div className="relative grid pl-8 min-h-[260px]"
          style={{ background: "radial-gradient(70% 75% at 60% 50%, rgba(255,136,153,.06), transparent 70%)" }}>
          <div aria-hidden className="absolute left-8 top-1.5 bottom-1.5 w-2.5">
            <span className="absolute left-[3.5px] top-0 bottom-0 w-0.5 rounded"
              style={{ background: "linear-gradient(180deg, rgba(255,136,153,0), rgba(255,136,153,.5) 14%, rgba(255,136,153,.5) 86%, rgba(255,136,153,0))", boxShadow: "0 0 8px rgba(255,136,153,.25)" }} />
            <span
              className="absolute left-0 w-2.5 h-2.5 rotate-45"
              style={{
                background: "#ff8899",
                boxShadow: "0 0 10px rgba(255,136,153,.65)",
                top: `calc(${(tab + 0.5) * (100 / WHAT.length)}% - 4.5px)`,
                transition: "top .5s cubic-bezier(.22,1,.36,1) .05s",
              }}
            />
          </div>
          <div className="relative pl-8 flex flex-col justify-center">
            <h3 key={tab} className="font-syne m-0 mb-3"
              style={{ fontWeight: 700, fontSize: 30, lineHeight: 1.5, color: "var(--text-hi)", animation: "rise .55s cubic-bezier(.22,1,.36,1) both" }}>
              {WHAT[tab].title}
            </h3>
            <p key={`p-${tab}`} className="font-outfit font-light m-0 max-w-[460px]"
              style={{ fontSize: 18, lineHeight: 1.7, color: "var(--text-mid)", animation: "rise .55s cubic-bezier(.22,1,.36,1) .09s both" }}>
              {WHAT[tab].body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Contact ---
function Contact() {
  const [i, setI] = useState(0);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROTATOR.length), 2400);
    return () => clearInterval(t);
  }, []);
  const copy = () => {
    navigator.clipboard?.writeText("cadeleeming@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <section id="contact" className="relative pt-32 pb-0 overflow-hidden">
      <AbstractHeroBG />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(120% 100% at 50% 100%, rgba(10,13,20,.55) 0%, rgba(10,13,20,.92) 55%, #0a0d14 100%)" }} />
      <div className="relative max-w-[880px] mx-auto flex flex-col items-center text-center px-6">
        <Reveal>
          <h2 className="font-syne m-0 uppercase"
            style={{ fontWeight: 800, fontSize: "clamp(44px,7vw,92px)", lineHeight: 0.95, letterSpacing: "-0.02em", color: "var(--text-hi)", textWrap: "balance" as never }}>
            LET'S<br />CREATE<br />
            <span className="flex items-center justify-center overflow-hidden" style={{ height: "1em" }}>
              <span key={i} className="text-gradient-red inline-block"
                style={{ animation: "rise .55s cubic-bezier(.22,1,.36,1) both" }}>
                {ROTATOR[i]}
              </span>
            </span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="font-outfit font-light mt-6 mb-10 max-w-[480px]"
            style={{ fontSize: 18, lineHeight: 1.6, color: "var(--text)" }}>
            Got a show, an edit, a brand or a project that needs someone behind the scenes? I'd love to hear about it.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <button onClick={copy}
            className="font-outfit rounded-[2px] transition-transform hover:scale-[1.02]"
            style={{
              background: "var(--accent)",
              color: "#1a0208",
              padding: "18px 40px",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.04em",
              boxShadow: "0 10px 40px rgba(255,46,77,.35)",
            }}>
            {copied ? "Copied ✓" : "cadeleeming@gmail.com"}
          </button>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-6 font-outfit uppercase" style={{ color: "var(--text-mid)", fontSize: 12, letterSpacing: "0.24em" }}>
            Discord · <span style={{ color: "var(--text-hi)" }}>redstonechicken</span>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-28 px-6 md:px-14 py-6 flex items-center justify-between gap-6 flex-wrap"
        style={{ background: "rgba(15,5,9,.35)", backdropFilter: "blur(3px)", borderTop: "1px solid rgba(255,255,255,.1)" }}>
        <span className="font-syne uppercase relative z-10" style={{ fontWeight: 800, fontSize: 15, letterSpacing: "0.4em", color: "var(--text-low)" }}>
          CADE · PERTH
        </span>
        <div className="flex gap-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[
            { href: "https://www.youtube.com/@redstonechickenmc", label: "YouTube", d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
            { href: "mailto:cadeleeming@gmail.com", label: "Email", d: "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 .5v.5l8 5 8-5v-.5H4z" },
            { href: "https://discord.com/users/redstonechicken", label: "Discord", d: "M20.317 4.369A19.79 19.79 0 0 0 16.558 3.2a.075.075 0 0 0-.079.037c-.34.6-.719 1.383-.984 1.997a18.27 18.27 0 0 0-5.487 0 12.51 12.51 0 0 0-.997-1.997.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.673-3.548-13.66a.06.06 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener" title={s.label} aria-label={s.label}
              className="flex items-center justify-center w-11 h-11 transition-colors"
              style={{ color: "var(--text-low)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-low)")}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>
            </a>
          ))}
        </div>
        <span className="font-outfit relative z-10" style={{ fontSize: 12, color: "var(--text-low)" }}>
          © {new Date().getFullYear()} Cade Leeming
        </span>
      </div>
    </section>
  );
}

function Index() {
  useMemo(() => 0, []);
  return (
    <div className="min-h-screen antialiased" style={{ background: "var(--bg-base)", color: "var(--text)", overflowX: "hidden" }}>
      <ScrollProgress />
      <Nav />
      <Hero />
      <Work />
      <Divider />
      <YouTubeSection />
      <Divider />
      <Testimonials />
      <Divider />
      <About />
      <WhatIDo />
      <div className="mt-24"><Divider /></div>
      <Contact />
    </div>
  );
}