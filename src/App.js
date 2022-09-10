import React from 'react'
 import Home from './pages/Home'
import {
  Routes,
  Route,
} from "react-router-dom";
import Customers from './pages/Customers';
import Calender from './pages/Calender';
import News from './pages/News';
import Employees from './pages/Employees';
import Orders from './pages/Orders';
import ProjectManagment from './pages/ProjectManagment';
import SideBar from './components/SideBar';

const App = () => {
  return (
    <div className='flex h-auto min-h-screen'>
      <div className=' w-[240px] min-w-max px-5 bg-secondary-dark-bg'>
      <SideBar />
      </div>
      <div className='grow-[1]  bg-[#030C40]'>
      <Routes>
        <Route index element={<Home />} />
        <Route path="customers" element={<Customers />} />
        <Route path="calendar" element={<Calender />} />
        <Route path='news' element={<News />} />
        <Route path="employees" element={<Employees />} />
        <Route path="orders" element={<Orders />} />
        <Route path='projectmanagment' element={<ProjectManagment />} />
      </Routes>
      </div>
    </div>
  )
}

export default App