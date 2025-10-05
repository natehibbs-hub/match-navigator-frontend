
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../useAuth'
export default function ProtectedRoute({ children }:{children:React.ReactNode}){
  const { token } = useAuth()
  const location = useLocation()
  if (!token) return <Navigate to="/login" state={{ from: location.pathname }} replace />
  return <>{children}</>
}
