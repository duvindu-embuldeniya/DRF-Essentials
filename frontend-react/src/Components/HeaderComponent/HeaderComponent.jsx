
import ButtonComponent from "../ButtonComponent/ButtonComponent"

const HeaderComponent = () => {
  return (
    <>
        <nav className="navbar container pt-3 pd-3 align-items-start">

            <a className="navbar-brand text-light border border-info rounded px-3 py-1" href="">Test Your Work</a>

            <div>
                <ButtonComponent class='btn-outline-info' text='login' />
                &nbsp;&nbsp;
                <ButtonComponent class='btn-info' text='register' />
            </div>

        </nav>
    </>
  )
}

export default HeaderComponent