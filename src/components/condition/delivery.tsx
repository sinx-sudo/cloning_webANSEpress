import React from 'react'
import { Card } from '../shared/CardShare'

const delivery = () => {
    return (
        <div className='pt-5'>
            <Card>
                <div className='p-5'>
                    {/* title */}
                    <div className='flex flex-col justify-center items-center font-semibold pb-5'>
                        <div>ບໍລິສັດ ອານຸສິດ ໂລຈີສຕິກ ຈຳກັດ</div>
                        <div>ຂໍ້ກຳນົດ ແລະ ເງື່ອນໄຂໃນການສົ່ງ</div>
                    </div>
                    <hr className='text-gray-400' />

                    {/* content */}
                    <div className='flex flex-col gap-5 pt-5'>
                        <div className='font-semibold text-2xl'>
                            <p>ສິ່ງທີ່ທ່ານຄວນຮູ້ກ່ອນໃຊ້ບໍລິການ:</p>
                        </div>
                        <hr className='text-gray-400' />
                        <div className='font-semibold text-md text-green-600'>
                            <p>ຄ່າບໍລິການເລີ່ມຕົ້ນ6,500 ກີບ ສຳລັບສົ່ງຕ່າງແຂວງ ສົ່ງມື້ນີ້ເຖິງມື້ອື່ນ:</p>
                        </div>
                        <hr className='text-gray-400' />
                    </div>

                </div>
            </Card>
        </div>
    )
}

export default delivery