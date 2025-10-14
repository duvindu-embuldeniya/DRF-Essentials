import ButtonComponent from "../ButtonComponent/ButtonComponent"
import { Link } from "react-router-dom";


const HeaderComponent = () => {
  return (
    <>
        <nav className="navbar container pt-3 pd-3 align-items-start">

            <Link className="navbar-brand text-light border border-info rounded px-3 py-1" to="/">
                Test Your Work</Link>



            <div>
                <ButtonComponent url='/login' class='btn-outline-info' text='login' />
                &nbsp;&nbsp;
                <ButtonComponent url='/register' class='btn-info' text='register' />
            </div>

        </nav>
    </>
  )
}

export default HeaderComponent