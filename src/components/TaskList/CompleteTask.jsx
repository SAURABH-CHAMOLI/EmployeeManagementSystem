import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className='h-full flex-shrink-0 w-[300px] p-5 she bg-[#252525] border-2 border-green-900 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 bg-green-900/50 text-green-300 rounded-lg text-sm font-medium'>{data.taskCategory}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='mt-2'>
                <button className='w-full bg-green-500 py-1 px-2 text-sm rounded-sm'>Completed</button>
            </div>
        </div>
    )
}

export default CompleteTask
