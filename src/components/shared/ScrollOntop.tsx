import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        // visible && (
        //     <button
        //         onClick={scrollToTop}
        //         className="fixed bottom-5 right-5 bg-red-500 text-white px-1 pt-1 pb-5 rounded-full shadow-lg hover:bg-red-600 text-start"
        //     >
        //         <ArrowUp size={16} />
        //     </button>
        // )
        <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-red-500 text-white px-1 pt-1 pb-5 rounded-full shadow-lg hover:bg-red-600"
        >
          <ArrowUp/>
        </motion.button>
      )}
    </AnimatePresence>
    );
}