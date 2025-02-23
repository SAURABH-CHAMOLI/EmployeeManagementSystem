import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import TaskListNumbers from './components/other/TaskListNumbers'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
import { validateCredentials } from './utils/authUtils'

function App() {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if(loggedInUser) {
      const userData=JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, [])

  const handleLogin = (email, password) => {
    const result = validateCredentials(email, password, userData)
    
    if (result.isValid) {
      setUser(result.role)
      setLoggedInUserData(result.data)
      localStorage.setItem('loggedInUser', JSON.stringify({
        role: result.role,
        data: result.data
      }))
      return true
    }
    return false
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser} /> : user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null}
    </>
  )
}

export default App
