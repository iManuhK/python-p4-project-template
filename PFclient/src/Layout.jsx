import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from './pages/context/UserContext';

export default function Layout() 
{

   const {currentUser, logout} = useContext(UserContext)

  return (
    <div>

<nav className="navbar navbar-expand-lg bg-light pt-4">
  <div className="container">
    {/* <a className="navbar-brand " href="#"><h3>PesaFresh</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
   <img src="PFlogo.png" alt="PesaFresh" />
    <div className="collapse navbar-collapse" id="navbarNav">
      
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active fs-5" >Home</Link>
        </li>
        {
          currentUser ?
          <>
           <li className="nav-item">
              <Link to="/dashboard" className="nav-link active fs-5">Dashboard</Link>
            </li>
            <li className="nav-item">
                <p onClick={()=>logout()} class="nav-link active fs-5">Logout</p>
            </li>
        </>
          :
          <>
          {/* <li className="nav-item">
            <Link to="/register" className="nav-link active fs-5">Register</Link>
          </li> */}
          <li className="nav-item">
            <Link to="/login" className="nav-link active fs-5">Sign In</Link>
          </li>
          </>
        }
      </ul>
    </div>
  </div>
</nav>
    
  <div className='bg-gray-100 text-lg container mx-auto min-h-[90vh]'>
    <Outlet />
    {/* render current route selected */}
  </div>
   
{/* <div>
  FOOTER
</div> */}


    </div>
  )
}
