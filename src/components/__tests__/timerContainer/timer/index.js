import React from 'react';
import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import Timer  from '../../../timerContainer/timer';


const mockDeleteFunction = jest.fn();

const props = {
    startCounter: 56,
    serialNumber: 1,
    deleteTimer: mockDeleteFunction,
};

describe('test Timer component', ()  => {
    let wrapper = shallow(<Timer {...props} />);
    it('snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
});