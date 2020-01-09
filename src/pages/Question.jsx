import React from 'react'

const Question = props => {
  return (
    <div>
      <ul>
        <li>
<<<<<<< HEAD
          <h3>{props.description}</h3>
          <p>{props.content}</p>
          <p>{props.dateOfPost}</p>
=======
          <h3>Title: {props.description}</h3>
          <p>Content: {props.content}</p>
          <p>Date: {props.dateOfPost}</p>
>>>>>>> 2a0511a92dbef5b75b0d7ed8fc6b62fa5d6faaa6
          <div>
            <span>Upvotes: {props.upDownVoteQuestion}</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Question
