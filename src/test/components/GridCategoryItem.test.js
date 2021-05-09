import React from 'react'
import { shallow } from "enzyme";
import { GridCategoryItem } from "../../components/GridCategoryItem";

describe('Test for GridCategoryItem.js', () => {
    
    const title = 'Lorem ipsum';
    const img = 'https://www.imagesgifs.com'

    const wrapper = shallow( <GridCategoryItem img={img}  title={title}/> )

    test('should show a correct snapshop for GridCategoryItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el parrafo con el title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim()).toBe(title);
    })

    test('debe mostrar la url de la imagen', () => {
        const image = wrapper.find('img');
        expect(image.prop('src')).toBe(img);
    })
    
    test('El contenedor <div></div> debe tene la clase css "animate__fadeInLeft"', () => {
        const div = wrapper.find('div');
        const hasAnimatedClass = div.prop('className').includes('animate__fadeInLeft');
        expect(hasAnimatedClass).toBe(true);
    })
    
      
       

    
});