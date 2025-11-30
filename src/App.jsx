import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useState } from 'react'

const App = () => {

  const [user, setuser] = useState(null)

  const handleLogin = (email,passwords) => {
    if(email == 'admin@me.com' && password == '123'){
      setuser('admin')
    }else if(email == 'user@me.com' && passwords == '123'){
      setuser('employee')
    }
    else{
      alert("invalid Credentials")
    }
  }

  return (
   <>
   {!user ? <Login handleLogin={handleLogin} /> : ''}
   {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
   </>
  )
}

export default App
