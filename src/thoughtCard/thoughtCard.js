import React from 'react';

export const ThoughtCard = ({title, body}) => {
  return (
    <div className="thought-card">
      <p className='title'>{title}</p>
      <p className='body'>{body}</p>
    </div>
  )
}
