import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import AdminState from './contexts/admin/AdminState'
import AdmissionState from './contexts/admission/AdmissionState'
import Footer from './components/Home/Footer'

// Lazy load components
const Home = lazy(() => import('./pages/Home'))
const AdminStudent = lazy(() => import('./components/Profile/AdminStudent'))
const Login = lazy(() => import('./components/Profile/Login'))
const AdminSignup = lazy(() => import('./components/Profile/AdminSingup'))
const AdminLogin = lazy(() => import('./components/Profile/AdminLogin'))
const Admission = lazy(() => import('./components/Admission/Admission'))
const Educational = lazy(() => import('./components/Admission/Educational'))
const HelloAdmin = lazy(() => import('./components/Profile/HelloAdmin'))
const Personal = lazy(() => import('./components/Admission/Personal'))
const AdmissionNav = lazy(() => import('./components/Admission/AdmissionNav'))
const Activity = lazy(() => import('./pages/Activity'))
const About = lazy(() => import('./pages/About'))
const Achievement = lazy(() => import('./pages/Achievement'))
const Courses = lazy(() => import('./pages/Courses'))
const Examination = lazy(() => import('./pages/Examination'))
const Documents = lazy(() => import('./components/Admission/Documents'))
const Statement = lazy(() => import('./components/Admission/Statement'))
const Payment = lazy(() => import('./components/Admission/Payment'))
const AdmissionCourse = lazy(() => import('./components/Admission/AdmissionCourse'))
const HelloStudent = lazy(() => import('./components/Profile/HelloStudent'))
const StudentsLog = lazy(() => import('./components/OnlyAdmin/StudentsLog'))
const Kt = lazy(() => import('./components/Examination/Kt'))
const KTStudents = lazy(() => import('./components/OnlyAdmin/KTStudents'))
const Attedance = lazy(() => import('./components/Profile/Attedance'))

// Loading component
const Loading = () => <div>Loading...</div>

function App() {
  return (
    <>
      <AdmissionState>
        <AdminState>
          <BrowserRouter>
            <Suspense fallback={<Loading />}>
              <Routes>
                {/*Main NAV*/}
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<AdminStudent />} />
                <Route path='/about' element={<About />} />
                <Route path='/activity' element={<Activity />} />
                <Route path='/achievement' element={<Achievement />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/examination' element={<Examination />} />
                <Route path='/studentslog' element={<StudentsLog/>} />
                <Route path='/ktstudents' element={<KTStudents/>} />
                <Route path='/kt-form' element={<Kt/>} />

                {/*Profile*/}
                <Route path='/login' element={<Login />} />
                <Route path='/adminsignup' element={<AdminSignup />} />
                <Route path='/adminlogin' element={<AdminLogin />} />
                <Route path='/helloadmin' element={<HelloAdmin />} />
                <Route path='/hellostudent' element={<HelloStudent />} />
                <Route path='/attendance' element={<Attedance/>} />
                
                {/*Admission NAV*/}
                <Route path='/personal' element={<Personal />} />
                <Route path='/educational' element={<Educational />} />
                <Route path='/document' element={<Documents />} />
                <Route path='/statement' element={<Statement />} />
                <Route path='/course' element={<Courses />} />
                <Route path='/payment' element={<Payment />} />
                
                <Route path='/admission/payment' element={<Payment />} />
                <Route path='/admission/course' element={<AdmissionCourse />} />
                <Route path='/admission/statement' element={<Statement />} />
                <Route path='/admission/educational' element={<Educational />} />
                <Route path='/admission/document' element={<Documents/>} />
                <Route path='/admission/personal' element={<Personal />} />
              </Routes>
            </Suspense>
            <Footer/>
          </BrowserRouter>
        </AdminState>
      </AdmissionState>
    </>
  )
}

export default App