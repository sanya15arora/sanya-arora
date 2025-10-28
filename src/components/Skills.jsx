import React from 'react'
import {skill} from '../assets'
import {AppText, skillsList, workDetail} from '../constants'

const Skills = () => {
    return (
        <div className='mt-10' id="skills">
            <div className='flex flex-row justify-center items-center'>
                <img src={skill} className="w-[70px] animate-bounce " alt={'skill heading icon'}/>
                <h1 className='text-[40px] font-bold'>{AppText.Skills}<span
                    className='text-[#ffd23f]'>{AppText.Expertise}</span></h1>
            </div>
            <div className='flex flex-col md:flex-row  justify-evenly px-8 md:px-0 mt-8 '>
                <div className='grid grid-cols-4 md:grid-cols-4 gap-8  items-center'>
                    {skillsList.map((item, index) => (
                        <div key={index} className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-[#f6cc7740]
                    p-3 rounded-full'>
                            <img src={item.icon}
                                 className="w-[60px]" alt={'skill icon'}/>
                        </div>

                    ))}
                </div>
                <div className='flex mt-5 flex-col justify-end  md:mt-0 lg:mt-0'>
                    {workDetail.map((detail, index) => (
                        <div key={index} className='flex flex-row mb-6'>
                            <div className='mr-10 font-bold'>
                                <h2>{detail.year}</h2>
                            </div>
                            <div>
                                <h3 className='font-bold w-full'>{detail.position}</h3>
                                <h3 className='font-thin text-[15px] text-gray-400'>{detail.companyName}</h3>
                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </div>
    )
}

export default Skills