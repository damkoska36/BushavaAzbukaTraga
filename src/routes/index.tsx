import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Volume2, Play, Star, Sparkles, Trophy, Home, Gamepad2 } from "lucide-react";
import mascot from "@/assets/mascot.png";
import letterBuddies from "@/assets/letter-buddies-bg.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Бушава Азбука — Играј и учи македонска азбука" },
      { name: "description", content: "Бушава Азбука: магичен свет на букви и игри за деца од 3 до 8 години. Играј, слушај и учи на македонски." },
      { property: "og:title", content: "Бушава Азбука — Играј и учи" },
      { property: "og:description", content: "Магичен свет на букви и игри за најмалите." },
    ],
  }),
  component: Index,
});

const games = [
  { title: "Бушаво Слово", emoji: "🔤", color: "var(--bushava-orange)", desc: "Препознај букви" },
  { title: "Збороград", emoji: "🏰", color: "var(--bukvozhder-blue)", desc: "Гради зборови" },
  { title: "Бушава Трага", emoji: "🐾", color: "var(--light-green)", desc: "Следи ја трагата" },
  { title: "Буквобег", emoji: "🏃", color: "var(--warm-red)", desc: "Брзи букви" },
];

function Index() {
  const [stars] = useState(7);
  const speak = (text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "mk-MK";
    u.rate = 0.9;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="px-4 sm:px-8 py-5 flex items-center justify-between max-w-7xl mx-auto">
        <a href="/" className="flex items-center gap-2 font-display font-extrabold text-2xl sm:text-3xl" style={{ color: "var(--bushava-orange)" }}>
          <span className="inline-flex w-12 h-12 rounded-2xl items-center justify-center text-white text-2xl btn-pop" style={{ background: "var(--gradient-play)" }}>Б</span>
          <span>Бушава Азбука</span>
        </a>
        <nav className="hidden sm:flex items-center gap-2">
          {[
            { icon: Home, label: "Дома" },
            { icon: Gamepad2, label: "Игри" },
            { icon: Trophy, label: "Награди" },
          ].map((n) => (
            <button key={n.label} className="flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-base bg-white/70 hover:bg-white btn-pop" style={{ minHeight: 56 }}>
              <n.icon className="w-5 h-5" /> {n.label}
            </button>
          ))}
        </nav>
        <button
          aria-label="Слушни упатство"
          onClick={() => speak("Добредојде во Бушавата Азбука! Притисни го големото копче за да играш.")}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white btn-pop"
          style={{ background: "var(--cheerful-yellow)", color: "var(--bukvozhder-blue)" }}
        >
          <Volume2 className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.5} />
        </button>
      </header>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-20">
        {/* Playful letter-buddies pattern behind everything */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={letterBuddies}
            alt=""
            className="absolute -top-10 -left-10 w-[60%] opacity-25 sm:opacity-30 animate-float"
            style={{ animationDuration: "6s" }}
          />
          <img
            src={letterBuddies}
            alt=""
            className="absolute bottom-0 -right-16 w-[55%] opacity-20 sm:opacity-25 -scale-x-100 animate-float"
            style={{ animationDuration: "7s", animationDelay: "1.2s" }}
          />
        </div>
        <div className="relative grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5" style={{ background: "var(--cheerful-yellow)", color: "var(--bukvozhder-blue)" }}>
              <Sparkles className="w-4 h-4" /> За деца од 3 до 8 години
            </span>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95]" style={{ color: "var(--bukvozhder-blue)" }}>
              Добредојде во<br />
              <span style={{ color: "var(--bushava-orange)" }}>Бушавиот</span> свет!
            </h1>
            <p className="mt-5 text-xl sm:text-2xl text-foreground/80 max-w-xl mx-auto lg:mx-0">
              Играј, слушај и откривај ја македонската азбука со нашите бушави другарчиња.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <button
                onClick={() => speak("Играј!")}
                className="group relative inline-flex items-center justify-center gap-3 px-12 py-7 rounded-full text-white font-display font-extrabold text-3xl sm:text-4xl btn-pop animate-pulse-ring"
                style={{ background: "var(--gradient-play)", minHeight: 96, minWidth: 240 }}
              >
                <Play className="w-10 h-10 fill-white" strokeWidth={0} />
                Играј
              </button>
              <button
                onClick={() => speak("Слушни како се вика секоја буква.")}
                className="inline-flex items-center gap-3 px-7 py-5 rounded-full font-bold text-lg bg-white btn-pop"
                style={{ color: "var(--bukvozhder-blue)", minHeight: 64 }}
              >
                <Volume2 className="w-6 h-6" /> Слушни ме
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative flex items-center justify-center min-h-[28rem]">
            {/* Soft sun glow */}
            <div className="absolute inset-0 rounded-full blur-3xl opacity-60" style={{ background: "var(--gradient-sun)" }} />

            {/* Floating letter buddies background */}
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              {[
                { ch: "А", color: "var(--warm-red)",        top: "4%",  left: "8%",  size: 56, delay: "0s",   dur: "4.2s", rot: -8 },
                { ch: "Б", color: "var(--cheerful-yellow)", top: "12%", left: "78%", size: 64, delay: "0.6s", dur: "5s",   rot: 10 },
                { ch: "В", color: "var(--light-green)",     top: "32%", left: "2%",  size: 48, delay: "1.1s", dur: "4.6s", rot: 6  },
                { ch: "Г", color: "var(--sky-blue)",        top: "68%", left: "84%", size: 52, delay: "0.3s", dur: "5.4s", rot: -10 },
                { ch: "Д", color: "var(--bukvozhder-blue)", top: "82%", left: "12%", size: 60, delay: "1.4s", dur: "4.8s", rot: 8  },
                { ch: "Е", color: "var(--warm-red)",        top: "55%", left: "92%", size: 42, delay: "0.9s", dur: "4.4s", rot: -6 },
                { ch: "Ж", color: "var(--cheerful-yellow)", top: "90%", left: "62%", size: 50, delay: "0.2s", dur: "5.2s", rot: 12 },
                { ch: "З", color: "var(--light-green)",     top: "2%",  left: "44%", size: 46, delay: "1.7s", dur: "4.6s", rot: -4 },
                { ch: "И", color: "var(--sky-blue)",        top: "46%", left: "-2%", size: 44, delay: "0.5s", dur: "5s",   rot: 9  },
                { ch: "Ј", color: "var(--bukvozhder-blue)", top: "22%", left: "92%", size: 40, delay: "1.2s", dur: "4.8s", rot: -12 },
                { ch: "К", color: "var(--warm-red)",        top: "76%", left: "38%", size: 38, delay: "0.7s", dur: "5.2s", rot: 7  },
                { ch: "Л", color: "var(--cheerful-yellow)", top: "38%", left: "70%", size: 36, delay: "1.5s", dur: "4.4s", rot: -9 },
              ].map((l, i) => (
                <div
                  key={i}
                  className="absolute animate-float select-none"
                  style={{
                    top: l.top,
                    left: l.left,
                    width: l.size,
                    height: l.size,
                    animationDelay: l.delay,
                    animationDuration: l.dur,
                    transform: `rotate(${l.rot}deg)`,
                  }}
                >
                  <div
                    className="relative w-full h-full rounded-2xl flex items-center justify-center font-display font-extrabold text-white"
                    style={{
                      background: l.color,
                      fontSize: l.size * 0.55,
                      boxShadow: "0 6px 0 0 oklch(0 0 0 / 0.18), 0 10px 20px -8px oklch(0 0 0 / 0.25)",
                    }}
                  >
                    {l.ch}
                    {/* eyes */}
                    <span className="absolute" style={{ top: "22%", left: "20%", width: l.size * 0.13, height: l.size * 0.13, background: "#fff", borderRadius: "50%" }}>
                      <span className="block rounded-full bg-foreground" style={{ width: "55%", height: "55%", margin: "22% auto 0" }} />
                    </span>
                    <span className="absolute" style={{ top: "22%", right: "20%", width: l.size * 0.13, height: l.size * 0.13, background: "#fff", borderRadius: "50%" }}>
                      <span className="block rounded-full bg-foreground" style={{ width: "55%", height: "55%", margin: "22% auto 0" }} />
                    </span>
                    {/* smile */}
                    <span
                      className="absolute"
                      style={{
                        bottom: "18%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: l.size * 0.32,
                        height: l.size * 0.18,
                        borderBottom: `${Math.max(2, l.size * 0.06)}px solid #fff`,
                        borderRadius: "0 0 999px 999px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <img src={mascot} alt="Бушавото маскоте" className="relative z-10 w-72 sm:w-96 lg:w-[28rem] animate-float drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* PROGRESS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 -mt-6 mb-16">
        <div className="rounded-3xl p-6 sm:p-8 card-pop bg-white">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl" style={{ color: "var(--bukvozhder-blue)" }}>
              Твоето патување ⭐
            </h2>
            <span className="text-lg font-bold" style={{ color: "var(--bushava-orange)" }}>{stars} / 12 ѕвезди</span>
          </div>
          <div className="h-6 rounded-full bg-foreground/10 overflow-hidden">
            <div className="h-full rounded-full transition-all" style={{ width: `${(stars / 12) * 100}%`, background: "linear-gradient(90deg, var(--cheerful-yellow), var(--bushava-orange), var(--warm-red))" }} />
          </div>
          <div className="flex justify-between mt-4 gap-2 flex-wrap">
            {Array.from({ length: 12 }).map((_, i) => (
              <Star key={i} className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2} fill={i < stars ? "currentColor" : "none"} style={{ color: i < stars ? "var(--cheerful-yellow)" : "var(--foreground)", opacity: i < stars ? 1 : 0.2 }} />
            ))}
          </div>
        </div>
      </section>

      {/* GAMES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-20">
        <div className="text-center mb-10">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl" style={{ color: "var(--bukvozhder-blue)" }}>
            Избери игра
          </h2>
          <p className="mt-2 text-lg text-foreground/70">Допри картичка за да започнеш</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {games.map((g) => (
            <button
              key={g.title}
              onClick={() => speak(g.title)}
              className="card-pop rounded-3xl p-5 sm:p-7 text-left bg-white relative overflow-hidden"
              style={{ minHeight: 200 }}
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-25" style={{ background: g.color }} />
              <div className="text-6xl sm:text-7xl mb-3 relative">{g.emoji}</div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl relative" style={{ color: g.color }}>
                {g.title}
              </h3>
              <p className="text-sm sm:text-base text-foreground/70 mt-1 relative">{g.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* DASHBOARD / BADGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-24">
        <div className="rounded-[2rem] p-6 sm:p-10 card-pop" style={{ background: "linear-gradient(135deg, var(--bukvozhder-blue), oklch(0.5 0.18 250))" }}>
          <div className="flex items-center gap-3 mb-6 text-white">
            <Trophy className="w-9 h-9" style={{ color: "var(--cheerful-yellow)" }} />
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl">Мојата витрина</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {[
              { e: "🌟", n: "Прва ѕвезда", got: true },
              { e: "📚", n: "Читач", got: true },
              { e: "🎨", n: "Уметник", got: true },
              { e: "🚀", n: "Истражувач", got: false },
              { e: "🏆", n: "Шампион", got: false },
              { e: "🦄", n: "Мајстор", got: false },
            ].map((b) => (
              <div key={b.n} className={`rounded-2xl p-4 text-center ${b.got ? "bg-white" : "bg-white/15"}`}>
                <div className={`text-4xl sm:text-5xl mb-1 ${b.got ? "" : "grayscale opacity-50"}`}>{b.e}</div>
                <div className={`text-xs sm:text-sm font-bold ${b.got ? "text-foreground" : "text-white/70"}`}>{b.n}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/90 text-lg font-semibold text-center">
            Браво! Продолжи да играш и собирај нови значки! 🎉
          </p>
        </div>
      </section>

      <footer className="text-center pb-10 text-foreground/60 font-semibold">
        Направено со ❤️ за бушавите умови
      </footer>
    </main>
  );
}
