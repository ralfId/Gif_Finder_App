import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas en GifExpertApp.js', () => {
    
    test('Debe hacer match con el snapshop de <GifExpertApp/>', () => {
        
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });


    test('Debe verificar si <GridCategory/> existe n veces', () => {
        
        const categories = ['One piece', 'xHx']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GridCategory').length).toBe(categories.length);
    });
});