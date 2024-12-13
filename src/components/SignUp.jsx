import React from 'react'
import Logo from "../assets/Icons/logo.png"
import ICLogo from "../assets/Icons/IC-logo.png"
import ChromeStore from "../assets/Icons/ChromeStore.png"
import AppStore from "../assets/Icons/AppStore.png"
import PlayStore from "../assets/Icons/PlayStore.png"

const SignUp = ({ onNext }) => {
    return (
        <div className='bg-custom-bg bg-cover bg-center h-fit flex justify-center items-center w-fit p-4 sm:p-10 rounded font-semibold'>
            <div className=" max-w-[280px] sm:max-w-[450px]">
                <p className='text-base sm:text-3xl'>Introducing</p>
                <p className='text-xl sm:text-4xl flex items-center gap-2 glow-text'>
                    RhinoSpider <img src={Logo} alt='RhinoSpider' className='h-8 sm:h-12' />
                </p>
                <p className='font-medium pt-2 sm:pt-3'>Get rewarded for your unused internet.</p>
                <p className='flex items-center pt-3 sm:pt-5 gap-2 sm:gap-4'>Powered by: <img src={ICLogo} className='h-6 w-auto' alt="IC" /></p>
                <button 
                    className='bg-white text-black text-sm sm:text-base p-2 sm:p-3 mt-2 sm:mt-5 rounded-full mx-auto w-full glow-button'
                    onClick={onNext}
                >
                    SIGN UP - JUST 3 CLICKS!
                </button>
                <div className="w-full flex items-center justify-between pt-3 sm:pt-5">
                    <img src={ChromeStore} className='h-6 sm:h-8 w-auto glow-button rounded' alt="" />
                    <div className="flex items-center gap-2 font-normal text-sm sm:text-base">
                        <img src={AppStore} className='w-4 sm:w-6 h-auto' alt="AppStore" />
                        <img src={PlayStore} className='w-3 sm:w-5 h-auto' alt="PlayStore" />
                        Coming Soon
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp