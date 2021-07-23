import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import AddTimer , {isValidStartTime, createUUID} from '../../../timerContainer/addTimer';

const mockSetTimerDetails = jest.fn()

const props = {
    timerDetails: [{id:"1236",startTime: 56}],
    setTimerDetails:mockSetTimerDetails
}

describe('addTimerComponent component tests', () => {
    it("snapshot testing with props" , () => {
        const app = shallow(<AddTimer {...props}/>)
        expect(toJson(app)).toMatchSnapshot();
    })
    describe('test isValidStartTime' , () => {
        it('return true for integer 5', () => {
            expect(isValidStartTime(5)).toBeTruthy()
        })
        it('return false for negative values', () => {
            expect(isValidStartTime(-8)).toBeFalsy()
        })
    })
    describe('test uuid', () => {
        it('return 36 random values', () => {
            expect(createUUID().length).toBe(36)
        })
    })
    describe('addtimer function test', function () {
        it('button click invoke setTimerDetails', () => {
            const app = shallow(<AddTimer {...props}/>)
            const button = app.find('WithStyles(ForwardRef(Button))');
            button.simulate('click');
            expect(mockSetTimerDetails).toHaveBeenCalled()
        })
    });
})