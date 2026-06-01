import React from 'react'
import { Card } from '../components/shared/CardShare'
import dayjs from 'dayjs'
import { BellRing, ChevronRight, CircleCheckBig } from 'lucide-react'
import { Link } from 'react-router';
import QrDownloadApp from "../assets/logo/QrApp.png";
const SidebarLeft = () => {
    return (
        <div className='ml-5 left-5 w-56 z-50 mb-10'>
            <div className='flex flex-col gap-10 mt-10'>
                <div>
                    {/* dateTime */}
                    <Card >
                        <div className='w-[200px] h-[150px] flex justify-center items-center'>
                            <div className='flex gap-5'>
                                <div className='flex flex-col'>
                                    <div className="font-semibold text-gray-600">{dayjs().format("ddd")}</div>
                                    <div className="font-bold text-2xl text-gray-800">{dayjs().format("DD")}</div>
                                    <div className="font-semibold text-gray-600">{dayjs().format("MMM")}</div>
                                </div>
                                <div className='flex justify-center items-center font-bold text-3xl text-red-500'>
                                    {dayjs().format("YYYY")}
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    {/* notification */}
                    <Card >
                        <div className='w-[200px] h-[120px] p-5'>
                            <div>
                                <div className='text-red-500 cursor-pointer animate-bounce'>
                                    <BellRing size={18} strokeWidth={2.25} />
                                </div>
                                <div className='flex gap-2 text-gray-600 text-[12px] justify-center'>
                                    <Link to="#">
                                        <ChevronRight size={16} />
                                    </Link>
                                    <p className='font-semibold'>ປະເພດແຈ້ງເຕືອນ PopUp ຢູ່ແອັບ</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    {/* Service */}
                    <Card >
                        <div className='w-[200px] h-[200px] p-5'>
                            <div>
                                <div className='cursor-pointer'>
                                    <span className="text-xl font-bold">ການບໍລິການ</span>
                                </div>
                                <div className='flex flex-col gap-2 py-5'>
                                    <Link to="#" target="_blank"
                                        rel="noopener noreferrer"
                                        className='flex gap-2 text-gray-600 text-[14px]'>
                                        <CircleCheckBig size={16} />
                                        <p className='font-bold'>ຮຽກຮ້ອງບັນຫາ</p>
                                    </Link>
                                    <Link to="#" target="_blank"
                                        rel="noopener noreferrer"
                                        className='flex gap-2 text-gray-600 text-[14px]'>
                                        <CircleCheckBig size={16} />
                                        <p className='font-bold'>ສະໝັກລົດຮ່ວມ</p>
                                    </Link>
                                    <Link to="#" target="_blank"
                                        rel="noopener noreferrer"
                                        className='flex gap-2 text-gray-600 text-[14px]'>
                                        <CircleCheckBig size={16} />
                                        <p className='font-bold'>ສະໝັກວຽກ</p>
                                    </Link>
                                    <Link to="#" target="_blank"
                                        rel="noopener noreferrer"
                                        className='flex gap-2 text-gray-600 text-[14px]'>
                                        <CircleCheckBig size={16} />
                                        <p className='font-bold'>ເທັກໂນໂລຢີ</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    {/* Featback */}
                    <Card >
                        <div className='w-[200px] h-[150px] p-5'>
                            <div>
                                <div className='py-5 flex flex-col gap-2'>
                                    <Link to="#" target="_blank"
                                        rel="noopener noreferrer"
                                        className='flex gap-2 text-gray-600 text-[14px]'>
                                        <CircleCheckBig size={16} />
                                        <p className='font-bold'>ຮຽກຮ້ອງບັນຫາ</p>
                                    </Link>
                                    <Link to="#" target="_blank"
                                        rel="noopener noreferrer"
                                        className='flex gap-2 text-gray-600 text-[14px]'>
                                        <CircleCheckBig size={16} />
                                        <p className='font-bold'>ສະໝັກລົດຮ່ວມ</p>
                                    </Link>
                                    <Link to="#" target="_blank"
                                        rel="noopener noreferrer"
                                        className='flex gap-2 text-gray-600 text-[14px]'>
                                        <CircleCheckBig size={16} />
                                        <p className='font-bold'>ສະໝັກວຽກ</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    {/* Download App */}
                    <Card >
                        <div className='w-[200px] h-[280px] p-5'>
                            <div className='cursor-pointer flex justify-center items-center'>
                                <span className="text-xl font-bold">ດາວໂຫຼດແອັບ</span>
                            </div>
                            <div className=''>
                                <img src={QrDownloadApp} alt="QrCode for Download App Anousith" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default SidebarLeft