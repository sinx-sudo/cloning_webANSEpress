import React from 'react'
interface cardPorop{
    children: React.ReactNode
}
export const Card = ({children}:cardPorop) => {
  return (
    <div className='rounded-2xl bg-white'>
        {children}
    </div>
  )
}
