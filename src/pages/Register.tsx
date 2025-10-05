
import { useState } from 'react'
import { register } from '../api'
import { Link, useNavigate } from 'react-router-dom'
export default function Register(){
  const [email,setEmail]=useState('demo@example.com')
  const [password,setPassword]=useState('password123')
  const [name,setName]=useState('Demo')
  const [msg,setMsg]=useState('')
  const nav=useNavigate()
  async function onSubmit(e:React.FormEvent){ e.preventDefault(); setMsg(''); try{ await register({email,password,name}); setMsg('Registered! Now log in.'); setTimeout(()=>nav('/login'),500)}catch(e:any){ setMsg(e.message||'Registration failed') } }
  return (<div className="max-w-sm mx-auto bg-white border rounded p-6 space-y-4">
    <h2 className="text-xl font-semibold">Create account</h2>
    <form onSubmit={onSubmit} className="space-y-3">
      <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full border rounded px-3 py-2"/>
      <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" className="w-full border rounded px-3 py-2"/>
      <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full border rounded px-3 py-2"/>
      <button className="w-full px-3 py-2 rounded bg-gray-900 text-white">Register</button>
    </form>
    {msg && <div className="text-sm">{msg}</div>}
    <p className="text-sm text-gray-600">Have an account? <Link to="/login" className="underline">Log in</Link></p>
  </div>)
}
