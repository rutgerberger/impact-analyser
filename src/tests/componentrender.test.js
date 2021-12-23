import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';
import ProjectTile from  '../components/ProjectTile'
import HomePage from '../HomePage';
test('renders correctly', () => {
  const tree = renderer.create(<ProjectTile />).toJSON();
  expect(tree).toMatchSnapshot();
  const tree2 = renderer.create(<HomePage/>).toJSON();
  expect(tree2).toMatchSnapshot();
  const tree3 = renderer.create(<NavBar/>).toJSON();
  expect(tree3).toMatchSnapshot();
});