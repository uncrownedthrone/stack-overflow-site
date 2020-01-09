import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Answer from '../components/Answer'

const OneQuestion = () => {
  const [question, setQuestion] = useState([])
  const [answers, setAnswers] = useState([])

  const getQuestion = async props => {
    await axios
      .get(
        `https://localhost:5001/api/Question/question/${props.match.params.id}`
      )
      .then(resp => {
        setQuestion(resp.data[0])
      })
  }

  const getAnswers = async props => {
    await axios
      .get(
        `https://localhost:5001/api/Question/AllAnswersJoin/${props.match.params.id}`
      )
      .then(resp => {
        setAnswers(resp.data)
      })
  }

  useEffect(() => {
    getQuestion()
    getAnswers()
  }, [])

  return (
    <main>
      <div>
        <h1>Title: {question.shortDesc}</h1>
        <p>Content: {question.content}</p>

        <p>Date Created: {question.dateOfPost}</p>
        <p>Votes: {question.UpDownVoteQuestion}</p>
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
