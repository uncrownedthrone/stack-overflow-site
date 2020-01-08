import React from 'react'

const Answer = props => {
  return (
    <>
    <div>
      <p>Content: {props.answerContent}</p>
      <p>Date Created: {props.dateOfPost}</p>
      <p>Votes: {props.upDownVoteAnswer}</p>
    </div>
    </>
  )
}

export default Answer
