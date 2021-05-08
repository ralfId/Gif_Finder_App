import React, { useState, useEffect } from 'react'
import { GetGif } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridCategoryItem } from './GridCategoryItem';

export const GridCategory = ({ category }) => {


    // const [gifImg, setGifImg] = useState([])
    const {data:gifImg, loading} = useFetchGifs(category);
    
    // useEffect(() => {
    //     GetGif(category).then(setGifImg);
    // }, [category]);

    

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className='card-container animate__zoomIn'>
                {
                    gifImg.map(img => (
                        <GridCategoryItem
                            key={img.id} {...img} />
                    ))
                }
            </div>


        </>
    )
}
