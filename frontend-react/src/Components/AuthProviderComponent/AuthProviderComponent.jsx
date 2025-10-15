import React, { useState } from 'react'
import { createContext } from 'react'


export const AuthContext = createContext()



const AuthProviderComponent = ({children}) => {


  let[isLogedIn, setIsLogedIn] = useState(
    !!localStorage.getItem('accessToken')
  )

  return (
    <>
    
        <AuthContext.Provider value={{isLogedIn, setIsLogedIn}}>
          {children}
        </AuthContext.Provider>
    
    </>
  )
}

export default AuthProviderComponent