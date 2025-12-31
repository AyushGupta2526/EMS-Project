import React, { useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider.jsx'

const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext);


  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
    }else if(authData && authData.employees.find((e)=>email == e.email && password == e.password)){
      setUser('employee')
    }
    else{
      alert("Invalid Credentials")
    }
  }

  const data = useContext(AuthContext);

  return (
   <>
   {!user ? <Login handleLogin={handleLogin} /> : ''}
   {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
   </>
  )
}

export default App
