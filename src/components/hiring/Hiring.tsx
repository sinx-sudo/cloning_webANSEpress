import { useState } from 'react'
import { Link } from 'react-router'
import HiringForm from './HiringForm'

const Hiring = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div>
                    <span className="font-semibold text-2xl">ປະກາດຫຼ້າສຸດ</span>
                </div>
                <div>
                    <div className='w-[200px] py-5 rounded-md bg-red-400 duration-300 hover:bg-red-500 text-center'
                        onClick={() => setIsOpen(prev => !prev)}>
                        {/* <Link to="" className="text-white font-[12px]">ສະໝັກຕອນນີ້</Link> */}
                        <span className="text-white font-[12px]">ສະໝັກຕອນນີ້</span>
                    </div>
                </div>
            </div>
            <HiringForm
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    )
}

export default Hiring