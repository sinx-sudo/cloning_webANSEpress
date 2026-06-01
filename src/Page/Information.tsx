import React from 'react'
import * as motion from "motion/react-client"
import waranty from "../assets/images/waranty.jpg"
import ansShop from "../assets/ads/ads-shop.jpg"
const Information = () => {

  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
        className="overflow-hidden pt-10"
      >
        <div className="flex gap-10 justify-center items-center">
          <div className='flex justify-center items-center'>
            <div>
            <img
              src={waranty}
              alt="shopOnline"
              className="w-[300px] h-[300px] rounded-md object-cover relative"
            />
            </div>
          </div>
          <div className=' flex justify-center items-center'>
            <img
              src={ansShop}
              alt="shopOnline"
              className="w-[300px] h-[300px] rounded-md object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>

  )
}

export default Information