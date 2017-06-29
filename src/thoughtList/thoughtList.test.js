import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './thoughtList.js';

describe('ThoughtList', () => {

  const mockThoughts = [
    {
      title: 'hello',
      body: 'blah blah',
      id: 1
    },
    {
      title: 'why',
      body: 'tho',
      id: 2
    },
    {
      title: 'burritos',
      body: 'are good',
      id: 3
    }
  ]

  it('has a thoughtList class field', () => {
    const wrapper = shallow(<ThoughtList thoughtList={mockThoughts}/>)
    expect(wrapper.hasClass('thought-list')).toBe(true)
  });

  it('has a multiple ThoughtCard class field', () => {
    const wrapper = mount(<ThoughtList thoughtList={mockThoughts}/>)
    expect(wrapper.find('.thought-card').length).toBe(3)
  });

});
