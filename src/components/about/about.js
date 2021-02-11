import React from 'react';
import './about.css';

function About(props) {
    return (
        <div className='about'>
            <div className='about_bg'></div>
            <div className='container'>
                <h1 className ='about_title'>{props.title}</h1>
                <div className='about_description'>{props.children}</div>
            </div>
        </div>
    );
    
}

export default About;