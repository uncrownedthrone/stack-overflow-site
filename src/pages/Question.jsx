import React from 'react'

const Question = () => {
  return (
    <div>
      <ul>
        <li>
          <h3>{props.title}</h3>
          <p>{props.shortDesc}</p>
          <p>{props.date}</p>
          <div>
            <span>Upvotes: {props.praise}</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Question
