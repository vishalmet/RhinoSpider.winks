import React from 'react'
import ICLogo from "../assets/Icons/IC-logo.png"
import AppStore from "../assets/Icons/AppStore.png"
import PlayStore from "../assets/Icons/PlayStore.png"

const Footer = () => {
    return (
        <div className='flex items-center justify-between mt-2 sm:mt-6'>
            <img src={ICLogo} className=' h-4 sm:h-6 w-auto' alt="" />
            <div className="sm:flex items-center gap-2 font-normal text-sm sm:text-base">
                <div className=" flex items-center gap-2">
                <img src={AppStore} className='w-4 sm:w-6 h-auto' alt="AppStore" />
                <img src={PlayStore} className='w-3 sm:w-5 h-auto' alt="PlayStore" />
                </div>
                <p className=' text-xs sm:text-base'>Coming Soon</p>
            </div>
        </div>
    )
}

export default Footer