import React from 'react'
import Logo from "../assets/Icons/logo.png"
import ICLogo from "../assets/Icons/IC-logo.png"
import ChromeStore from "../assets/Icons/ChromeStore.png"
import AppStore from "../assets/Icons/AppStore.png"
import PlayStore from "../assets/Icons/PlayStore.png"

const SignUp = ({ onNext }) => {
    return (
        <div className='bg-custom-bg bg-cover bg-center min-h-screen flex justify-center items-center w-screen p-6 rounded font-semibold'>
            <div className=" max-w-[300px] sm:max-w-[450px]">
                <p className='text-3xl'>Introducing</p>
                <p className='text-3xl flex items-center gap-4 glow-text'>
                    RhinoSpider <img src={Logo} className='h-12' />
                </p>
                <p className='font-medium pt-3'>Get rewarded for your unused internet.</p>
                <p className='flex items-center pt-5 gap-4'>Powered by: <img src={ICLogo} className='h-6 w-auto' alt="" /></p>
                <button 
                    className='bg-white text-black p-3 mt-5 rounded-full w-[300px] sm-[400px] glow-button'
                    onClick={onNext}
                >
                    SIGN UP - JUST 3 CLICKS!
                </button>
                <div className="max-w-[300px] sm:max-w-[400px] flex items-center justify-between pt-5">
                    <img src={ChromeStore} className='h-8 w-auto glow-button rounded' alt="" />
                    <div className="flex items-center gap-2 font-normal">
                        <img src={AppStore} className='w-6 h-auto' alt="" />
                        <img src={PlayStore} className='w-5 h-auto' alt="" />
                        Coming Soon
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp