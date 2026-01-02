import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen '>

        <div className='w-[45%] rounded-xl py-6 px-9 bg-gradient-to-r from-rose-400 to-red-500'>
            <h2 className='text-3xl font-semibold'> {data.taskCounts.newTask} </h2>
            <h3 className='text-xl font font-medium'>New Task </h3>
        </div>

        <div className='w-[45%] rounded-xl py-6 px-9 bg-gradient-to-r from-indigo-400 to-cyan-400'>
            <h2 className='text-3xl font-semibold'> {data.taskCounts.completed} </h2>
            <h3 className='text-xl font font-medium'>Completed Task </h3>
        </div>

        <div className='w-[45%] rounded-xl py-6 px-9 bg-gradient-to-r from-teal-200 to-teal-500'>
            <h2 className='text-3xl font-semibold'> {data.taskCounts.active} </h2>
            <h3 className='text-xl font font-medium'>Accepted Task </h3>
        </div>

        <div className='w-[45%] rounded-xl py-6 px-9 bg-gradient-to-r from-amber-200 to-yellow-400'>
            <h2 className='text-3xl font-semibold'> {data.taskCounts.failed} </h2>
            <h3 className='text-xl font font-medium'>Failed Task </h3>
        </div>
    </div>
  )
}

export default TaskListNumbers