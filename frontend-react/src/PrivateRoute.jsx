import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './Components/AuthProviderComponent/AuthProviderComponent'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {
  

    let{isLogedIn} = useContext(AuthContext)
    // let{isLogedIn,setIsLogedIn} = useContext(AuthContext)


    return isLogedIn ? (
        children
    ) : (
        <Navigate to='/login' />
    ) 
        
    
    }



export default PrivateRoute