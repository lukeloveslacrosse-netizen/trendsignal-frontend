import Link from "next/link";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const space = Space_Grotesk({ subsets: ["latin"] });

export default function Signup() {
  return (
    <main className={`${inter.className} min-h-screen bg-slate-950 flex items-center justify-center px-6`}>
      <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-white/10 p-8 shadow-xl">
        {/* LOGO */}
        <div className="mb-8 text-center">
          <div className={`${space.className} text-2xl font-bold`}>
            <span className="text-white">Trend</span>
            <span className="text-indigo-400">Signal</span>
          </div>
        </div>

        <h1 className="text-xl font-semibold text-white">
          Create your account
        </h1>
        <p className="mt-1 text-sm text-gray-400">
          Start your free 24-hour trial.
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg bg-slate-800 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg bg-slate-800 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-500 py-3 text-sm font-semibold text-white hover:bg-indigo-600 transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}

