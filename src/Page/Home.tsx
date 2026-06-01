import React from 'react'
import HomeLeft from '../components/home/HomeLeft'
import HomeRight from '../components/home/HomeRight'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row gap-10'>
      <div className='w-[100%] md:w-[70%]'>
        <HomeLeft/>
      </div>
      <div className='w-[100%] md:w-[30%]'>
        <HomeRight/>
      </div>
    </div>
  )
}

export default Home