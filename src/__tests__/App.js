import {shallow} from 'enzyme';
import App from '../App';


describe('Render App', () =>{
    const app = shallow(<App/>)
    it("snapshot testing" ,() =>{
        expect(app).toMatchSnapshot();
    })

    it('render TimerContainer', () => {
        expect(app.find('TimerContainer').exists()).toBe(true);
    })
});