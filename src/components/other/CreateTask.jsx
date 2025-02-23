import React, { useState , useEffect, useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [taskTitle,setTaskTitle]=useState('');
    const [taskDescription,setTaskDescription]=useState('');
    const [taskDate,setTaskDate]=useState('');
    const [assignTo,setAssignTo]=useState('');
    const [taskCategory,setTaskCategory]=useState('');

    const [userData,setUserData]=useContext(AuthContext)

    const submitHandler=(e)=>{
        e.preventDefault();
       
        const task={taskTitle,taskDescription,taskDate,taskCategory,active:false,newTask:true,completed:false,failed:false};
        

        // Correctly update the state by creating a new array
    const updatedUsers = userData.map((employee) => {
        if (employee.firstName === assignTo) {
            return {
                ...employee,
                tasks: [...employee.tasks, task], // Create a new array instead of mutating
                taskNumber: {
                    ...employee.taskNumber,
                    newTask: employee.taskNumber.newTask + 1
                }
            };
        }
        return employee;
    });

    setUserData(updatedUsers); // Update state correctly

    localStorage.setItem("employees", JSON.stringify(updatedUsers));

        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('')
        setAssignTo('')
        setTaskCategory(''); 
    }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
                <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input value={taskTitle} onChange={(e)=> setTaskTitle(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design' required/>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input value={taskDate} onChange={(e)=> setTaskDate(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" required/>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                            <input value={assignTo} onChange={(e)=> setAssignTo(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' required/>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input value={taskCategory} onChange={(e)=> setTaskCategory(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design, Dev, etc' required/>
                        </div>
                    </div>
                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea value={taskDescription} onChange={(e)=> setTaskDescription(e.target.value)} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" required></textarea>
                        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>
                </form>
            </div>
  )
}

export default CreateTask
