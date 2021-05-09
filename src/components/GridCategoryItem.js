import React from 'react'
import PropTypes from 'prop-types';

export const GridCategoryItem = ({ title, img }) => {
    return (
        <div className='card animate__fadeInLeft'>
            <img src={img} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

GridCategoryItem.protoTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};