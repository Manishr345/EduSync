import './App.css'
import Home from './pages/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AdminStudent from './components/AdminStudent'
import Login from './components/Login'
import AdminSignup from './components/AdminSingup'
import AdminLogin from './components/AdminLogin'
import AdminState from './contexts/admin/AdminState'


function App() {
  return (
    <>
      <AdminState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {/* <Route path='/about' element={<About/>}></Route>
          <Route path='/activity' element={<Activity/>}></Route>
          <Route path='/achievement' element={<Achievement/>}></Route>
          <Route path='/courses' element={<Courses/>}></Route>
          <Route path='/examination' element={<Examination/>}></Route>
          <Route path='/admission' element={<Admission/>}></Route> */}
          <Route path='/profile' element={<AdminStudent/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/adminsignup' element={<AdminSignup/>}></Route>
          <Route path='/adminlogin' element={<AdminLogin/>}></Route>
        </Routes>
      </BrowserRouter>
      </AdminState>
    </>
  )
}
export default App
