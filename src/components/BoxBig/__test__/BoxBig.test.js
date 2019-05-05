import React from 'react';
import { shallow } from 'enzyme';

import BoxBig from '..';

describe('<BoxBig />', () => {
  it('The component renders', () => {
    const wrapper = shallow(<BoxBig />);
    expect(wrapper.find('.boxBig')).toHaveLength(1);
  });
  // TODO: Add more complex test...
});