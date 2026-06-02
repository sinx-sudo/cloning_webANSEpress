import condition1 from "../../assets/images/condition-delivery.jpg";
import condition2 from "../../assets/images/condition-delivery2.jpg";
import condition3 from "../../assets/images/condition-delivery3.jpg";
import condition4 from "../../assets/images/condition-delivery4.jpg";
import { useState } from "react";
import ANScenter from "../../assets/images/rmbgCener.png";

const cards = [
    {
        img:ANScenter ,
        title: "O",
        description: "ສູນນາຊາຍທອງ",
    },
    {
        img:  ANScenter ,
        title: "VC",
        description: "ສູນແຂວງວຽງຈັນ",
    },
    {
        img: ANScenter ,
        title: "BK",
        description: "ສູນຄັດແຍກພິເສດ",
    },
    {
        img: ANScenter ,
        title: "BK",
        description: "ສູນຄັດແຍກໂຊກໃຫຍ່",
    },
    {
        img: ANScenter ,
        title: "VC",
        description: "ສູນແຂວງບໍ່ແກ້ວ",
    },
];
const HomeFooter = () => {
    const [active, setActive] = useState(0);
    return (
        <>
            <div>
                <div>
                    <p className="font-bold text-2xl">
                        ພັດສະດຸ
                        <span className="font-bold text-2xl text-red-500">ຕ້ອງຫ້າມ</span>
                    </p>
                </div>
                <div className="flex flex-col gap-1 md:flex-row md:gap-2 py-10">
                    <div>
                        <img src={condition1} alt="delivery condition"
                            className="w-[250px] h-[350px]" />
                    </div>
                    <div>
                        <img src={condition3} alt="delivery condition"
                            className="w-[250px] h-[350px]" />
                    </div>
                    <div>
                        <img src={condition2} alt="delivery condition"
                            className="w-[250px] h-[350px]" />
                    </div>
                    <div>
                        <img src={condition4} alt="delivery condition"
                            className="w-[250px] h-[350px]" />
                    </div>
                </div>

                {/* center landmark */}
                <div>
                    <p className="font-bold text-2xl">
                        ສູນ
                        <span className="font-bold text-2xl text-red-500">ຄັດແຍກ</span>
                    </p>
                </div>

                <div className="w-full  mx-auto px-5 md:px-0">
                    {/* Dots */}
                    <div className="hidden md:flex justify-end gap-2 mb-4">
                        {cards.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(index)}
                                className={`h-3 w-3 rounded-full transition-all duration-300 cursor-pointer
                                    ${active === index
                                        ? "bg-red-500 w-8"
                                        : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />     
                        ))}
                    </div>

                    {/* Carousel */}
                    <div className="w-full">
                        <div
                            className="flex flex-col md:flex-row transition-transform duration-500"
                            style={{
                                transform: `translateX(-${active * 25}%)`,
                            }}
                        >
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className=" w-full md:w-1/4 shrink-0 px-5 pt-10">

                                    <div className="group relative rounded-xl overflow-hidden shadow-md
                                    bg-gradient-to-t from-gray-500 to-white duration-300 hover:bg-gradient-to-t hover:from-red-200 hover:to-gray-500">
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            className="w-full h-[250px] object-cover duration-300 group-hover:translate-y-5"
                                        />

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-5 md:left-0 p-4 text-white duration-300 group-hover:-translate-y-2">
                                            <h2 className="text-xl font-bold mb-2">
                                                {card.title}
                                            </h2>

                                            <p>
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeFooter