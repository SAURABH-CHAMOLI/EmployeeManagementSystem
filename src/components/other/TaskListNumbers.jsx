import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex screen mt-10 justify-between overflow-x-auto gap-5'>
      <div className='rounded-xl py-6 px-9 p-10 w-[45%] bg-blue-400'>
        <h2 className='text-2xl font-semibold'>{data.taskNumber.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl py-6 px-9 p-10 w-[45%] bg-green-400'>
        <h2 className='text-2xl font-semibold'>{data.taskNumber.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='rounded-xl py-6 px-9 p-10 w-[45%] bg-yellow-300'>
        <h2 className='text-2xl text-black font-semibold'>{data.taskNumber.active}</h2>
        <h3 className='text-xl font-medium text-black'>Active Task</h3>
      </div>
      <div className='rounded-xl py-6 px-9 p-10 w-[45%] bg-red-400'>
        <h2 className='text-2xl font-semibold'>{data.taskNumber.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
