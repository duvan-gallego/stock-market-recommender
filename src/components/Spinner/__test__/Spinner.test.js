import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '..';

describe('<Spinner />', () => {
  it('The component renders', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.find('.spinner')).toHaveLength(1);
  });
  it('Add custom className correctly', () => {
    const wrapper = shallow(<Spinner className='classname__test' />);
    expect(wrapper.find('.classname__test')).toHaveLength(1);
  });
  it('With text should render it', () => {
    const wrapper = shallow(<Spinner text='Text test' />);
    expect(wrapper.text()).toBe('Text test');
  });
});


