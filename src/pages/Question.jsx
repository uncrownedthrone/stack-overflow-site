import React from 'react'

const Question = props => {
  return (
    <div>
      <ul>
        <li>
          <h3>Question Title: {props.description}</h3>
          <p>Question Content: {props.content}</p>
          <p>Date Question Created: {props.dateOfPost}</p>
          <div>
            <span>Question Votes: {props.upDownVoteQuestion}</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Question
