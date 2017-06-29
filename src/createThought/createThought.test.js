import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateThought from './createThought.js';

describe('CreateThought', () => {

  it('has a two input field', () => {
    const wrapper = shallow(
      <CreateThought />
    );

    expect(wrapper.find('input').length).toEqual(2);
  });

  it('fires onChange on first input which should update state & input field', () => {
    const wrapper = mount(<CreateThought/>);
    const input = wrapper.find('input').first();

    const expectedState = {
      title: 'abc',
      body: ''
    };

    input.simulate('change', { target: { value: 'abc' } });

    expect(input.node.value).toEqual('abc');

    expect(wrapper.state()).toEqual(expectedState);
  });

  it('fires onChange on second input which should update state & input field', () => {
    const wrapper = mount(<CreateThought/>);
    const input = wrapper.find('input').last();
    const expectedState = {
      title: '',
      body: 'abc'
    };
    input.simulate('change', { target: { value: 'abc' } });

    expect(input.node.value).toEqual('abc');
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('has a submit button', () => {
    const wrapper = shallow(
      <CreateThought />
    );

    expect(wrapper.find('button').length).toEqual(1);
  });

  it('fires submitIdea function with the state object while confirming that input fields go back to empty strings', () => {
    const mockedFn = jest.fn();

    const wrapper = mount(
      <CreateThought submitIdea={mockedFn} />
    );

    const idea = {title: 'woot', body: 'yesss'}

    wrapper.setState(idea)
    const button = wrapper.find('button')
    button.simulate('click');

    const expectedState = {
      title: '',
      body: ''
    };

    expect(wrapper.state()).toEqual(expectedState)
    expect(mockedFn).toHaveBeenCalledTimes(1)
    expect(mockedFn).toHaveBeenCalledWith(idea)
    // What input field are we trying to target? What is the action we want to simulate?

    // Find the DOM element you want to click on and click on that thing

    // Expect that the value of the input node equals a string
  });



});
