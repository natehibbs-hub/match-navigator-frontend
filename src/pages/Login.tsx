
import { useState } from 'react'
import { login } from '../api'
import useAuth from '../useAuth'
import { useNavigate, useLocation, Link } from 'react-router-dom'
export default function Login(){
  const [email,setEmail]=useState('demo@example.com')
  const [password,setPassword]=useState('password123')
  const [err,setErr]=useState('')
  const { setToken } = useAuth()
  const nav=useNavigate()
  const loc:any=useLocation()
  async function onSubmit(e:React.FormEvent){ e.preventDefault(); setErr(''); try{ const data=await login({email,password}); const token=data?.token||data?.accessToken||data?.jwt; if(!token) throw new Error('No token in response'); setToken(token); nav(loc.state?.from||'/') }catch(e:any){ setErr(e.message||'Login failed') } }
  return (<div className="max-w-sm mx-auto bg-white border rounded p-6 space-y-4">
    <h2 className="text-xl font-semibold">Login</h2>
    <form onSubmit={onSubmit} className="space-y-3">
      <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" className="w-full border rounded px-3 py-2"/>
      <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full border rounded px-3 py-2"/>
      {err && <div className="text-red-600 text-sm">{err}</div>}
      <button className="w-full px-3 py-2 rounded bg-gray-900 text-white">Sign in</button>
    </form>
    <p className="text-sm text-gray-600">No account? <Link to="/register" className="underline">Register</Link></p>
  </div>)
}
