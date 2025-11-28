import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='overflow-x-auto flex item-center justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10'>
      <div className='h-full w-[300px] shrink-0 bg-gradient-to-r from-violet-500 to-purple-500 p-5 rounded-xl '>
        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded '> High</h3>
          <h4 className='text-sm'>01-01-2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, aliquid eos odio possimus modi tempore.</p>
      </div>
       <div className='h-full w-[300px] shrink-0 bg-gradient-to-r from-amber-500 to-pink-500 p-5 rounded-xl '>
        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded '> High</h3>
          <h4 className='text-sm'>01-01-2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, aliquid eos odio possimus modi tempore.</p>
      </div>
       <div className='h-full w-[300px] shrink-0 bg-gradient-to-r from-indigo-500 to-blue-500 p-5 rounded-xl '>
        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded '> High</h3>
          <h4 className='text-sm'>01-01-2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, aliquid eos odio possimus modi tempore.</p>
      </div>
       <div className='h-full w-[300px] shrink-0 bg-gradient-to-r from-green-500 to-teal-500 p-5 rounded-xl '>
        <div className='flex items-center justify-between'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded '> High</h3>
          <h4 className='text-sm'>01-01-2026</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, aliquid eos odio possimus modi tempore.</p>
      </div>
     
    </div>
  )
}

export default TaskList