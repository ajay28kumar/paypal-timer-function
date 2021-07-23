import {shallow} from 'enzyme';
import toJson from "enzyme-to-json";
import { renderHook, act } from "@testing-library/react-hooks";

import TimerContainer, {useTimerDetails} from '../../timerContainer';


describe('timer component tests', () => {
    it("snapshot testing" , () => {
        const app = shallow(<TimerContainer/>)
        expect(toJson(app)).toMatchSnapshot();
    })
    it('AddTimer is rendered' ,() => {
        const app = shallow(<TimerContainer/>)
        expect(app.find('AddTimer').exists()).toBe(true);
    })

    it('expect Timer component is not rendered initially', () => {
        const app = shallow(<TimerContainer/>)
        expect(app.find('Timer').exists()).toBeFalsy()
    })
    it('test hook function', () => {
        const { result } = renderHook(() => useTimerDetails(0));
        act(() => {
            result.current.setTimerDetails([{id:'261',startCounter: 90}]);
        });
        expect(result.current.timerDetails.length).toBe(1)
    })
});