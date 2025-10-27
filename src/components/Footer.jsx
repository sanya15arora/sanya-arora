import React from 'react'
import {AppText, socialNetwork} from '../constants'

const Footer = () => {
    return (
        <div className='bg-gray-200 mt-10 p-20 items-center flex flex-col px-10 md:px-80'>
            <div className='flex gap-4'>
                {socialNetwork.map((item) => {
                    const LogoComponent = item.logo;
                    return (
                        <a href={item.url}
                           key={item.id}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label="Social Link"
                           className="text-3xl text-gray-700 hover:text-[#f6cc77] transition-colors cursor-pointer"
                        >
                            <LogoComponent/>
                        </a>
                    )
                })}
            </div>
            <h1 className='text-gray-500 text-[15px] mt-4'>{AppText.copyWriteText}</h1>
        </div>
    )
}

export default Footer