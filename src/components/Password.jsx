import React from 'react'
import Footer from './Footer';
import Logo from "../assets/Icons/logo.png"
import PasswordIcon from "../assets/Icons/password.png"

const Password = ({ onNext }) => {
    return (
        <div className='bg-custom-bg2 bg-cover bg-center h-fit w-fit p-4 sm:p-10 rounded font-semibold relative'>
        <div className="w-[200px] sm:w-[380px]">
            <img src={Logo} className=' w-24 h-auto absolute top-0 right-0' alt="RhinoSpider" />
            <p className='text-base sm:text-3xl'>Password</p>
            <div className=' border-2 border-white rounded-[20px] p-3 flex items-center gap-2 glow-container font-medium mt-3'>
                <img src={PasswordIcon} className=' w-5 h-auto' alt="Password" />
                <input
                    type="password"
                    placeholder='Create New Password'
                    className='text-xl bg-transparent outline-none w-full'
                />
            </div>
            <div className=' border-2 border-white rounded-[20px] p-3 flex items-center gap-2 glow-container font-medium mt-3'>
                <img src={PasswordIcon} className=' w-5 h-auto' alt="Password" />
                <input
                    type="password"
                    placeholder='Confirm Password'
                    className='text-xl bg-transparent outline-none w-full'
                />
            </div>
            <button
                className='bg-white text-black text-sm sm:text-base p-2 sm:p-3 mt-2 sm:mt-5 rounded-full mx-auto w-full glow-button'
                onClick={onNext}
            >
                Next
            </button>
            <Footer />
        </div>
    </div>
    );
  };

export default Password