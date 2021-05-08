
export const GetGif = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=C6h5e2ht1cbX5gG5BR5qb7JW2A9kBzex&q=${ category }&limit=10` ;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            img: gif.images.downsized_medium.url
        }
    })

    return gifs;
}