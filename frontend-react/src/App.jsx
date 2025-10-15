import './assets/css/style.css'
import HeaderComponent from './Components/HeaderComponent/HeaderComponent'
import MainComponent from './Components/MainComponent/MainComponent'
import FooterComponent from './Components/FooterComponent/FooterComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterComponent from './Components/RegisterComponent/RegisterComponent';
import LoginComponent from './Components/LoginComponent/LoginComponent';
import AuthProviderComponent from './Components/AuthProviderComponent/AuthProviderComponent';

function App() {

  return (
    <>
      <AuthProviderComponent>
        <BrowserRouter>
          <HeaderComponent />
          
            <Routes>

                <Route path='/' element={<MainComponent />} />

                <Route path='/register' element={<RegisterComponent />} />

                <Route path='/login' element={<LoginComponent />} />


            </Routes>

          <FooterComponent />
        </BrowserRouter>
      </AuthProviderComponent>
    </>
  )
}

export default App
