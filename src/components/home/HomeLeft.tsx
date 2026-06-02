import { Card } from '../shared/CardShare'

import { useEffect, useState } from "react";

import hero1 from "../../assets/ads/sider-hero1.jpeg";
import hero2 from "../../assets/ads/sider-hero2.jpg";
import hero3 from "../../assets/ads/sider-hero3.jpg";
import hero4 from "../../assets/ads/sider-hero4.jpg";
import shopThL from "../../assets/ads/ads-shop.jpg";
import waranty from "../../assets/images/waranty.jpg"
import { Link } from 'react-router';

const images = [hero1, hero2, hero3, hero4];
const HomeLeft = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='flex flex-col gap-5'>
            <div>
                <p className="font-semibold text-2xl">ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ ອານຸສິດ ໂລຈິສຕິກ</p>
            </div>

            {/* carousal */}
            <div>
                <Card>
                    <div className="w-full md:w-[600px] md:h-[300px] flex justify-center items-center mx-auto">
                        <div className="relative w-[300px] h-[100px] md:w-[5500px] md:h-[250px] overflow-hidden rounded-xl">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt="..."
                                    className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-1000
            ${current === index ? "opacity-100" : "opacity-0"}
          `}
                                />
                            ))}
                        </div>
                    </div>
                </Card>
            </div>

            {/* Information */}

            <div>
                <div className='flex justify-between'>
                    <div>
                        <span className='font-bold text-2xl'>ກິດຈະກຳ ແລະ </span>
                        <span className="font-bold text-2xl text-red-500">ຂ່າວສານ</span>
                    </div>
                    <div>
                        <Link to=""><span className='text-gray-600 font-bold duration-200 hover:text-red-500 hover:border-b'>ເພີ່ມເຕີມ</span></Link>
                    </div>
                </div>
                <div className="flex gap-10 pt-5">
                    <div className='rounded-lg w-[300px] h-[380px] overflow-hidden'>
                        <img src={waranty} alt="shop online"
                            className='rounded-lg transition-transform duration-300 hover:scale-110 w-full h-[300px]' />
                        <div className='pt-5'>
                            <span className='text-xl font-bold hover:text-red-500'>ການປະກັນພັດສະດຸ</span>
                        </div>
                    </div>
                    <div className='rounded-lg w-[300px] h-[380px] overflow-hidden'>
                        <img src={shopThL} alt="shop online"
                            className='rounded-lg transition-transform duration-300 hover:scale-110 w-full h-[300px]' />
                        <div className='pt-5'>
                            <span className='text-xl font-bold hover:text-red-500'>ໄທ-ລາວ ຮັບສັ່ງເຄື່ອງ ແລະ ເກັບປາຍທາງ COD</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeLeft