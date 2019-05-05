import React from 'react';
import { shallow } from 'enzyme';

import BoxInfo from '..';

const props = {
  text: 'Text test',
  title: 'title test'
}

describe('<BoxInfo />', () => {
  it('The component renders', () => {
    const wrapper = shallow(<BoxInfo {...props} />);
    expect(wrapper.find('.boxInfo')).toHaveLength(1);
  });
  // TODO: Add more complex test
});


