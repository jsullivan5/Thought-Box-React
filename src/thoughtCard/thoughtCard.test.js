import React from 'react';
import { shallow } from 'enzyme';

import { ThoughtCard } from './thoughtCard.js';

describe('ThoughtCard', () => {

  it('has a thoughtCard class field', () => {
    const wrapper = shallow(<ThoughtCard />)
    expect(wrapper.find('.thought-card').length).toEqual(1)
    expect(wrapper.hasClass('thought-card')).toEqual(true)

  });

  it('has a title and body', () => {
    const wrapper = shallow(<ThoughtCard />);

    expect(wrapper.find('.title').length).toEqual(1)

    expect(wrapper.find('.body').length).toEqual(1)
  });

});
