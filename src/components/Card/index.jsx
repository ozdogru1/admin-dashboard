import React from 'react'

const Card = ({title, body}) => {
  return (
    <div className='w-[350px] bg-white p-4 m-7 rounded drop-shadow-lg'>
    <div className='text-center uppercase border-b-2 border-indigo-300'>{title}</div>
    <div className='p-4'>{body}</div>
    </div>
   )
}

export default Card