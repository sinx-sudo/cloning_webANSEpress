import React from 'react'
import * as motion from "motion/react-client"
import waranty from "../../assets/images/waranty.jpg"
import ansShop from "../../assets/ads/ads-shop.jpg"
import { Card } from '../shared/CardShare'
import { RefreshCcw, User } from 'lucide-react'

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
            <div className='relative group'>
              <img
                src={waranty}
                alt="shopOnline"
                className="w-[150px] h-[150px] md:w-[300px] md:h-[350px] 
              rounded-md object-cover relative transition-all duration-300 group-hover:scale-110 overflow-hidden"
              />
              {/* <div className='bg-gradient-to-t from-black/50 absolute top-0 w-[300px] h-[300px]'>
              </div> */}
              <div className='absolute top-70 flex flex-col px-5 
              transition-all duration-300 group-hover:translate-y-2 '>
                <span className='text-white bg-green-600 rounded-2xl px-5 py-1'>ການແຈ້ງເຕືອນPop Up ຢູ່ແອັບ</span>
                <span className='text-xl font-semibold text-gray-400'>
                  ການປະກັນພັດສະດຸ
                </span>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className="ralative group">
              <img
                src={ansShop}
                alt="shopOnline"
                className="w-[150px] h-[150px] md:w-[300px] md:h-[350px] 
              rounded-md object-cover relative transition-all duration-300 group-hover:scale-110 overflow-hidden"
              />
              <div className='absolute top-90 flex flex-col px-5 transition-all duration-300 group-hover:translate-y-2'>
                <span className='text-white bg-green-600 rounded-2xl px-5 py-1'>ການແຈ້ງເຕືອນPop Up ຢູ່ແອັບ</span>
                <span className='text-xl font-semibold text-gray-400'>
                  ໄທ-ລາວຮັບສັ່ງເຄື່ອງ <br />ແລະ ເກັບປາຍທາງ COD
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

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
        <Card>
          <div className="flex flex-col gap-5">
            <div className='p-5'>
              <img src={ansShop} alt="..." className='max-w-full min-h-screen md:object-cover' />
            </div>
            <div className='flex flex-col gap-10'>
              <span className='text-2xl font-bold'>ການປະກັນພັດສະດຸ</span>
              {/* line */}
              <div className='border border-b-gray-200 opacity-20 mx-5' />
              <div>
                <p className="font-semibold text-[12px] text-gray-500 p-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque vel consequatur odio dolore reprehenderit illo, facere odit totam magni?
                </p>
              </div>

              {/* line */}
              <div className='border border-b-gray-200 opacity-20 mx-5' />
              <div className="flex gap-5 px-5 pb-5 cursor-pointer">
                <div>
                  <span className='font-bold text-gray-500 text-[12px] flex gap-1'>
                    <RefreshCcw color="#9E9E9E" size={16} />
                    ໂພສເມື່ອ: 2026-05-10 14:22:25
                  </span>
                </div>
                <div>
                  <span className='font-bold text-gray-500 text-[12px] flex gap-1'>
                    <User color="#9E9E9E" size={16} />
                    ໂພສໂດຍ: margeting@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

export default Information