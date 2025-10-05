
import { Link } from 'react-router-dom'
import useAuth from '../useAuth'
export default function NavBar(){
  const { token, logout } = useAuth()
  return (<nav className="bg-white border-b">
    <div className="container mx-auto px-4 py-3 flex items-center gap-4">
      <Link to="/" className="font-bold text-xl">MN</Link>
      <Link to="/health" className="text-sm">Health</Link>
      <Link to="/matches" className="text-sm">Matches</Link>
      <Link to="/chat" className="text-sm">Chat</Link>
      <div className="ml-auto flex items-center gap-3">
        {token ? (<>
          <Link to="/profile" className="text-sm">Profile</Link>
          <button onClick={logout} className="px-3 py-1 rounded bg-gray-900 text-white text-sm">Logout</button>
        </>) : (<>
          <Link to="/login" className="text-sm">Login</Link>
          <Link to="/register" className="text-sm">Register</Link>
        </>)}
      </div>
    </div>
  </nav>)
}
