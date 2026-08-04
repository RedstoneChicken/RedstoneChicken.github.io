/* Cade Leeming — portfolio behaviour. Vanilla ES module, no framework. */

/* ---------- decorative spectrum bars in the hero/contact background ---------- */
const BAR_HEIGHTS = [
  0.34, 0.52, 0.28, 0.66, 0.42, 0.78, 0.36, 0.58, 0.9, 0.44, 0.62, 0.3, 0.72, 0.48, 0.84, 0.38,
  0.56, 0.26, 0.68, 0.46, 0.8, 0.34, 0.6, 0.94, 0.4, 0.7, 0.32, 0.54, 0.86, 0.42, 0.64, 0.28,
  0.76, 0.5, 0.36, 0.68, 0.3, 0.58, 0.44, 0.24,
];

document.querySelectorAll("[data-bars]").forEach((host) => {
  const frag = document.createDocumentFragment();
  BAR_HEIGHTS.forEach((h, i) => {
    const bar = document.createElement("span");
    bar.style.height = `${h * 100}%`;
    bar.style.animation = `bar-pulse ${2.4 + (i % 7) * 0.35}s ease-in-out ${(i % 11) * 0.17}s infinite`;
    frag.appendChild(bar);
  });
  host.appendChild(frag);
});

/* ---------- scroll progress bar ---------- */
const progress = document.getElementById("progress");
const nav = document.querySelector(".nav");

function onScroll() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  progress.style.width = `${max > 0 ? (doc.scrollTop / max) * 100 : 0}%`;
  nav.classList.toggle("is-scrolled", window.scrollY > 80);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.transitionDelay = `${entry.target.dataset.delay || 0}ms`;
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    });
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ---------- mobile menu ---------- */
const burger = document.getElementById("burger");
const menu = document.getElementById("mobileMenu");
burger.addEventListener("click", () => {
  const open = menu.hasAttribute("hidden");
  if (open) menu.removeAttribute("hidden");
  else menu.setAttribute("hidden", "");
  burger.setAttribute("aria-expanded", String(open));
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.setAttribute("hidden", "");
    burger.setAttribute("aria-expanded", "false");
  }),
);

/* ---------- "What I do" tabs ---------- */
const WHAT = [
  {
    title: "Live Sound Engineering",
    body: "Mixing rooms, running FOH, wrangling stage plots. I get shows sounding tight fast so performers can focus on the performance.",
  },
  {
    title: "Video Editing & Post",
    body: "Highlight reels, social cutdowns and long-form edits. Fast turnaround, sharp cuts, strong sense for what actually lands online.",
  },
  {
    title: "Design & Modding",
    body: "Freelance branding, layout and digital art, plus published game mods on CurseForge. The overlap is where the fun happens.",
  },
];

const tabs = [...document.querySelectorAll(".what-tab")];
const whatTitle = document.getElementById("whatTitle");
const whatBody = document.getElementById("whatBody");
const whatPanelBody = whatTitle.parentElement;
const diamond = document.getElementById("whatDiamond");

function selectTab(index) {
  tabs.forEach((t, i) => t.classList.toggle("is-active", i === index));
  whatTitle.textContent = WHAT[index].title;
  whatBody.textContent = WHAT[index].body;
  diamond.style.top = `calc(${(index + 0.5) * (100 / WHAT.length)}% - 4.5px)`;
  whatPanelBody.classList.remove("is-swapping");
  void whatPanelBody.offsetWidth; /* restart the rise animation */
  whatPanelBody.classList.add("is-swapping");
}
tabs.forEach((tab) => tab.addEventListener("click", () => selectTab(Number(tab.dataset.tab))));

/* ---------- YouTube card mouse tilt ---------- */
const stage = document.getElementById("tiltStage");
const tiltInner = document.getElementById("tiltInner");
const BASE = { x: -14, y: 22 };

function setTilt(x, y) {
  tiltInner.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
}
stage.addEventListener("mousemove", (e) => {
  const r = stage.getBoundingClientRect();
  const dx = (e.clientX - r.left) / r.width - 0.5;
  const dy = (e.clientY - r.top) / r.height - 0.5;
  setTilt(BASE.x + dy * -14, BASE.y + dx * -18);
});
stage.addEventListener("mouseleave", () => setTilt(BASE.x, BASE.y));

/* ---------- rotating contact headline ---------- */
const ROTATOR = ["A SHOW", "AN EDIT", "A BRAND", "SOMETHING"];
let rotator = document.getElementById("rotator");
let rotIndex = 0;
setInterval(() => {
  rotIndex = (rotIndex + 1) % ROTATOR.length;
  const next = rotator.cloneNode(false);
  next.textContent = ROTATOR[rotIndex];
  rotator.replaceWith(next);
  rotator = next;
}, 2400);

/* ---------- copy email ---------- */
const copyBtn = document.getElementById("copyEmail");
const EMAIL = "cadeleeming@gmail.com";
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
  } catch {
    /* clipboard unavailable — ignore */
  }
  copyBtn.textContent = "Copied ✓";
  setTimeout(() => (copyBtn.textContent = EMAIL), 1600);
});

/* ---------- footer year ---------- */
document.getElementById("year").textContent = String(new Date().getFullYear());
