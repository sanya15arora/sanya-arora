import React from 'react';
import {logo} from "../assets";
import {IoMenuOutline} from "react-icons/io5";
import {IoClose} from "react-icons/io5";


const navList = [
    {
        label: 'About Me',
        navLink: '/#aboutme'
    },
    {
        label: 'Skills',
        navLink: '/#skills'
    },
    {
        label: 'Portfolio',
        navLink: '/#portfolio'
    },
    {
        label: 'Companies',
        navLink: '/#companies'
    },
    {
        label: 'Contact Me',
        navLink: '/#contact'
    },

]

const NavBar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <div className="flex justify-between items-center pt-8 sticky top-0 z-50 bg-white/70 backdrop-blur-md">
            <a href={'#home'}><img src={logo} alt={'SA'} className={'h-12 object-fit'}/></a>
            <div className={'hidden md:flex'}>
                <ul className={'flex flex-row'}>
                    {navList.map((navItem, index) => (
                        <li key={index}
                            className={'mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'}>
                            <a href={navItem.navLink}>{navItem.label} </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={'md:hidden lg:hidden'}>
                {!toggleMenu ?
                    <IoMenuOutline size={28} onClick={() => setToggleMenu(true)}/>
                    :
                    <IoClose size={28} className={' float-right'} onClick={() => setToggleMenu(false)}/>
                }
                {
                    toggleMenu && <ul className={'flex flex-col mt-8 bg-gray-300 p-4 '}>
                        {navList.map((navItem, index) => (
                            <li key={index}
                                className={'p-3 transition-all ease-in-out hover:scale-110 cursor-pointer'}>
                                <a href={navItem.navLink}>{navItem.label} </a>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    );
};

export default NavBar;