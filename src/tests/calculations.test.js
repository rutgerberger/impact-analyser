import React from 'react';
import renderer from 'react-test-renderer';
import ProjectPage from '../ProjectPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn().mockReturnValue({ environment: 'dev', service: 'fakeService' }),
}))

test('ProjectPage', () => {
    const wrapper = shallow(<Router><Route><ProjectPage></ProjectPage></Route></Router>);
    expect(1).toBe(1);
});