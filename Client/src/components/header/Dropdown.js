import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MenuItems } from './MenuItems';
import './Dropdown.css';

function Dropdown() {

    const [click, setClick]= useState(false)
    const handleClick =() => setClick(! click)
        return(
        <>
        <ul onClick={handleClick}
        className={click ? 'dropdown-menu clicked': 'dropdown-menu'}>
            {MenuItems.map((item,index) => {
                return(
                    <li key={index} className='dropdown-link'>
                        <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
        )
        ;
}

export default Dropdown;