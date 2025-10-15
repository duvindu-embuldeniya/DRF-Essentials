import './assets/css/style.css'
import HeaderComponent from './Components/HeaderComponent/HeaderComponent'
import MainComponent from './Components/MainComponent/MainComponent'
import FooterComponent from './Components/FooterComponent/FooterComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterComponent from './Components/RegisterComponent/RegisterComponent';
import LoginComponent from './Components/LoginComponent/LoginComponent';
import AuthProviderComponent from './Components/AuthProviderComponent/AuthProviderComponent';
import DashBoardComponent from './Components/DashBoardComponent/DashBoardComponent';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


function App() {

  return (
    <>
      <AuthProviderComponent>
        <BrowserRouter>
          <HeaderComponent />
          
            <Routes>

                <Route path='/' element={<MainComponent />} />

                <Route path='/register' element={<PublicRoute> <RegisterComponent /> </PublicRoute> } />

                <Route path='/login' element={<PublicRoute> <LoginComponent /> </PublicRoute> } />
                
                <Route path='/dashboard' element={<PrivateRoute> <DashBoardComponent /> </PrivateRoute> } />

            </Routes>

          <FooterComponent />
        </BrowserRouter>
      </AuthProviderComponent>
    </>
  )
}

export default App
