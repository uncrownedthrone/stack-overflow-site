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
          description={question.description}
          content={question.content}
          dateOfPost={question.dateOfPost}
          upDownVoteQuestion={question.UpDownVoteQuestion}
        />
      </div>
      <ul>
        {answers.map((a, i) => {
          return (
            <li key={i}>
              <Answer
                content={a.answerContent}
                date={a.dateOfPost}
                praise={a.UpDownVoteAnswer}
              />
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default OneQuestion
