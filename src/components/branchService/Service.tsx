import { Card } from '../shared/CardShare'
import { List } from 'lucide-react';
import ANSMap from "../../assets/images/mapBranch.png";

const branch = [
    {
        image: ANSMap,
        address: "ສາຂາໂພນສະຫວ່າງ (ນະຄອນຫຼວງວຽງຈັນ)",
        time: "23:59",
        status: "ເປີດບໍລິການ",
    },
    {
        image: ANSMap,
        address: "ສາຂາໜອງບອນ (ແຂວງຈຳປາສັກ)",
        time: "23:59",
        status: "ເປີດບໍລິການ",
    },
    {
        image: ANSMap,
        address: "ສາຂາບ້ານນາຄຳ (ແຂວງຄຳມ່ວນ)",
        time: "23:59",
        status: "ເປີດບໍລິການ",
    },
    {
        image: ANSMap,
        address: "ສາຂາຫ້ວຍຫຼວງ (ແຂວງຫຼວງພະບາງ)",
        time: "23:59",
        status: "ເປີດບໍລິການ",
    },
    {
        image: ANSMap,
        address: "ສາຂາບ້ານໂພນທັນ (ແຂວງສະຫວັນນະເຂດ)",
        time: "23:59",
        status: "ປິດຊົ່ວຄາວ",
    },
];
const Service = () => {
    return (
        <div className='pt-5'>
            <Card>
                <div className="p-5">
                    {/* title */}
                    <div className="flex  gap-2 items-center">
                        <span className='text-gray-400'><List /></span>
                        <span className='font-semibold text-2xl'>ຈຸດບໍລິການ</span>
                    </div>
                    <div className="flex flex-col w-full md:flex-wrap md:flex-row gap-15 py-5">
                        {branch.map((b, index) => (
                            <div key={index} className='w-full md:w-[20%] h-[300px]'>
                                <div className='overflow-hidden'>
                                    <img src={b.image} alt="..." className='rounded-md duration-300 hover:scale-110' />
                                </div>
                                <div>
                                    <div className='h-[80px] pt-5'>
                                        <span className='text-sm md:text-xl font-semibold'>{b.address}</span>
                                    </div>
                                    <div>
                                        <span className='font-semibold text-[12px] text-gray-500'>ເວລາປິດຮັບເຄື່ອງ: {b.time}</span>
                                    </div>
                                    <div>
                                        <span className='text-[12px] font-semibold text-green-400 flex justify-end items-end'>{b.status}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Service