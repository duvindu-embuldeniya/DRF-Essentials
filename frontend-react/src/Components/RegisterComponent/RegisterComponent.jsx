import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const RegisterComponent = () => {

  let[username, setUsername] = useState('')
  let[email, setEmail] = useState('')
  let[password, setPassword] = useState('')
  let[errors, setErrors] = useState({})
  let[success, setSuccess] = useState(false)
  let[loading, setLoading] = useState(false)

  let f1 = (e)=>{
    setUsername(e.target.value)
  }

  let f2 = (e)=>{
    setEmail(e.target.value)
  }

  let f3 = (e)=>{
    setPassword(e.target.value)
  }

  let formSubmit = async (e)=>{
    e.preventDefault()
    let userData = {
        username,email,password
    }
    setLoading(true)

    try{
        let response = await axios.post('http://localhost:8000/api/p4/register/', userData)
        setSuccess(true)
        setUsername('')
        setEmail('')
        setPassword('')
    }

    catch(error){
        setErrors(error.response.data)
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
                  <h3 className='text-light text-center mb-4'>Create an Account</h3>

                  <form onSubmit={formSubmit}>

                    <div className='mb-3'>
                      <input type="text" value={username} onChange={f1} required className='form-control' placeholder='Enter username' />
                      {errors.username && <small><div className='text-danger'>{errors.username}</div></small> }
                    </div>

                    <div className='mb-3'>
                      <input type="text" value={email} onChange={f2} required className='form-control' placeholder='Enter email' />
                      {errors.email && <small><div className='text-danger'>{errors.email}</div></small> }
                    </div>

                    <div className="mb-3">
                      <input type="password" value={password} onChange={f3} required className='form-control' placeholder='Enter password' />
                      {errors.password && <small><div className='text-danger'>{errors.password}</div></small> }
                    </div>

                    {success && <div className='alert alert-success'>Regsitration Success!</div>}

                    {loading && <button type='submit' className='btn btn-info d-block mx-auto'>In Progress..!</button>}
                    {!loading && <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>}

                  </form>

              </div>
          </div>

       </div>

    </>
  )
}

export default RegisterComponent