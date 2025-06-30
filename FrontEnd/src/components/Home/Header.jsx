import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  const [menuopen, setmenuopen] = useState(false);
  const toggle = () => setmenuopen(!menuopen);
  const admin = sessionStorage.getItem("admin");
  useEffect(() => {
    if(sessionStorage.getItem('admin')=== "true"){
      sessionStorage.setItem('admin', "true");
    }
    else{
      sessionStorage.setItem('admin', "false");
    }
    console.log(sessionStorage.getItem('admin'))
    
    if (sessionStorage.getItem('studentPresence') === "true") {
      sessionStorage.setItem('studentPresence', "false");
    } else {
      sessionStorage.setItem('studentPresence', "true");
    }
    console.log('student',sessionStorage.getItem('studentPresence'));
    console.log('admin', sessionStorage.getItem('admin'));
    const handleStorageChange = () => {
      setAdmin(sessionStorage.getItem("admin"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);


  return (
    /* Don't delete this comment work in progress
      <header className='bg-black text-white p-10 flex justify-between text-3xl'>
      <div>EduSync</div>
      <div className='hover:bg-slate-600 rounded-lg'><button className='w-11 h-11'><i className="fa-solid fa-bars"></i></button></div>
      </header>  
    */
    <>
      <nav className="bg-black shadow-md lg:h-24 lg:p-4 xl:h-32 xl:p-7 min-[768px]:max-[1023px]:w-[100%] top-0 z-50 sticky transition-all duration-300">
        <div className="max-w-screen flex flex-wrap items-center justify-between p-4 min-[768px]:max-[1023px]:flex gap-5 xl:flex xl:justify-between">
          <Link to='/' className="flex gap-2 items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="xl:h-12 h-9 drop-shadow-lg" alt="EduSync Logo" />
            <span className="text-2xl font-extrabold tracking-wide text-white xl:text-4xl drop-shadow-lg">EduSync</span>
          </Link>
          <button
            type="button"
            className="flex items-center justify-center p-2 w-10 h-10 text-xl text-white rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            aria-controls="navbar-default"
            aria-expanded={menuopen ? "true" : "false"}
            onClick={toggle}
          >
            {/* Animated Hamburger/X Icon */}
            <span className="relative w-6 h-6 block">
              <span
                className={`absolute left-0 top-1.5 w-6 h-1 bg-white rounded transition-all duration-300 ${menuopen ? 'rotate-45 top-3' : ''}`}
              ></span>
              <span
                className={`absolute left-0 top-3 w-6 h-1 bg-white rounded transition-all duration-300 ${menuopen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`absolute left-0 top-4.5 w-6 h-1 bg-white rounded transition-all duration-300 ${menuopen ? '-rotate-45 top-3' : ''}`}
              ></span>
            </span>
          </button>
          <div className={`w-full md:block md:w-auto ${menuopen ? "animate-fade-in" : "hidden"}`} id="navbar-default">
            <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-white/10 rounded-xl bg-white/5 md:flex-row md:space-x-14 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent min-[768px]:max-[1023px]:space-x-8 lg:space-x-8 xl:space-x-14 shadow-md md:shadow-none">
              <li>
                <Link to='/' className="xl:text-xl block py-2 px-4 text-white rounded-lg hover:bg-blue-900/40 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="xl:text-xl block py-2 px-4 text-white rounded-lg hover:bg-blue-900/40 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/activity" className="xl:text-xl block py-2 px-4 text-white rounded-lg hover:bg-blue-900/40 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200">
                  Activity
                </Link>
              </li>
              <li>
                <Link to="/achievement" className="xl:text-xl block py-2 px-4 text-white rounded-lg hover:bg-blue-900/40 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/courses" className="xl:text-xl block py-2 px-4 text-white rounded-lg hover:bg-blue-900/40 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200">
                  Courses
                </Link>
              </li>
              <li>
                <Link to={sessionStorage.getItem('admin') === "true" ? '/ktstudents' : '/examination'} className="xl:text-xl block py-2 px-4 text-white rounded-lg hover:bg-blue-900/40 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200">
                {sessionStorage.getItem('admin') === "true" ? 'KT Students' : 'Examination'}
                </Link>
              </li>
              <li>
                <Link to={sessionStorage.getItem('admin') === "true" ? '/studentslog' : '/admission/personal'} className="xl:text-xl block py-2 px-4 text-white rounded-lg hover:bg-blue-900/40 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200">
                  {sessionStorage.getItem('admin') === "true" ? 'Students Log' : 'Admission'}
                </Link>
              </li>
              <li>
                <a
                  href={
                    sessionStorage.getItem('admin') === "true"
                      ? "/helloadmin"
                      : sessionStorage.getItem('studentPresence') === "true"
                        ? "/hellostudent"
                        : (sessionStorage.getItem('studentPresence') === "false") || (sessionStorage.getItem('admin') === "false") ? '/profile'
                        : '/profile'
                  }
                  className="xl:text-xl block py-2 px-4 text-white rounded-lg hover:bg-blue-900/40 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                >
                  Profile
                </a>

              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 0.3s ease;
      }
      `}</style>

    </>
  )
}
export default Header
