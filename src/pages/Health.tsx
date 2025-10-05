
import { useState } from 'react'
import { health } from '../api'
export default function Health(){
  const [res, setRes] = useState('')
  return (<div className="space-y-3">
    <h2 className="text-xl font-semibold">Health</h2>
    <button onClick={async()=> setRes(JSON.stringify(await health(), null, 2))} className="px-3 py-2 rounded bg-gray-900 text-white text-sm">Ping</button>
    <pre className="bg-white rounded border p-3 whitespace-pre-wrap">{res}</pre>
  </div>)
}
