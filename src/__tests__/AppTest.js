import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
describe('Test with Enzyme', () => {
    test('Renders', () => {
        expect(shallow(<App />)).toMatchSnapshot();
    });
});
