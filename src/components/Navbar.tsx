import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai';
import { sidebarData } from '../types/SideBarData';

import '../static/styles/Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {

    const [sidebar, setSibebar] = useState(false);

    const showSidebar = () => setSibebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to="#" className='menu-bars'>
                        <FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                                <Link to='#' className='menu-bars'>
                                    <AiOutlineClose onClick={showSidebar} />
                                </Link>
                            </li>
                            {sidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
