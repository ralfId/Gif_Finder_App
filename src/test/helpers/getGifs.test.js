import { GetGif } from "../../helpers/getGifs";

describe('getGifs.js tests', () => {
    
    test('should be return 10 elements', async() => {
        var gifs = await GetGif('one piece');
        expect(gifs.length).toBe( 10 );
    })

    test('should be return an empty array', async() => {
        var gifs = await GetGif('');
        expect(gifs.length).toBe( 0 );
    })
    
});