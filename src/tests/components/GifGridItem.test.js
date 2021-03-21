import React from 'react';
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem />', () => {
    const title = 'Fake Title';
    const url = 'https://fakeurl/fakeimage.jpg';
    const animationClass = 'animate__fadeIn';
    const wrapper = shallow( <GifGridItem title={title} url={url} /> );

    test('debe de mostrar el componente correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de tener un párrafo con el title ', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la imagen igual al url y alt de los props ', () => {
        const img = wrapper.find('img');    //obtiene la imagen que se renderiza
        expect(img.prop('src')).toBe(url);  //obtiene unicamente la prop src y valida que sea igual a url
        expect(img.props().alt).toBe(title);    //obtiene todas las props y valida que alt sea el title
    });

    test('debe de tener la imagen igual al url y alt de los props ', () => {
        const div = wrapper.find('div');
        // expect(div.props().className).toContain(animation);
        expect(div.props().className.includes(animationClass)).toBe(true);
    });
});
