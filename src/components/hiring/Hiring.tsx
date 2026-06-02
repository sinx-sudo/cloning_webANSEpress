import React from 'react'
import { Link } from 'react-router'

const Hiring = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-between items-center'>
        <div>
            <span className="font-semibold text-2xl">ປະກາດຫຼ້າສຸດ</span>
        </div>
        <div>
            <div className='w-[200px] py-5 rounded-md bg-red-400 duration-300 hover:bg-red-500 text-center'>
                <Link to="" className="text-white font-[12px]">ສະໝັກຕອນນີ້</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hiring