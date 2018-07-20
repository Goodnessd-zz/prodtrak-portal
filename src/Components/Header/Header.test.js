import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});


describe('Header Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header hello = {123}/>);

    expect(wrapper.exists()).toBe(true);
  });
});
