import React from 'react'

const Question = props => {
  return (
    <div>
      <ul>
        <li>
          <h3>{props.description}</h3>
          <p>{props.content}</p>
          <p>{props.dateOfPost}</p>
          <div>
            <span>Upvotes: {props.upDownVoteQuestion}</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Question
