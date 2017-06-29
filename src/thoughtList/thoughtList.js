import React from 'react';
import {ThoughtCard} from '../thoughtCard/thoughtCard.js'

export const ThoughtList = ({thoughtList}) => {


  const thoughts = thoughtList.map(thought => {
    return <ThoughtCard title={thought.title} body={thought.body} key={thought.id}/>
  })


  return (
    <div className="thought-list">
      {thoughts}
    </div>
  );
}
