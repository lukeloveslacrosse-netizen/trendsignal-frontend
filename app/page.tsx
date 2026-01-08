import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const space = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white`}>
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-6">
        {/* LOGO */}
        <div className={`${space.className} text-2xl font-bold tracking-tight`}>
          <span className="text-white">Trend</span>
          <span className="text-indigo-400">Signal</span>
        </div>

        {/* NAV ACTIONS */}
        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="text-sm font-medium text-gray-300 hover:text-white"
          >
            Login
          </a>
          <a
            href="/login"
            className="rounded-lg bg-indigo-500 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-600 transition"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center px-6 pt-32 text-center">
        <h1 className={`${space.className} max-w-4xl text-5xl font-extrabold leading-tight sm:text-6xl`}>
          Find winning products <br />
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            before the market does
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-300">
          TrendSignal analyzes social velocity, ad momentum, and demand signals
          to surface breakout products early — before saturation.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/login"
            className="rounded-xl bg-indigo-500 px-8 py-3 text-base font-semibold text-white hover:bg-indigo-600 transition"
          >
            Get Early Access
          </a>
          <a
            href="#features"
            className="rounded-xl border border-white/20 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="mx-auto mt-36 max-w-6xl px-6 text-center"
      >
        <h2 className={`${space.className} text-3xl font-bold`}>
          Built to give you an unfair advantage
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          <Feature
            title="Early Trend Detection"
            text="Identify products gaining momentum before they become mainstream."
            color="from-indigo-500 to-purple-500"
          />
          <Feature
            title="Signal-Based Scoring"
            text="We track velocity, engagement, and intent — not hype."
            color="from-cyan-500 to-blue-500"
          />
          <Feature
            title="Seller-First Design"
            text="Made for Shopify, TikTok Shop, Amazon, and brand builders."
            color="from-emerald-500 to-teal-500"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-40 border-t border-white/10 px-6 py-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TrendSignal. All rights reserved.
      </footer>
    </main>
  );
}

function Feature({
  title,
  text,
  color,
}: {
  title: string;
  text: string;
  color: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur">
      <div
        className={`mb-4 h-1 w-12 rounded-full bg-gradient-to-r ${color}`}
      />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-300">{text}</p>
    </div>
  );
}

