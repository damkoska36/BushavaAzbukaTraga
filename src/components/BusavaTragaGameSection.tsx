import { useState } from "react";
import { Sparkles, Volume2, RefreshCcw } from "lucide-react";

type CheckpointCircle = {
  cx: number;
  cy: number;
  r: number;
};

type TracingLetter = {
  letter: string;
  pathD: string;
  checkpointCircles: CheckpointCircle[];
};

const checkpoint = (cx: number, cy: number, r = 8): CheckpointCircle => ({ cx, cy, r });

const tracingLetterCatalog: TracingLetter[] = [
  { letter: "А", pathD: "M180 40 L60 256 L180 40 L300 256 M104 190 L256 190", checkpointCircles: [checkpoint(180, 40), checkpoint(112, 164), checkpoint(248, 164), checkpoint(300, 256)] },
  { letter: "Б", pathD: "M104 44 L104 276 M104 44 L238 44 M104 160 L214 160 C254 160 278 182 278 216 C278 252 252 276 210 276 L104 276", checkpointCircles: [checkpoint(104, 44), checkpoint(238, 44), checkpoint(214, 160), checkpoint(210, 276)] },
  { letter: "В", pathD: "M98 44 L98 276 M98 44 L212 44 C252 44 278 66 278 102 C278 134 258 154 220 160 C260 166 284 188 284 224 C284 258 258 276 218 276 L98 276", checkpointCircles: [checkpoint(98, 44), checkpoint(278, 102), checkpoint(220, 160), checkpoint(284, 224), checkpoint(218, 276)] },
  { letter: "Г", pathD: "M88 44 L272 44 M88 44 L88 276", checkpointCircles: [checkpoint(88, 44), checkpoint(272, 44), checkpoint(88, 160), checkpoint(88, 276)] },
  { letter: "Д", pathD: "M66 92 L110 44 L250 44 L294 92 M110 44 L110 244 M250 44 L250 244 M66 244 L294 244", checkpointCircles: [checkpoint(66, 92), checkpoint(110, 44), checkpoint(250, 44), checkpoint(294, 92), checkpoint(294, 244)] },
  { letter: "Ѓ", pathD: "M96 44 L276 44 M96 44 L96 276 M156 18 L222 18 L186 44", checkpointCircles: [checkpoint(156, 18), checkpoint(222, 18), checkpoint(96, 44), checkpoint(276, 44), checkpoint(96, 276)] },
  { letter: "Е", pathD: "M266 44 L96 44 M96 44 L96 276 M96 160 L236 160 M96 276 L266 276", checkpointCircles: [checkpoint(266, 44), checkpoint(96, 44), checkpoint(96, 160), checkpoint(236, 160), checkpoint(266, 276)] },
  { letter: "Ж", pathD: "M78 44 L178 160 L78 276 M178 44 L178 276 M278 44 L178 160 L278 276", checkpointCircles: [checkpoint(78, 44), checkpoint(178, 160), checkpoint(78, 276), checkpoint(278, 44), checkpoint(278, 276)] },
  { letter: "З", pathD: "M88 68 C126 40 172 34 216 40 C258 46 282 68 282 100 C282 136 252 154 202 162 C252 166 282 188 282 222 C282 254 258 276 214 282 C166 288 122 280 88 254", checkpointCircles: [checkpoint(88, 68), checkpoint(216, 40), checkpoint(202, 162), checkpoint(282, 222), checkpoint(88, 254)] },
  { letter: "Ѕ", pathD: "M260 52 C224 42 180 42 142 54 C104 66 84 90 84 122 C84 150 104 170 144 180 C184 190 210 196 210 220 C210 242 188 256 148 258 C116 260 92 254 72 244 M210 44 L210 276", checkpointCircles: [checkpoint(260, 52), checkpoint(84, 122), checkpoint(144, 180), checkpoint(210, 220), checkpoint(210, 276)] },
  { letter: "И", pathD: "M90 44 L90 276 M90 276 L270 44 M270 44 L270 276", checkpointCircles: [checkpoint(90, 44), checkpoint(90, 276), checkpoint(270, 44), checkpoint(270, 276)] },
  { letter: "Ј", pathD: "M228 44 L228 220 C228 256 204 278 164 278 C128 278 104 258 98 224", checkpointCircles: [checkpoint(228, 44), checkpoint(228, 220), checkpoint(164, 278), checkpoint(98, 224)] },
  { letter: "К", pathD: "M92 44 L92 276 M270 44 L92 164 M150 154 L270 276", checkpointCircles: [checkpoint(92, 44), checkpoint(92, 164), checkpoint(270, 44), checkpoint(150, 154), checkpoint(270, 276)] },
  { letter: "Л", pathD: "M74 96 L130 44 L190 44 L246 276", checkpointCircles: [checkpoint(74, 96), checkpoint(130, 44), checkpoint(190, 44), checkpoint(246, 276)] },
  { letter: "Љ", pathD: "M86 44 L86 276 M86 276 L196 276 M196 44 L196 276 M196 44 L262 44 C288 44 304 60 304 86 C304 112 288 128 262 128 L196 128", checkpointCircles: [checkpoint(86, 44), checkpoint(86, 276), checkpoint(196, 276), checkpoint(196, 44), checkpoint(304, 86)] },
  { letter: "М", pathD: "M70 276 L70 44 L180 162 L290 44 L290 276", checkpointCircles: [checkpoint(70, 276), checkpoint(70, 44), checkpoint(180, 162), checkpoint(290, 44), checkpoint(290, 276)] },
  { letter: "Н", pathD: "M92 44 L92 276 M92 160 L268 160 M268 44 L268 276", checkpointCircles: [checkpoint(92, 44), checkpoint(92, 160), checkpoint(268, 160), checkpoint(268, 44), checkpoint(268, 276)] },
  { letter: "Њ", pathD: "M72 44 L72 276 M72 160 L180 160 M180 44 L180 276 M180 44 L248 44 C278 44 296 60 296 88 C296 116 278 132 248 132 L180 132", checkpointCircles: [checkpoint(72, 44), checkpoint(72, 160), checkpoint(180, 160), checkpoint(180, 44), checkpoint(296, 88)] },
  { letter: "О", pathD: "M180 44 C108 44 66 92 66 160 C66 228 108 276 180 276 C252 276 294 228 294 160 C294 92 252 44 180 44", checkpointCircles: [checkpoint(180, 44), checkpoint(66, 160), checkpoint(180, 276), checkpoint(294, 160)] },
  { letter: "П", pathD: "M88 276 L88 44 M88 44 L272 44 M272 44 L272 276", checkpointCircles: [checkpoint(88, 276), checkpoint(88, 44), checkpoint(272, 44), checkpoint(272, 276)] },
  { letter: "Р", pathD: "M98 44 L98 276 M98 44 L214 44 C258 44 284 70 284 110 C284 150 258 176 214 176 L98 176", checkpointCircles: [checkpoint(98, 44), checkpoint(214, 44), checkpoint(284, 110), checkpoint(214, 176), checkpoint(98, 176)] },
  { letter: "С", pathD: "M274 84 C246 56 214 44 176 44 C110 44 72 92 72 160 C72 228 112 276 178 276 C214 276 246 264 272 238", checkpointCircles: [checkpoint(274, 84), checkpoint(176, 44), checkpoint(72, 160), checkpoint(178, 276), checkpoint(272, 238)] },
  { letter: "Т", pathD: "M72 44 L288 44 M180 44 L180 276", checkpointCircles: [checkpoint(72, 44), checkpoint(288, 44), checkpoint(180, 44), checkpoint(180, 276)] },
  { letter: "Ќ", pathD: "M92 44 L92 276 M268 44 L92 164 M152 154 L268 276 M134 18 L200 18 L164 44", checkpointCircles: [checkpoint(134, 18), checkpoint(200, 18), checkpoint(92, 44), checkpoint(92, 164), checkpoint(268, 276)] },
  { letter: "У", pathD: "M82 44 L142 170 C154 194 172 208 194 208 C220 208 238 192 246 164 L286 44 M194 208 L146 276", checkpointCircles: [checkpoint(82, 44), checkpoint(142, 170), checkpoint(194, 208), checkpoint(246, 164), checkpoint(146, 276)] },
  { letter: "Ф", pathD: "M180 44 L180 276 M84 160 C84 102 126 72 180 72 C234 72 276 102 276 160 C276 218 234 248 180 248 C126 248 84 218 84 160", checkpointCircles: [checkpoint(180, 44), checkpoint(84, 160), checkpoint(180, 248), checkpoint(276, 160), checkpoint(180, 276)] },
  { letter: "Х", pathD: "M86 44 L274 276 M274 44 L86 276", checkpointCircles: [checkpoint(86, 44), checkpoint(180, 160), checkpoint(274, 276), checkpoint(274, 44), checkpoint(86, 276)] },
  { letter: "Ц", pathD: "M88 44 L88 236 M88 236 L252 236 M252 44 L252 290 M252 290 L294 290", checkpointCircles: [checkpoint(88, 44), checkpoint(88, 236), checkpoint(252, 236), checkpoint(252, 290), checkpoint(294, 290)] },
  { letter: "Ч", pathD: "M90 44 L90 128 C90 170 118 194 154 194 C196 194 224 168 224 128 L224 44 M224 128 L224 276", checkpointCircles: [checkpoint(90, 44), checkpoint(90, 128), checkpoint(154, 194), checkpoint(224, 128), checkpoint(224, 276)] },
  { letter: "Џ", pathD: "M88 44 L88 236 M88 236 L252 236 M252 44 L252 236 M170 236 L170 292 C170 314 156 324 132 324", checkpointCircles: [checkpoint(88, 44), checkpoint(88, 236), checkpoint(252, 236), checkpoint(170, 236), checkpoint(132, 324)] },
  { letter: "Ш", pathD: "M74 44 L74 276 M180 44 L180 276 M286 44 L286 276 M74 276 L286 276", checkpointCircles: [checkpoint(74, 44), checkpoint(74, 276), checkpoint(180, 276), checkpoint(286, 44), checkpoint(286, 276)] },
];

const DEFAULT_TRACING_LETTER = "А";

const letterButtonThemes = [
  { from: "#6EC8FF", to: "#4F8EFF", ink: "#134B89", soft: "#E7F4FF" },
  { from: "#FFD86C", to: "#FF9A4D", ink: "#8E5616", soft: "#FFF5D7" },
  { from: "#FF9DCF", to: "#FF6F91", ink: "#8A2154", soft: "#FFE6F1" },
  { from: "#A5E887", to: "#4FBE73", ink: "#1E6841", soft: "#E9FADF" },
  { from: "#C7B5FF", to: "#8E7CFF", ink: "#433292", soft: "#F1ECFF" },
  { from: "#8DE0D6", to: "#45B8C8", ink: "#176471", soft: "#E4FBF8" },
] as const;

function getLetterTheme(index: number) {
  return letterButtonThemes[index % letterButtonThemes.length];
}

function LetterProgressBar({ progress, selectedLetter }: { progress: number; selectedLetter: string }) {
  return (
    <div className="rounded-[1.9rem] border border-white/75 bg-white/78 p-4 shadow-[0_18px_50px_rgba(37,41,70,0.10)] backdrop-blur-xl sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#FFE38D,#FFC14F)] text-[#835014] shadow-[0_12px_24px_rgba(255,193,79,0.35)]">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8A7664]">Напредок</p>
            <p className="font-display text-[1.35rem] font-extrabold leading-none text-[#123E74]">Буква {selectedLetter}</p>
          </div>
        </div>
        <p className="text-right text-sm font-bold text-[#506077]">{progress}% завршено</p>
      </div>
      <div className="mt-4 overflow-hidden rounded-full border border-[#E7DCCB] bg-white/90 p-1.5 shadow-[inset_0_2px_4px_rgba(255,255,255,0.85)]">
        <div className="h-3 rounded-full bg-[linear-gradient(90deg,#6EC8FF_0%,#7E7DFF_45%,#FF8FA2_72%,#FFD86C_100%)] shadow-[0_0_24px_rgba(110,200,255,0.35)] transition-[width] duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

function Controls({ onSpeak, onReset }: { onSpeak: () => void; onReset: () => void }) {
  return (
    <div className="flex items-center justify-center gap-3 sm:justify-end">
      <button type="button" onClick={onSpeak} className="inline-flex h-12 w-12 items-center justify-center rounded-[1.1rem] border border-white/75 bg-white/92 text-[#2D3D5A] shadow-[0_18px_32px_rgba(37,41,70,0.10)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_34px_rgba(37,41,70,0.16)] active:scale-95" aria-label="Слушни ја буквата">
        <Volume2 className="h-5 w-5" />
      </button>
      <button type="button" onClick={onReset} className="inline-flex h-12 w-12 items-center justify-center rounded-[1.1rem] border border-white/75 bg-white/92 text-[#2D3D5A] shadow-[0_18px_32px_rgba(37,41,70,0.10)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_34px_rgba(37,41,70,0.16)] active:scale-95" aria-label="Ресетирај го напредокот">
        <RefreshCcw className="h-5 w-5" />
      </button>
    </div>
  );
}

function LetterCanvas({ letterData }: { letterData: TracingLetter }) {
  return (
    <div className="rounded-[2rem] border border-white/80 bg-white p-4 shadow-[0_28px_70px_rgba(37,41,70,0.10)] sm:p-6">
      <div key={letterData.letter} className="trace-letter-swap relative grid min-h-[360px] place-items-center overflow-hidden rounded-[1.7rem] border border-[#E7EDF7] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] px-4 py-8 sm:min-h-[500px] sm:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(185,211,238,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(185,211,238,0.22)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-4 rounded-[1.45rem] border-2 border-dashed border-[#D7E8FA] sm:inset-6" />
        <div className="absolute top-4 rounded-full border border-[#E7EDF7] bg-white/92 px-4 py-2 text-sm font-bold text-[#4E6580] shadow-[0_12px_24px_rgba(37,41,70,0.08)] sm:top-6">Буква {letterData.letter}</div>
        <svg viewBox="0 0 360 340" className="relative z-10 h-full w-full max-w-[420px]" preserveAspectRatio="xMidYMid meet" aria-hidden>
          <defs>
            <filter id="trace-glow">
              <feGaussianBlur stdDeviation="5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d={letterData.pathD} fill="none" stroke="#D8EDFF" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" filter="url(#trace-glow)" />
          <path d={letterData.pathD} fill="none" stroke="#67B8FF" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="12 10" className="trace-guide-path" />
          {letterData.checkpointCircles.map((cp, index) => (
            <g key={`${letterData.letter}-${index}`}>
              <circle cx={cp.cx} cy={cp.cy} r={cp.r + 8} fill="#DDF2FF" opacity="0.85" />
              <circle cx={cp.cx} cy={cp.cy} r={cp.r} fill="#7BC8FF" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

function LetterButtons({
  letters,
  selectedLetter,
  onSelect,
}: {
  letters: TracingLetter[];
  selectedLetter: string;
  onSelect: (letter: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {letters.map((letterData, index) => {
        const theme = getLetterTheme(index);
        const isActive = letterData.letter === selectedLetter;

        return (
          <button
            key={letterData.letter}
            type="button"
            onClick={() => onSelect(letterData.letter)}
            aria-pressed={isActive}
            className={`inline-flex min-h-[3.45rem] min-w-[3.45rem] items-center justify-center rounded-full border px-4 text-lg font-extrabold transition-all duration-300 ${isActive ? "scale-[1.08] border-transparent text-white shadow-[0_20px_40px_rgba(79,142,255,0.32)]" : "hover:-translate-y-1 hover:scale-[1.04] active:scale-95"}`}
            style={isActive ? { background: `linear-gradient(135deg, ${theme.from}, ${theme.to})`, boxShadow: `0 20px 40px ${theme.to}44` } : { background: theme.soft, borderColor: `${theme.to}26`, color: theme.ink }}
          >
            {letterData.letter}
          </button>
        );
      })}
    </div>
  );
}

export function BusavaTragaGameSection() {
  const [selectedLetter, setSelectedLetter] = useState(DEFAULT_TRACING_LETTER);
  const [progress, setProgress] = useState(() =>
    Math.round(
      ((tracingLetterCatalog.findIndex((letter) => letter.letter === DEFAULT_TRACING_LETTER) + 1) /
        tracingLetterCatalog.length) *
        100
    )
  );

  const currentLetterData = tracingLetterCatalog.find((data) => data.letter === selectedLetter) ?? tracingLetterCatalog[0];

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setProgress(
      Math.round(
        ((tracingLetterCatalog.findIndex((entry) => entry.letter === letter) + 1) / tracingLetterCatalog.length) * 100
      )
    );
  };

  const handleReset = () => {
    setSelectedLetter(DEFAULT_TRACING_LETTER);
    setProgress(
      Math.round(
        ((tracingLetterCatalog.findIndex((entry) => entry.letter === DEFAULT_TRACING_LETTER) + 1) /
          tracingLetterCatalog.length) *
          100
      )
    );
  };

  const handleSpeakLetter = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance(`Буква ${selectedLetter}`);
    utterance.lang = "mk-MK";
    utterance.rate = 0.88;
    utterance.pitch = 1.05;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  return (
    <section
      id="tracing"
      className="mt-8 rounded-[2.7rem] border border-[#F2E3C8] bg-[radial-gradient(circle_at_top,_rgba(255,249,240,0.96),_rgba(235,245,255,0.98))] p-5 text-slate-900 shadow-[0_32px_90px_rgba(37,41,70,0.10)] sm:p-7 lg:p-8"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-[#0D3C70] sm:text-4xl lg:text-[2.9rem]">
            Цртај по бушавата трага <span className="text-[#FF8F3F]">✨</span>
          </h2>
        </div>

        <div className="mt-6 grid gap-4">
          <LetterProgressBar progress={progress} selectedLetter={selectedLetter} />
          <Controls onSpeak={handleSpeakLetter} onReset={handleReset} />
        </div>

        <div className="mt-6">
          <LetterCanvas letterData={currentLetterData} />
        </div>

        <div className="mt-6 rounded-[2rem] border border-white/75 bg-white/70 p-4 shadow-[0_20px_55px_rgba(37,41,70,0.08)] backdrop-blur-xl sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6D7F93]">Македонска азбука</p>
            <span className="rounded-full bg-[#FFF0CF] px-3 py-1 text-xs font-extrabold text-[#A46A1E] shadow-sm">
              {tracingLetterCatalog.length} букви
            </span>
          </div>

          <LetterButtons letters={tracingLetterCatalog} selectedLetter={selectedLetter} onSelect={handleLetterClick} />
        </div>
      </div>
    </section>
  );
}
