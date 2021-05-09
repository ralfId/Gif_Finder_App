import React from 'react'
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import { Simulate } from 'react-dom/test-utils';

describe('AddCategory.js tests', () => {
    
    const setCategory = jest.fn();

    let  wrapper;


    //se ejecuta todo lo que se necesita reinicializar ante cada test
    beforeEach(()=>{
        jest.clearAllMocks(); //se limpian todas las simulaciones
        wrapper  = shallow(<AddCategory setCategory= {setCategory} />);
    });

    test('Pueva en <AddCategory />', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar el texto del <input/> en <AddCategory />', () => {
        
            const input = wrapper.find('input');
            const value = 'Hola mundo';

            input.simulate('change', {target:{value}});
            
            expect(wrapper.find('p').text().trim()).toBe(value);
    });
    
    test('No debe realizar nada al realizar el submit en el <form />', () => {
        //simulando un submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        expect(setCategory).not.toHaveBeenCalled();
    });
    
    test('Debe de llamar el SetCategory y limpiar el <input/> al simular el onSubmit', () => {
        
        
        const value = "categoria de busqueda";

        //simular el inputChange
        wrapper.find('input').simulate('change', {target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);

        //simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        //setCategory debe llamarse almenos una vez
        expect(setCategory).toHaveBeenCalledTimes(1);
        expect(setCategory).toHaveBeenLastCalledWith(expect.any(Function))//verifica que se ejecuta, pero se espere sea una funcion 
        //el valor del <input/> debe estas "" (vacio)
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
});