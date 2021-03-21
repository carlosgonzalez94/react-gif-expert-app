import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test of the component <GifGridItem />', () => {
    let category = 'One Punch';
    let wrapper;

    test('Should render the component AddCategory correctly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Should render items when the images are loaded', () => {
        //coloco la respuesta que se simulara
        const gifs = [
            {
                id: 'fake id',
                title: 'fake title',
                url: 'fake url'
            }
        ];

        //mockeo la respuesta de la función
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        //renderizo el componente
        wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
    
})
