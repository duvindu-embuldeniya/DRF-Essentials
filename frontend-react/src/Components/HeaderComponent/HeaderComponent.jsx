import ButtonComponent from "../ButtonComponent/ButtonComponent"
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviderComponent/AuthProviderComponent";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const HeaderComponent = () => {

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
        <nav className="navbar container pt-3 pd-3 align-items-start">

            <Link className="navbar-brand text-light border border-info rounded px-3 py-1" to="/">
                Test Your Work</Link>



            <div>
              {isLogedIn && <button onClick={handleLogout} className="btn btn-danger">Logout</button>}
              {!isLogedIn &&
                <>
                <ButtonComponent url='/login' class='btn-outline-info' text='login' />
                &nbsp;&nbsp;
                <ButtonComponent url='/register' class='btn-info' text='register' />
                </>
              }
            </div>

        </nav>
    </>
  )
}

export default HeaderComponent