import React from 'react';
import renderer from 'react-test-renderer';
import ContactRow from '../components/contact/contactRow';

test('renders correctly', () => {
  const tree = renderer.create(<ContactRow item={{id : "1", firstName: "name", lastName:"lastname",phoneNo:"123"}} />).toJSON();
  expect(tree).toMatchSnapshot();
});