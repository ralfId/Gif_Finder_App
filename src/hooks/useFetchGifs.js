import { useEffect, useState } from "react"
import { GetGif } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
  
    const [state, setState] = useState(
        {
            data: [],
            loading: true
        }
    );


    useEffect(()=>{
        GetGif(category)
        .then(imgs =>
            {
                setState({
                    data: imgs,
                    loading: false
                })
            }
            );
    });

    

    return state;
}
