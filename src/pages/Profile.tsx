
import { useEffect, useState } from 'react'
import { getMe } from '../api'
export default function Profile(){
  const [me,setMe]=useState<any>(null)
  const [err,setErr]=useState('')
  useEffect(()=>{ getMe().then(setMe).catch((e:any)=>setErr(e.message||'Error')) },[])
  return (<div className="space-y-4">
    <h2 className="text-xl font-semibold">My Profile</h2>
    {err && <div className="text-red-600">{err}</div>}
    <pre className="bg-white border rounded p-4">{JSON.stringify(me,null,2)}</pre>
  </div>)
}
