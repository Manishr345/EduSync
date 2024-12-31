import './App.css'
import Home from './pages/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AdminStudent from './components/AdminStudent'
import Login from './components/Login'
import AdminSignup from './components/AdminSingup'
import AdminLogin from './components/AdminLogin'
import Admission from './components/Admission'
import Educational from './components/Educational'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {/* <Route path='/about' element={<About/>}></Route>
          <Route path='/activity' element={<Activity/>}></Route>
          <Route path='/achievement' element={<Achievement/>}></Route>
          <Route path='/courses' element={<Courses/>}></Route>
          <Route path='/examination' element={<Examination/>}></Route>*/}
          <Route path='/admission' element={<Admission/>}></Route> 
          <Route path='/profile' element={<AdminStudent/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/adminsignup' element={<AdminSignup/>}></Route>
          <Route path='/adminlogin' element={<AdminLogin/>}></Route>




          {/* routes for admission sessions */}
          <Route path='/educational' element={<Educational/>}></Route>
          {/* <Route path='/course' element={<Course/>}></Route>
          <Route path='/document' element={<Document/>}></Route>
          <Route path='/declaration' element={<declaration/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>*/}

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
