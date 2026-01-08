export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6">
        {/* LOGO */}
        <div className="text-2xl font-bold tracking-tight">
          <span className="font-extrabold">Trend</span>
          <span className="text-gray-500 font-medium">Signal</span>
        </div>

        {/* NAV ACTIONS */}
        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-black"
          >
            Login
          </a>
          <a
            href="/login"
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center px-6 pt-32 text-center">
        <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight sm:text-6xl">
          Discover winning products <br className="hidden sm:block" />
          <span className="text-gray-500">before they explode</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-600">
          TrendSignal scans social platforms, ad signals, and demand data to
          surface products with breakout potential — before everyone else sees
          them.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/login"
            className="rounded-md bg-black px-6 py-3 text-base font-medium text-white hover:bg-gray-800"
          >
            Get Early Access
          </a>
          <a
            href="#features"
            className="rounded-md border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-100"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="mx-auto mt-32 max-w-5xl px-6 text-center"
      >
        <h2 className="text-3xl font-bold">Why TrendSignal?</h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="rounded-xl border p-6">
            <h3 className="text-lg font-semibold">Early Detection</h3>
            <p className="mt-2 text-gray-600">
              Spot trends while they’re still underground — not after they’re
              saturated.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="text-lg font-semibold">Real Demand Signals</h3>
            <p className="mt-2 text-gray-600">
              We track engagement velocity, ad spend growth, and consumer
              intent.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="text-lg font-semibold">Built for Sellers</h3>
            <p className="mt-2 text-gray-600">
              Perfect for Shopify, TikTok Shop, Amazon, and brand builders.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-32 border-t px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TrendSignal. All rights reserved.
      </footer>
    </main>
  );
}
