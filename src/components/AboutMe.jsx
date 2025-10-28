import React from 'react';
import {aboutSection, AppText} from "../constants/index.js";
import {laptop, wave} from "../assets/index.js";

const AboutMe = () => {
    return (
        <div className={'mt-36 scroll-mt-20'} id={'aboutme'}>
            <img src={wave} className={'w-screen absolute'} alt={'wave'}/>
            <img src={laptop} className={'absolute mt-[-130px] md:mt-[-180px] w-[220px] md:w-[300px]'}
                 alt={'laptop'}/>
            <div
                className={'h-[700px] md:h-[500px] lg:h-[450px] xl:h-[350px] bg-[#ffd23f] items-center w-full text-center '}>
                <h2 className={'text-[50px] text-center pt-20 md:pt-10 font-bold text-white'}> {AppText.About} <span
                    className={'text-black'}>{AppText.Me}</span>
                </h2>
                <h2 className={'text-white text-[20px] text-center align-text-left px-6 md:px-50 lg:px-70 xl:px-80 mt-10'}> {AppText.aboutMeDescription}</h2>
            </div>

            <div className={'flex flex-col lg:flex-row mt-[-60px] items-center lg:items-start  justify-around px-32'}>
                {
                    aboutSection.map((section) => (
                        <div key={section.id} className={' group hover:bg-[#ffd23f] mb-5 p-5 rounded-lg '}>
                            <img className={'w-[230px] h-[190px] object-cover rounded-lg '} src={section.image}
                                 alt={'About Section Image'}/>
                            <div className={'w-[230px] pb-[20px] mt-2'}>
                                <h2 className={'font-bold text-center group-hover:text-white'}>{section.title}</h2>
                                <h2 className={'text-[12px] text-gray-500 text-center  group-hover:text-gray-100'}>{section.desc}</h2>
                            </div>
                        </div>))
                }
            </div>


        </div>
    );
};

export default AboutMe;