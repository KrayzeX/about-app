import React from 'react';
import './portfolioItem.css';

function PortfolioItem({ work }) {
    return (
        <a href={work.link} className='portfolio-item'>
            <img
                className='portfolio-item_screenshot'
                src={work.screenshot}
                alt={work.title}
            ></img>
            <div className='portfolio-item_title'>{work.title}</div>
        </a>
    )
    
}

export default PortfolioItem;