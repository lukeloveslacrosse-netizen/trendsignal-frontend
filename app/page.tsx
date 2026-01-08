export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-xl px-6">
        <h1 className="text-5xl font-bold">TrendSignal</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Discover winning products before they explode.
        </p>

        <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg hover:opacity-90">
          Get Early Access
        </button>
      </div>
    </main>
  );
}
