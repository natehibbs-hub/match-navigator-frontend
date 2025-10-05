import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto max-w-5xl flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold tracking-tight">
          Match Navigator
        </Link>
        <div className="flex items-center gap-2">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-3 py-1 rounded ${isActive ? "bg-gray-900 text-white" : "hover:bg-gray-100"}`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `px-3 py-1 rounded border ${isActive ? "bg-gray-900 text-white border-gray-900" : "hover:bg-gray-100"}`
            }
          >
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
}


