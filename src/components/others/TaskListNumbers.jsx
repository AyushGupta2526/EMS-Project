import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen '>
        <div className='w-[45%] rounded py-6 px-9 bg-gradient-to-r from-rose-400 to-red-500'>
            <h2 className='text-3xl font-semibold'> 0 </h2>
            <h3 className='text-xl font font-medium'>New Task </h3>
        </div>

        <div className='w-[45%] rounded py-6 px-9 bg-gradient-to-r from-indigo-400 to-cyan-400'>
            <h2 className='text-3xl font-semibold'> 0 </h2>
            <h3 className='text-xl font font-medium'>New Task </h3>
        </div>

        <div className='w-[45%] rounded py-6 px-9 bg-gradient-to-r from-teal-200 to-teal-500'>
            <h2 className='text-3xl font-semibold'> 0 </h2>
            <h3 className='text-xl font font-medium'>New Task </h3>
        </div>

        <div className='w-[45%] rounded py-6 px-9 bg-gradient-to-r from-amber-200 to-yellow-400'>
            <h2 className='text-3xl font-semibold'> 0 </h2>
            <h3 className='text-xl font font-medium'>New Task </h3>
        </div>
    </div>
  )
}

export default TaskListNumbers