import { Card } from "../shared/CardShare";
import Map from "../../assets/images/mapBranch.png";
import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";

const products = [
  {
    name: "ເອກະສານດ່ວນ",
    price: "5,000",
  },
  {
    name: "ພັດສະດຸຂະໜາດນ້ອຍ",
    price: "12,000",
  },
  {
    name: "ພັດສະດຸຂະໜາດກາງ",
    price: "25,000",
  },
  {
    name: "ພັດສະດຸຂະໜາດໃຫຍ່",
    price: "40,000",
  },
  {
    name: "ເຄື່ອງໃຊ້ໄຟຟ້າ",
    price: "60,000",
  },
];
const HomeRight = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-5">

        <div className="flex flex-col gap-5">
          <div>
            <p className="font-semibold text-2xl">ລາຄາພັດສະດຸພິເສດ</p>
          </div>
          <div>
            <Card>
              <div className="pb-5 py-2">
                {/* text slider */}
                <div className="h-10 overflow-hidden mb-10 pb-10">
                  <div
                    className="transition-transform duration-500"
                    style={{
                      transform: `translateY(-${current * 40}px)`,
                    }}
                  >
                    {products.map((text, index) => (
                      <div
                        key={index}
                        className="h-10 flex justify-between items-center"
                      >
                        <div className="text-red-400">
                          {text.name}
                        </div>
                        <div className="text-green-400">
                          {text.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* table list */}
                <div>
                  <table className="min-w-full overflow-hidden p-5 border border-gray-300">
                    <thead className="bg-red-400">
                      <tr>
                        <th className="font-bold text-md text-white border border-gray-300 p-1">#</th>
                        <th className="font-bold text-md text-white text-start border border-gray-300 p-1">ລາຍການ</th>
                        <th className="font-bold text-md text-white text-end border border-gray-300 p-1">ລາຄາ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((p,index)=>(
                        <tr key={index}>
                        <td className="border border-gray-300 text-center p-1">{index+1}</td>
                        <td className="border border-gray-300 text-red-400 p-1">{p.name}</td>
                        <td className="border border-gray-300 text-end text-green-400 p-1">{p.price}</td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </div>
        </div>


        {/* New branch */}
        <div className='flex flex-col gap-2'>
          <div>
            <p className="font-semibold text-2xl">ສາຂາເປີດໃໝ່</p>
          </div>
          <div>
            <Card>
              <div className="flex gap-2 p-2 w-[250px] h-[125px]">
                <div className="w-[200px] h-[200px] overflow-hidden ">
                  <img src={Map} alt="map branch" className="rounded-lg transition-transform duration-300 hover:scale-110" />
                </div>
                <div className="flex flex-col gap-1">
                  <div><span className="font-bold text-md">ສາຂາ ສີໄຄທົ່ງ</span></div>
                  <div>
                    <p className="text-gray-600 font-bold text-[12px]">
                      ສາຂາ ສີໄຄທົ່ງ ເມືອງສີໂຄດຕະບອງ ນະຄອນຫຼວງວຽງຈັນ ເຈົ້າຂອງສາຂາຊື່:xxxxxxx, ເບີໂທ:xxxxxxx
                    </p>
                  </div>
                  <hr />
                  <div><span className="text-gray-600 font-bold text-[12px]">
                    ໂພສເມື່ອ 2026-6-16 12:02:15</span></div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* more */}

        <div 
        className="flex gap-1 rounded-md bg-red-400 opacity-80 py-5 text-white items-center justify-center
        duration-300 hover:translate-y-0.5 hover:opacity-100">
            <span>ເພີ່ມເຕີມ</span> <MoveRight />
        </div>


      </div>
    </>
  )
}

export default HomeRight
