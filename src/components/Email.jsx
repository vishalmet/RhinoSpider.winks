import React from 'react'
import Logo from "../assets/Icons/logo.png"
import Mail from "../assets/Icons/mail.png"
import Footer from './Footer';


const Email = ({ onNext }) => {
    return (
        <div className='bg-custom-bg2 bg-cover bg-center h-fit w-fit p-4 sm:p-10 rounded font-semibold relative'>
            <div className="w-[200px] sm:w-[380px]">
                <img src={Logo} className=' w-24 h-auto absolute top-0 right-0' alt="RhinoSpider" />
                <p className='text-base sm:text-3xl'>Email</p>
                <p className=' font-normal py-3 '>Please make sure your email address is correct so we can get in touch with you.</p>
                <div className=' border-2 border-white rounded-[20px] p-3 flex items-center gap-2 glow-container'>
                    <img src={Mail} className=' w-8 h-auto' alt="Mail" />
                    <input
                        type="email"
                        placeholder='Email'
                        className='text-xl bg-transparent outline-none w-full font-medium'
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
export default Email