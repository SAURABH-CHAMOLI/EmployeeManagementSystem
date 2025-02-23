import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider';


const AllTask = () => {
    const [userData] = useContext(AuthContext);
    return (
        <div id='allTask' className="bg-[#1c1c1c] p-5 mt-5 rounded">
            <div className='flex justify-between mb-2 rounded bg-gray-600 py-2 px-4'>
                <h2 className='w-1/5 text-lg '>EmployeeName</h2>
                <h3 className='w-1/5 text-lg '>New Task</h3>
                <h5 className='w-1/5 text-lg '>Active Task</h5>
                <h5 className='w-1/5 text-lg '>Completed</h5>
                <h5 className='w-1/5 text-lg '>Failed</h5>
            </div>

            <div>
                {userData.map((ele, idx) => {
                    return <div key={idx} className='flex justify-between mb-2 rounded py-2 px-4'>
                        <h2 className='w-1/5 text-lg '>{ele.firstName}</h2>
                        <h3 className='w-1/5 text-lg font-medium !text-blue-600'>{ele.taskNumber.newTask}</h3>
                        <h5 className='w-1/5 text-lg font-medium !text-yellow-600'>{ele.taskNumber.active}</h5>
                        <h5 className='w-1/5 text-lg font-medium !text-green-600'>{ele.taskNumber.completed}</h5>
                        <h5 className='w-1/5 text-lg font-medium !text-red-500'>{ele.taskNumber.failed}</h5>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask
