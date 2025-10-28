import React from 'react'
import SectionHeading from '../shared/SectionHeading.jsx'
import {AppText, CompanyImage} from '../constants'

const Companies = () => {
    return (
        <div id='companies' className='bg-[#ffd23f] p-5'>
            <div className='flex justify-center items-center flex-col'>
                <SectionHeading firstTitle={AppText.CompaniesI} secondTitle={AppText.WorkedFor} isWhite={true}/>
                <div className='grid grid-cols-2 m-3 items-center'>
                    {CompanyImage.map((item, index) => (
                        <div key={index} className='m-3 transition-all ease-in-out hover:scale-110'>
                            <img src={item.imageUrl} className="h-[130px] rounded-md" alt={'company image'}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Companies