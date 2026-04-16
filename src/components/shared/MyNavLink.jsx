import React from 'react';
import { RiHome2Line } from 'react-icons/ri';
import { NavLink } from 'react-router';

const MyNavLink = ({to,children,icon}) => {
    return (
        <NavLink to={to} className={({isActive})=>`flex items-center gap-1 px-3 py-2 rounded-md text-lg ${isActive ? "bg-[#244D3F] text-white":"hover:bg-base-200"}`}>
            {icon}   
            {children}
        </NavLink>
    );
};

export default MyNavLink;