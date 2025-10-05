export default function Home() {
  return (
    <section className="grid gap-4 py-10">
      <h1 className="text-3xl font-semibold">A focused dating experience</h1>
      <p className="text-gray-600">
        Smart matching, real-time chat, and curated date ideas near you.
      </p>
      <div className="flex gap-3">
        <a href="/register" className="px-4 py-2 rounded bg-gray-900 text-white">Get started</a>
        <a href="/login" className="px-4 py-2 rounded border hover:bg-gray-100">I already have an account</a>
      </div>
    </section>
  );
}
