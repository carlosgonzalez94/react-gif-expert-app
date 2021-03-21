import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Test of the component <GifExpertApp />', () => {
    let wrapper;

    test('[GifExpertApp] Should render the component GifExpertApp correctly', () => {
        wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('[GifExpertApp] Should render a list of categories', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
})
