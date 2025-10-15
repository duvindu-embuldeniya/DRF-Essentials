import ButtonComponent from "../ButtonComponent/ButtonComponent"
// import HeaderComponent from "../HeaderComponent/HeaderComponent"
// import FooterComponent from "../FooterComponent/FooterComponent"
import { AuthContext } from "../AuthProviderComponent/AuthProviderComponent"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

const MainComponent = () => {

  const{isLogedIn, setIsLogedIn} = useContext(AuthContext)
  let navigate = useNavigate()

  let handleLogout = ()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLogedIn(false)
    navigate('/')
  }

  return (
    <>

        {/* <HeaderComponent /> */}

        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Observe What U Need..!</h1>
                <p className='text-light lead'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam modi aliquid cupiditate laborum molestias eius odit reiciendis consequuntur provident, quaerat illum enim tempora beatae dolor error nihil temporibus delectus quibusdam?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nulla laborum enim ab impedit adipisci ad aspernatur assumenda culpa maiores ut molestiae dicta, consectetur natus distinctio temporibus exercitationem placeat accusamus.
                </p>

                {isLogedIn && <button onClick={handleLogout} className="btn btn-danger">Logout</button>}
                {!isLogedIn &&
                  <ButtonComponent url='/login' class='btn-outline-info' text='login' />
                }


            </div>
        </div>

        {/* <FooterComponent /> */}

    </>
  )
}

export default MainComponent