
import { useEffect, useState } from 'react'
import { getChats } from '../api'
export default function Chat(){
  const [chats,setChats]=useState<any[]>([])
  const [err,setErr]=useState('')
  useEffect(()=>{ getChats().then((d:any)=>setChats(d?.chats||d||[])).catch((e:any)=>setErr(e.message)) },[])
  return (<div className="space-y-4">
    <h2 className="text-xl font-semibold">Chats</h2>
    {err && <div className="text-red-600">{err}</div>}
    <ul className="space-y-2">
      {chats.map((c:any,i:number)=> (<li key={i} className="bg-white border rounded p-3">
        <div className="font-medium">{c.with||c.partner||'Partner'}</div>
        <div className="text-sm text-gray-600">{c.last||c.lastMessage||'Start the conversation!'}</div>
      </li>))}
      {!chats.length && <div>No chats yet.</div>}
    </ul>
  </div>)
}
