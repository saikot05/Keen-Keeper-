import React from 'react';
import { RiHome2Line, RiMenu3Line, RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import MyNavLink from './MyNavLink';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    return (
        <nav className='bg-base-100 shadow-sm'>
            <div className="container mx-auto navbar">
                <div className="flex-1">
                    <h2 className="font-bold text-4xl">Keen<span className='text-[#244D3F]'>Keeper</span></h2>
                </div>
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li>
                            <MyNavLink to={'/'} icon={<RiHome2Line />}>Home</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to={'/timeline'} icon={<RiTimeLine />}>Timeline</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to={"/stats"} icon={<TfiStatsUp />}>Stats</MyNavLink>
                        </li>
                    
                    </ul>
                </div>
                <div className="flex-none md:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <GiHamburgerMenu />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-64 right-0"
                        >
                            <li><MyNavLink to='/' icon={<RiHome2Line />}>Home</MyNavLink></li>
                            <li><MyNavLink to='/timeline' icon={<RiTimeLine />}>Timeline</MyNavLink></li>
                            <li><MyNavLink to='/stats' icon={<TfiStatsUp />}>Stats</MyNavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;