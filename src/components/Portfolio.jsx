import React, {useEffect, useState} from 'react'
import {AppText, portfolio} from '../Constants'
import SectionHeading from '../Shared/SectionHeading';
import {robo} from './../assets/index'

const Portfolio = () => {

    const [portfolioList, setPortfolioList] = useState([]);

    useEffect(() => {

        setPortfolioList(portfolio);
    }, [])

    return (
        <div className='mt-25 flex justify-center flex-col' id={"portfolio"}>
            <div className='flex flex-row px-6 md:px-0 items-center justify-center'>
                {/* <h1 className='text-[40px] font-bold'>{AppText.Creative}
        <span className='text-purple-600'>{AppText.Portfolio}</span></h1> */}
                <SectionHeading firstTitle={AppText.Creative} secondTitle={AppText.Portfolio}/>
                <img src={robo} className="w-[70px] ml-5 animate-bounce" alt={'portfolio heading image'}/>
            </div>
            <div className='grid grid-cols-2 items-center content-center md:grid-cols-3 lg:grid-cols-3
        md:px-24 lg:px-48 p-6 '>
                {portfolioList.map((project, index) => (
                    <div key={index} className='p-2 flex flex-col m-2 rounded-lg bg-[#f6cc7740] h-[420px]
                transition-all ease-in-out group hover:scale-110'>
                        <a href={project.demoLink}
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src={project.image} className="h-[180px] object-cover rounded-lg"
                                 alt={'project image'}/>
                            <h1 className='text-[14px] group-hover:scale-110 m-2 text-center  font-bold'>{project.title}</h1>

                            <div className={'flex flex-wrap lg:justify-center'}>
                                {project.technologies.map((tech, index) =>
                                        <span key={index}
                                              className={'m-2 rounded bg-[#f6cc77] px-2 py-1 text-sm font-medium text-white'}>
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