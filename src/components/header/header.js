import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header(props) {
    return (
        <header className='header'>
            <div className='container'>
                <Link to='/' className='header-brand'>
                    {props.brand}
                </Link>
            </div>
        </header>
    );
    
}

export default Header;