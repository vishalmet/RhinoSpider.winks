import React from 'react'
import Footer from './Footer';
import Logo from "../assets/Icons/logo.png"
import ChromeStore from "../assets/Icons/ChromeStore.png"


const Confirmation = ({onNext}) => {
    return (
        <div className='bg-custom-bg2 bg-cover bg-center h-fit w-fit p-4 sm:p-10 rounded font-semibold relative'>
            <div className="w-[200px] sm:w-[380px]">
                <img src={Logo} className=' w-24 h-auto absolute top-0 right-0' alt="RhinoSpider" />
                <p className='text-base sm:text-3xl'>Confirmation</p>
                <p className=' font-normal py-3 '>Download Desktop Chrome Extension.</p>
                <img src={ChromeStore} className=' h-16 w-auto glow-button rounded-xl mx-auto' alt="ChromeStore" />
                <button
                    className='bg-white text-black text-sm sm:text-base p-2 sm:p-3 mt-2 sm:mt-5 rounded-full mx-auto w-full glow-button'
                    onClick={onNext}
                >
                    ADD TO CHROME
                </button>
                <Footer />
            </div>
        </div>
    );
  };

export default Confirmation