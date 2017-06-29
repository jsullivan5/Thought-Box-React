import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

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
]

it('renders App with className app', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.hasClass('app')).toBe(true)
});

it('initial state starts with an empty array', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.state().thoughts).toEqual([])
});

it('having 2 thoughts in state should mean there are two thoughtCards', () => {
  const wrapper = mount(<App />)

  wrapper.setState({thoughts: mockThoughts})
  expect(wrapper.find('.thought-card').length).toBe(2)
});

it('user can add a new thought and its added to state and displayed on the screen', () => {
  const wrapper = mount(<App />)
  const titleInput = wrapper.find('.title-input')
  const bodyInput = wrapper.find('.body-input')
  const button = wrapper.find('button')


  expect(wrapper.state().thoughts).toEqual([])
  expect(wrapper.find('.thought-card').length).toBe(0)

  titleInput.simulate('change', { target: { value: 'word' } })
  bodyInput.simulate('change', { target: { value: 'up' } })

  button.simulate('click')

  expect(wrapper.state()).toEqual( { thoughts: [ { title: 'word', body: 'up', id: 0 } ] })


  expect(wrapper.find('.thought-card').length).toBe(1)


});
