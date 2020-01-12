import React from 'react'

const Question = props => {
  return (
    <div>
      <h4>{props.description}</h4>
      <p>{props.content}</p>
      <p>Asked: {props.dateOfPost}</p>
      <p>
        Up Votes: {props.upVoteQuestion} | Down Votes: -{props.downVoteQuestion}
      </p>
    </div>
  )
}

export default Question
