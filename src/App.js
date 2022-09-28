import React, { useEffect } from 'react'
import Home from './pages/Home'
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Customers from './pages/Customers';
import News from './pages/News';
import Employees from './pages/Employees';
import Orders from './pages/Orders';
 import SideBar from './components/SideBar';
import Login from './pages/Login';
import { useSelector } from "react-redux";
  
const App = () => {
  const user = useSelector(state => state.user)
  
  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />
  }
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  }, [user])

  return (
    <div className={`flex h-auto min-h-screen`}>
      {
        user && <div className=' w-[240px] min-w-max px-5 bg-secondary-dark-bg'>
       <SideBar/>
      </div>
      }
      
      <div className='grow-[1]  bg-[#030C40]'>
        <Routes>
          <Route path='/' element={
            <RequireAuth>
              <Home />
            </RequireAuth>

          } />
          <Route path="customers" element={
            <RequireAuth>
              <Customers />
            </RequireAuth>
          } />
          <Route path='news' element={
            <RequireAuth>
              <News />
            </RequireAuth>
          } />
          <Route path="employees" element={
            <RequireAuth>
              <Employees />
            </RequireAuth>
          } />
          <Route path="orders" element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          } />
         
          <Route path='login' element={
            <Login />
          } />
          </Routes>
      </div>
    </div>
  )
}

export default App