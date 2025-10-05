
import axios from 'axios'
const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'
export const api = axios.create({ baseURL })
api.interceptors.request.use((config)=>{ const t = localStorage.getItem('mn_token'); if(t) config.headers['Authorization'] = `Bearer ${t}`; return config })
export async function health(){ return (await api.get('/health')).data }
export async function register(payload:{email:string;password:string;name?:string}){ return (await api.post('/auth/register', payload)).data }
export async function login(payload:{email:string;password:string}){ return (await api.post('/auth/login', payload)).data }
export async function getMe(){ return (await api.get('/me')).data }
export async function getMatches(){ return (await api.get('/matches')).data }
export async function getChats(){ return (await api.get('/chats')).data }
