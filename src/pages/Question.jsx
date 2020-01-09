import React from 'react'

const Question = props => {
  return (
    <div>
      <ul>
        <li>
          <h3>Title: {props.title}</h3>
          <p>Content: {props.shortDesc}</p>
          <p>Date: {props.date}</p>
          <div>
            <span>Upvotes: {props.vote}</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Question
