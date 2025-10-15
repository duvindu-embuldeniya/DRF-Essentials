import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthProviderComponent/AuthProviderComponent'


const LoginComponent = () => {

  let[username, setUsername] = useState('')
  let[password, setPassword] = useState('')
  let[loading, setLoading] = useState(false)
  let[error, setError] = useState('')
  const navigate = useNavigate()
  const{isLogedIn, setIsLogedIn} = useContext(AuthContext)

  let f1 = (e) =>{
    setUsername(e.target.value)
  }

  let f2 = (e) =>{
    setPassword(e.target.value)
  }

  let formSubmit = async (e)=>{
    e.preventDefault()
    let userData = {
      username,password
    }
    setLoading(true)

    try{
      let response = await axios.post('http://localhost:8000/api/p2/token/', userData)
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)
      setIsLogedIn(true)
      navigate('/dashboard')
    }
    catch(error){
      setError("Invalid Credentials..!")
    }
    finally{
      setLoading(false)
    }
  }


  return (
    <>
    <div className='container'>

            <div className='row justify-content-center'>
                <div className='col-md-6 bg-light-dark p-5 rounded'>
                    <h3 className='text-light text-center mb-4'>Login to our Portal</h3>

                    <form onSubmit={formSubmit}>

                      <div className='mb-3'>
                        <input type="text" required value={username} onChange={f1} className='form-control' placeholder='Enter username' />
                      </div>

                      <div className="mb-3">
                        <input type="password" required value={password} onChange={f2} className='form-control' placeholder='Enter password' />
                      </div>

                      {error && <div className='alert alert-danger'>Invalid Credentials!</div>}


                      {loading && <button type='submit' disabled className='btn btn-info d-block mx-auto'>In Progress..</button>}
                      {!loading && <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>}
                      

                    </form>

                </div>
            </div>

        </div>
    </>
  )
}

export default LoginComponent