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
            <span>Up Votes: {props.upVoteQuestion}</span>
            <span>Down Votes: {props.downVoteQuestion}</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Question
