import React from 'react'

export const GridCategoryItem = ({ title, img }) => {
    return (
        <div className='card animate__fadeInLeft'>
            <img src={img} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
