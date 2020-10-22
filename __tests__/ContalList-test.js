import React from 'react';
import renderer from 'react-test-renderer';
import ContactFlatList from '../components/contact/contactFlatList';

test('renders correctly', () => {
  const tree = renderer.create(<ContactFlatList />).toJSON();
  expect(tree).toMatchSnapshot();
});