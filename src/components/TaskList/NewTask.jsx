import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { updateTaskStatus } from './taskUtils'

const NewTask = ({data}) => {
    const [userData,setUserData]=useContext(AuthContext);
    
    const handleAcceptTask=()=>{
        const updatedData=updateTaskStatus(userData,data,'active')
        setUserData(updatedData)
        localStorage.setItem('employees', JSON.stringify(updatedData))
    }

    return (
        <div className='h-full flex-shrink-0 w-[300px] p-5 she bg-[#252525] border-2 border-indigo-900  rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-lg text-sm font-medium'>{data.taskCategory}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className="flex justify-between mt-4">
                <button onClick={handleAcceptTask} className='w-full bg-green-500 py-1 px-2 text-sm rounded-sm'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask
