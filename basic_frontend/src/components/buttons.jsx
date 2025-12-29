import React from 'react'

function Button({text, color}) {
  return (
        // <button className={`px-3 py-1 ${color} text-zinc-100 text-xs rounded m-2`}>{text}</button>
        <div className='w-52 bg-white rounded overflow-hidden '>
          <div className='w-full h-32 bg-sky-200'></div>
          <div className='w-full p-3'>
            <h3 className='text-xl font-semibold'>Harsh</h3>
            <h5 className='px-3 py-1 text-xs'>Profession</h5>
            <button className='px-3 py-1 text-xs  font-semibold rounded-md'>Add Friend</button>
          </div>
        </div>  
  )
}
export default Button