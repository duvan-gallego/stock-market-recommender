import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '..';

const props = {
  text: 'Text test',
  className: 'classname__test'
}

describe('<Spinner />', () => {
  it('The component renders', () => {
    const wrapper = shallow(<Spinner {...props} />);
    expect(wrapper.find('.spinner')).toHaveLength(1);
  });
  it('Add custom className correctly', () => {
    const wrapper = shallow(<Spinner {...props} />);
    expect(wrapper.find('.classname__test')).toHaveLength(1);
  });
});


