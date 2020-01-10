import React from 'react'

const Answer = props => {
  return (
    <>
      <div>
        <p>Answer Content: {props.answerContent}</p>
        <p>Date Answer Created: {props.dateOfPost}</p>
        <div>
          <span>Up Votes: {props.upVoteAnswer}</span>
          <span>Down Votes: {props.downVoteAnswer}</span>
        </div>
      </div>
    </>
  )
}

export default Answer
