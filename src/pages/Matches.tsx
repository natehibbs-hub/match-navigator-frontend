
import { useEffect, useState } from 'react'
import { getMatches } from '../api'
export default function Matches(){
  const [matches,setMatches]=useState<any[]>([])
  const [err,setErr]=useState('')
  useEffect(()=>{ getMatches().then((d:any)=>setMatches(d?.matches||d||[])).catch((e:any)=>setErr(e.message)) },[])
  return (<div className="space-y-4">
    <h2 className="text-xl font-semibold">Your Matches</h2>
    {err && <div className="text-red-600">{err}</div>}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {matches.map((m:any,i:number)=> (<div key={i} className="bg-white border rounded p-4">
        <div className="font-medium">{m.name||m.username||`Match #${i+1}`}</div>
        <div className="text-sm text-gray-600">{m.bio||m.about||'No bio'}</div>
      </div>))}
      {!matches.length && <div>No matches yet.</div>}
    </div>
  </div>)
}
