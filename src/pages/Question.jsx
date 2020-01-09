import React from 'react'

const Question = props => {
  return (
    <div>
      <ul>
        <li>
          <h3>Title: {props.description}</h3>
          <p>Content: {props.content}</p>
          <p>Date: {props.dateOfPost}</p>
          <div>
            <span>Upvotes: {props.upDownVoteQuestion}</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Question
