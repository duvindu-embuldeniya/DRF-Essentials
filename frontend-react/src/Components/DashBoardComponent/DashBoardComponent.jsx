import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const DashBoardComponent = () => {

  let access_token = localStorage.getItem('accessToken')

  useEffect(()=>{

    let fetchResponseData = async () =>{
        try{
            let response = await axios.get('http://localhost:8000/api/p4/protected-view/',{
                headers:{
                    Authorization: `Bearer ${access_token}`
                }
            })
            console.log("Success -> ", response.data)
        }
        catch(error){
            console.log("Error ->",error.response.data)
        }
    }
    fetchResponseData()
  },[])


  return (

        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Explore More..!</h1>
                <p className='text-light lead'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam modi aliquid cupiditate laborum molestias eius odit reiciendis consequuntur provident, quaerat illum enim tempora beatae dolor error nihil temporibus delectus quibusdam?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nulla laborum enim ab impedit adipisci ad aspernatur assumenda culpa maiores ut molestiae dicta, consectetur natus distinctio temporibus exercitationem placeat accusamus.
                </p>

                <button className="btn btn-info">Explore</button>


            </div>
        </div>
  )
}

export default DashBoardComponent