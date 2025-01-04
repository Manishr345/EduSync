import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminStudent from './components/Profile/AdminStudent'
import Login from './components/Profile/Login'
import AdminSignup from './components/Profile/AdminSingup'
import AdminLogin from './components/Profile/AdminLogin'
import Admission from './components/Admission/Admission'
import Educational from './components/Admission/Educational'
import AdminState from './contexts/admin/AdminState'
import HelloAdmin from './components/Profile/HelloAdmin'
import AdmissionState from './contexts/admission/AdmissionState'
import Personal from './components/Admission/personal'
import AdmissionNav from './components/Admission/AdmissionNav'
import Activity from './pages/Activity'
import About from './pages/About'
import Achievement from './pages/Achievement'
import Courses from './pages/courses'
import Examination from './pages/Examination'
import Documents from './components/Admission/Documents'
import Statement from './components/Admission/Statement'
import Payment from './components/Admission/Payment'
import AdmissionCourse from './components/Admission/AdmissionCourse'
import Header from './components/Home/Header'



function App() {
  return (
    <>
      <AdmissionState>
        <AdminState>
          <BrowserRouter>
          <Header/>
            <Routes>

              {/*Main NAV*/}
              <Route path='/' element={<Home />}></Route>
              <Route path='/admission' element={<Admission />}></Route>   
              <Route path='/profile' element={<AdminStudent />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/activity' element={<Activity />}></Route>
              <Route path='/achievement' element={<Achievement />}></Route>
              <Route path='/courses' element={<Courses />}></Route>
              <Route path='/examination' element={<Examination />}></Route>
             

              {/*Profile*/}
              <Route path='/Login' element={<Login />}></Route>
              <Route path='/adminsignup' element={<AdminSignup />}></Route>
              <Route path='/adminlogin' element={<AdminLogin />}></Route>
              <Route path='/helloadmin' element={<HelloAdmin />}></Route>
              
              {/*Admission NAV*/}
              <Route path='/personal' element={<Personal />}></Route>
              <Route path='/educational' element={<Educational />}></Route>
              <Route path='/document' element={<Documents />}></Route>
              <Route path='/statement' element={<Statement />}></Route>
              <Route path='/course' element={<Courses />}></Route>
              <Route path='/payment' element={<Payment />}></Route>
              
              <Route path='/admission/payment' element={<Payment />}></Route>
              <Route path='/admission/course' element={<AdmissionCourse />}></Route>
              <Route path='/admission/statement' element={<Statement />}></Route>
              <Route path='/admission/educational' element={<Educational />}></Route>
              <Route path='/admission/document' element={<Documents/>}></Route>
              <Route path='/admission/personal' element={[<AdmissionNav/> ,<Personal />]}></Route>
             
              {/*
                  <Route path='/admission/course' element={<Educational/>}></Route>
                  <Route path='/admission/statement' element={<Educational/>}></Route>
                  <Route path='/admission/payment' element={<Educational/>}></Route>
              */}

            </Routes>
          </BrowserRouter>
        </AdminState>
      </AdmissionState>
    </>
  )
}
export default App