import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GridCategory } from './components/GridCategory';

export const GifExpertApp = ({defaultCategories = []}) => {

    //const catgList = ['one pice', 'hxh', 'Naruto']
    const [category, setCategory] = useState(defaultCategories)
    
    // const handleAdd = ()=>{
    //     /* Correct ways to push an element */
    //     // setCategory(['7 Deadly Sign', ...category])
    //     setCategory( categ => ['one punch man', ...category] );
    // }


    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategory= { setCategory }/>
            <hr />
            <ol>
            {
                category.map(ctg => 
                    <GridCategory key= {ctg} category={ctg} />
                )
            }
            </ol>
            

        </>
    )
};
