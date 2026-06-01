import React from 'react'
import { Link, useLocation } from 'react-router'
import NextdayLogo from "../assets/logo/logo_next_day.png"
import { Search } from 'lucide-react'
const Navbar = () => {
    const locationPath = useLocation();
    return (
        <div className='py-2 px-5 flex justify-around bg-white z-50 relative'>
            <div className="section w-full flex gap-10">
                {/* logo */}
                <div>
                    <img src={NextdayLogo} alt="Anousit Logistice Logo" className='w-[180px]' />
                </div>
                {/* menu */}
                <div className="flex gap-10 justify-center items-center font-semibold text-gray-600">
                    <div className=
                        {`hover:text-red-500 hover:border-b-2 duration-100 border-red-500 h-full flex justify-center items-center
                            ${location.pathname === "/"
                                ? "text-red-500 border-b-2 border-red-500"
                                : ""
                            }`}>
                    <Link to="/">ໜ້າຫຼັກ</Link>
                </div>
                <div className=
                 {`hover:text-red-500 hover:border-b-2 duration-100 border-red-500 h-full flex justify-center items-center
                            ${location.pathname === "/new"
                                ? "text-red-500 border-b-2 border-red-500"
                                : ""
                            }`}>
                    <Link to="/new">ກິດຈະກຳ ແລະ ຂ່າວສານ</Link>
                </div>
                <div className=
                 {`hover:text-red-500 hover:border-b-2 duration-100 border-red-500 h-full flex justify-center items-center
                            ${location.pathname === "/notices"
                                ? "text-red-500 border-b-2 border-red-500"
                                : ""
                            }`}>
                    <Link to="/notices">ແຈ້ງການ</Link>
                </div>
                <div className=
                 {`hover:text-red-500 hover:border-b-2 duration-100 border-red-500 h-full flex justify-center items-center
                            ${location.pathname === "/hiring"
                                ? "text-red-500 border-b-2 border-red-500"
                                : ""
                            }`}>
                    <Link to="/hiring">ສະໝັກວຽກ</Link>
                </div>
                <div className=
                 {`hover:text-red-500 hover:border-b-2 duration-100 border-red-500 h-full flex justify-center items-center
                            ${location.pathname === "/service"
                                ? "text-red-500 border-b-2 border-red-500"
                                : ""
                            }`}>
                    <Link to="/service">ສາຂາບໍລິການ</Link>
                </div>
                <div className=
                 {`hover:text-red-500 hover:border-b-2 duration-100 border-red-500 h-full flex justify-center items-center
                            ${location.pathname === "/delivery"
                                ? "text-red-500 border-b-2 border-red-500"
                                : ""
                            }`}>
                    <Link to="/delivery">ເງື່ອນໄຂການສົ່ງ</Link>
                </div>
            </div>
        </div>

            {/* search form */ }

    <div className='flex justify-center items-center relative'>
        <input type="text" placeholder='ກວດສອບພັດສະດຸຂອງທ່ານ'
            className="bg-[#F6F7F8] items-center rounded-2xl text-[12px] text-gray-800 py-2 px-5 w-[250px] focus:outline-0" />
        <div className='absolute right-[10px]'>
            <Search className=' text-gray-800' size={16} />
        </div>
    </div>
        </div >
    )
}

export default Navbar