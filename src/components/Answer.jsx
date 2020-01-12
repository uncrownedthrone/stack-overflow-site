import React from 'react'

const Answer = props => {
  return (
    <>
      <div className="answers">
        <p>{props.answerContent}</p>
        <p>Posted: {props.dateOfPost}</p>
        <div>
          <p>
            Up Votes: {props.upVoteAnswer} | Down Votes: -{props.downVoteAnswer}
          </p>
        </div>
      </div>
    </>
  )
}

export default Answer
