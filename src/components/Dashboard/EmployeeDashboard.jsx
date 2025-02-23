import React, { useContext , useEffect } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = ({data,changeUser}) => {
  const [userData,setUserData]=useContext(AuthContext)  
  
  useEffect(() => {
    if (userData) {
      const updatedEmployee = userData.find(emp => emp.id === data.id)
      if (updatedEmployee) {
        const updatedData = { role: "employee", data: updatedEmployee }
        localStorage.setItem('loggedInUser', JSON.stringify(updatedData))
      }
    }
  }, [userData, data.id])

  const currentEmployeeData = userData?.find(emp => emp.id === data.id) || data
 
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={changeUser} firstName={currentEmployeeData.firstName}/>
      <TaskListNumbers data={currentEmployeeData}/>
      <TaskList data={currentEmployeeData}/>
    </div>
  )
}

export default EmployeeDashboard
