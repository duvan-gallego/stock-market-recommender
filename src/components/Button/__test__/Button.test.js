import React from 'react';
import { shallow } from 'enzyme';

import Button from '..';

const props = {
  text: 'Text test',
}

describe('<Button />', () => {
  it('The component renders', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.find('.button')).toHaveLength(1);
  });
  it('Render text correctly', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.text()).toBe('Text test');
  });
});


