import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Test of the component <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Should render the component AddCategory correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Should change the value of the input text', () => {
        const input = wrapper.find('input');    //obtengo el input
        const value = 'Hola Mundo';     //le envio el valor que voy a cambiar
        input.simulate('change', {      //le indico que simule el change
            target: {value}               //envio como parametro el target.value para que no se rompa el componente
        });
    });

    test('Should NOT send the info on submit', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Should call setCategories and clean the input ', () => {
        //simulate the value change of input
        const value = 'Hola Mundo';
        const input = wrapper.find('input');
        input.simulate('change', { target: {value} });

        //simulate the submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(input.prop('value')).toBe('');
    });
    
    
    
})
