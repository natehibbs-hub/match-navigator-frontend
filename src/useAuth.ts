
import { create } from 'zustand'
type AuthState = { token: string | null, setToken: (t:string|null)=>void, logout: ()=>void }
const useAuth = create<AuthState>((set)=>({
  token: localStorage.getItem('mn_token'),
  setToken: (t)=>{ t?localStorage.setItem('mn_token', t):localStorage.removeItem('mn_token'); set({token:t}) },
  logout: ()=>{ localStorage.removeItem('mn_token'); set({token:null}) }
}))
export default useAuth
