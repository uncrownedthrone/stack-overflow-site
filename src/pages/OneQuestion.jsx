import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from './Question'
import Answer from '../components/Answer'

const OneQuestion = props => {
  const [question, setQuestion] = useState([])
  const [answers, setAnswers] = useState([])

  const getQuestion = async () => {
    const resp = await axios.get(
      `https://localhost:5001/api/Question/${props.match.params.id}`
    )
    setQuestion(resp.data)
    console.log(resp.data)
  }

  const getAnswers = async () => {
    const resp = await axios.get(
      `https://localhost:5001/api/Question/AllAnswersJoin/${props.match.params.id}`
    )
    setAnswers(resp.data)
  }

  useEffect(() => {
    getQuestion()
    getAnswers()
  }, [])

  return (
    <main>
      <div>
        <Question
          content={question.content}
          description={question.description}
          dateOfPost={question.dateOfPost}
          upDownVoteQuestion={question.UpDownVoteQuestion}
        />
      </div>
      <ul>
        <li>
          <Answer
            content={answers.answerContent}
            dateOfPost={answers.dateOfPost}
            upDownVoteAnswer={answers.upDownVoteAnswer}
            questionPostId={props.questionPostId}
          />
        </li>
      </ul>
    </main>
  )
}

export default OneQuestion
