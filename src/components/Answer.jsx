import React from 'react'

const Answer = props => {
  return (
    <>
      <div>
        <p>Answer Content: {props.answerContent}</p>
        <p>Date Answer Created: {props.dateOfPost}</p>
        <p>Answer Votes: {props.upDownVoteAnswer}</p>
        <p>Question Id:</p> {props.questionPostId}
      </div>
    </>
  )
}

export default Answer
