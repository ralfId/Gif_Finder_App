import { shallow } from "enzyme";
import { GridCategory } from "../../components/GridCategory";
import { useFetchGifs } from "../../hooks/useFetchGifs";
/** 
 * Finje cualquier llamada al archivo especificado en el path de jest.mock('path')
 * y supone o controla la info que esa llamada debe responder
 */
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GridCategory.js', () => {
    
    const category = 'one piece';

    test('Debe hacer match con el snapshop ', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true 
        });

        const wraper = shallow(<GridCategory category={category}/>)
        expect(wraper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imagenes con useFetchGifs.js', () => {
        
        const gifData = [
            {
                id: 1,
                url: 'https://imagen.gif.com',
                title: 'Lorem ipsum'
            }
            
        ]
        useFetchGifs.mockReturnValue({
            data: gifData,
            loading: false 
        });

        const wraper = shallow(<GridCategory category={category}/>)
        expect(wraper).toMatchSnapshot();
        expect(wraper.find('p').exists()).toBe(false);
        expect(wraper.find('GridCategoryItem').length).toBe(gifData.length)
    });
});