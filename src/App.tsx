
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
export default function App(){
  return (<div className="min-h-screen flex flex-col">
    <NavBar />
    <main className="container mx-auto px-4 py-6 flex-1"><Outlet /></main>
    <footer className="text-center text-sm text-gray-500 py-4">Match Navigator © {new Date().getFullYear()}</footer>
  </div>)
}
