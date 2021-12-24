import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';
import ProjectTile from  '../components/ProjectTile'
import HomePage from '../HomePage';
import BrowserRouter from 'react-router-dom'
test('renders correctly', () => {
  const tree = renderer.create(<BrowserRouter><ProjectTile /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
  const tree2 = renderer.create(<BrowserRouter><HomePage/></BrowserRouter>).toJSON();
  expect(tree2).toMatchSnapshot();
  const tree3 = renderer.create(<BrowserRouter><NavBar/></BrowserRouter>).toJSON();
  expect(tree3).toMatchSnapshot();
});