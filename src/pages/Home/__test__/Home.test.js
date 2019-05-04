import React from 'react';
import { shallow } from 'enzyme';

import Home from '..';

describe('<Home />', () => {
  it('Render Home page', () => {
    const wrapper = shallow(<Home />);
    console.log(wrapper.find('h1'));
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
