
import { useEffect, useState } from 'react'
import { health } from '../api'
export default function Home(){
  const [status, setStatus] = useState('checking…')
  useEffect(()=>{ health().then(d=>setStatus('✅ '+JSON.stringify(d))).catch(e=>setStatus('❌ '+(e?.message||e))) },[])
  return (<div className="space-y-4">
    <h1 className="text-2xl font-semibold">Match Navigator</h1>
    <p className="text-gray-600">A focused dating experience with smart matching and real‑time chat.</p>
    <div className="p-4 bg-white rounded border">{status}</div>
  </div>)
}
