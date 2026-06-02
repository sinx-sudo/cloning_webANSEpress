import { Outlet } from 'react-router'
import { useState, useEffect } from "react";
import Navbar from './Navbar'
import SidebarLeft from './SidebarLeft'
import Preloader from '../components/shared/Preloader';
import ScrollOntop from "../components/shared/ScrollOntop";
const RootLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("RootLayout mounted");

    const timer = setTimeout(() => {
      console.log("Loading false");
      setLoading(false);
    }, 1500);

    return () => {
      console.log("RootLayout unmounted");
      clearTimeout(timer);
    };
  }, []);

  return (
    <>{loading ? <Preloader /> :
      <div>
        <div className="fixed top-0 left-0 right-0 z-50"><Navbar /></div>
        <div className="flex base-body pt-15 ">
          <div className='hidden md:block'><SidebarLeft /></div>
          <div className="overflow-hidden p-5 w-[100%]">
            <Outlet />
            <div>
              {/* Button scroll on button right */}
              <ScrollOntop/>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default RootLayout