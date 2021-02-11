import React from 'react';
import { Link } from 'react-router-dom';
import './portfolioItem.css';

function PortfolioItem({ work }) {
    return (
        <Link to={`/project/${work.id}`} className='portfolio-item'>
            <img
                className='portfolio-item_screenshot'
                src={work.screenshot}
                alt={work.title}
            ></img>
            <div className='portfolio-item_title'>{work.title}</div>
        </Link>
    )
    
}

export default PortfolioItem;