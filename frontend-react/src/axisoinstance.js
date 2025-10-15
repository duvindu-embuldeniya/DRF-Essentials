import axios from 'axios'


const axiosInstance = axios.create({
    baseURL:'http://localhost:8000/api/p4',
    headers: {
        'Content-Type': 'application/json',
    }
})







//Request Intercepter
axiosInstance.interceptors.request.use(
    function(config){
        let accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }

        // console.log(config) //request we sent to views.py
        
        return config;  // wht we get from views.py & will asign to dahsboard.jsx response

    }
    // , function(error){
    //     return Promise.reject(error)
    // }
)












export default axiosInstance