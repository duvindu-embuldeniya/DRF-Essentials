import { useContext } from 'react'
import { AuthContext } from './Components/AuthProviderComponent/AuthProviderComponent'
import { Navigate } from 'react-router-dom'


const PublicRoute = ({children}) => {

  let{isLogedIn} = useContext(AuthContext)

  return !isLogedIn ? (
    children  // login, register
  ) : (
    <Navigate to='/dashboard' />
  )
}

export default PublicRoute