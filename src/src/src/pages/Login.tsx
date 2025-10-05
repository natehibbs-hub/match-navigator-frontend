import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="max-w-md mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      <form className="grid gap-4">
        <label className="grid gap-1">
          <span className="text-sm text-gray-700">Email</span>
          <input
            type="email"
            className="border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-gray-700">Password</span>
          <input
            type="password"
            className="border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </label>
        <button type="submit" className="mt-2 px-4 py-2 rounded bg-gray-900 text-white">
          Sign in
        </button>
      </form>
    </section>
  );
}
