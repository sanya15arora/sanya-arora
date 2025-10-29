import React, {useEffect, useState} from 'react'
import {AppText, portfolio} from '../constants'
import SectionHeading from '../shared/SectionHeading';
import {robo} from '../assets/index'

const Portfolio = () => {

    const [portfolioList, setPortfolioList] = useState([]);

    useEffect(() => {

        setPortfolioList(portfolio);
    }, [])

    return (
        <div className='mt-25 scroll-mt-20 flex justify-center flex-col' id={"portfolio"}>
            <div className='flex flex-row px-6 md:px-0 items-center justify-center'>
                {/* <h1 className='text-[40px] font-bold'>{AppText.Creative}
        <span className='text-purple-600'>{AppText.Portfolio}</span></h1> */}
                <SectionHeading firstTitle={AppText.Creative} secondTitle={AppText.Portfolio}/>
                <img src={robo} className="w-[70px] ml-5 animate-bounce" alt={'portfolio heading image'}/>
            </div>
            <div className='grid grid-cols-1 items-center  md:grid-cols-2 xl:grid-cols-3
        md:px-24 lg:px-48 p-6 gap-2'>
                {portfolioList.map((project, index) => (
                    <div key={index} className='p-2 flex flex-col m-2 rounded-lg bg-[#f6cc7740] md:h-[460px] xl:h-[400px]
                transition-all ease-in-out group hover:scale-110'>
                        <a href={project.demoLink}
                           target="_blank"
                           rel="noopener noreferrer"
                           className={"grid justify-items-center"}>
                            <img src={project.image} className="h-[180px] object-fit rounded-lg"
                                 alt={'project image'}/>
                            <h1 className='text-[14px] group-hover:scale-110 m-2 text-center  font-bold'>{project.title}</h1>

                            <div className={'flex flex-wrap justify-center'}>
                                {project.technologies.map((tech, index) =>
                                        <span key={index}
                                              className={'m-1 rounded bg-[#ffd23f] px-2 py-1 text-sm font-medium text-white'}>
                                {tech}
                                </span>
                                )}
                            </div>
                            <h1 className='text-[12px] text-gray-500 px-6 py-4'>{project.desc}</h1>
                        </a>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Portfolio