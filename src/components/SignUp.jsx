import React from 'react'
import { motion } from 'framer-motion'
import Logo from "../assets/Icons/logo.png"
import ICLogo from "../assets/Icons/IC-logo.png"
import ChromeStore from "../assets/Icons/ChromeStore.png"
import AppStore from "../assets/Icons/AppStore.png"
import PlayStore from "../assets/Icons/PlayStore.png"

const SignUp = ({ onNext }) => {
    // Handle keyboard events
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onNext();
        }
    };

    // Add event listener when component mounts
    React.useEffect(() => {
        document.addEventListener('keypress', handleKeyPress);

        // Cleanup listener when component unmounts
        return () => {
            document.removeEventListener('keypress', handleKeyPress);
        };
    }, [onNext]);

    return (
        <div className='bg-custom-bg bg-cover bg-center h-screen w-screen flex justify-center items-center p-4 sm:p-10 rounded font-semibold'>
            <div className="w-[220px] sm:w-[400px] mx-auto">
                <p className='text-base sm:text-4xl'>Introducing</p>
                <p className='text-xl sm:text-5xl flex items-center gap-2 glow-text'>
                    RhinoSpider <img src={Logo} alt='RhinoSpider' className='h-8 sm:h-12' />
                </p>
                <p className='text-xs sm:text-base font-medium pt-2 sm:pt-3'>Get rewarded for your unused internet.</p>
                <p className='flex items-center text-sm sm:text-base pt-3 sm:pt-5 gap-2 sm:gap-4'>Powered by: <img src={ICLogo} className='h-3 sm:h-6 w-auto' alt="IC" /></p>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className='bg-white text-black text-sm sm:text-base p-2 sm:p-3 mt-2 sm:mt-5 rounded-full mx-auto w-full glow-button'
                    onClick={onNext}
                >
                    SIGN UP - JUST 3 CLICKS!
                </motion.button>
                <div className="w-full flex items-center justify-between pt-3 sm:pt-5">
                    <img src={ChromeStore} className='h-6 sm:h-8 w-auto glow-button rounded' alt="" />
                    <div className="flex items-center gap-2 font-normal text-sm sm:text-base">
                        <img src={AppStore} className='w-4 sm:w-6 h-auto' alt="AppStore" />
                        <img src={PlayStore} className='w-3 sm:w-5 h-auto' alt="PlayStore" />
                        Coming Soon
                    </div>
                </div>
            <p className='font-medium text-center pt-1 sm:pt-5'>Powered by winks.fun</p>
            </div>
        </div>
    );
};

export default SignUp;