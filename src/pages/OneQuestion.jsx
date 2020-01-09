import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from './Question'
import Answer from '../components/Answer'

const OneQuestion = props => {
  const [question, setQuestion] = useState({})
  const [answers, setAnswers] = useState([])
  const [newAnswer, setNewAnswer] = useState('')

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

  const reloadPage = () => {
    window.location.reload()
  }

  const submitAnswer = async e => {
    e.preventDefault()
    const isValid = Object.keys(answers).reduce((acc, key) => {
      return acc && answers[key] !== ''
    }, true)

    if (isValid) {
      const resp = await axios.post(
        'https://localhost:5001/api/Answers/CreateAnswer',
        {
          answerContent: newAnswer,
          questionPostId: question.id,
        }
      )
    }
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
        {answers.map((answers, i) => {
          return (
            <li className="answers" key={i}>
              <Answer
                answerContent={answers.answerContent}
                dateOfPost={answers.dateOfPost}
                upDownVoteAnswer={answers.upDownVoteAnswer}
              />
            </li>
          )
        })}
      </ul>

      <form onSubmit={submitAnswer}>
        <input
          type="text"
          placeholder="Add an Answer"
          value={answers.content}
          name="content"
          onChange={e => setNewAnswer(e.target.value)}
        />
        <button onClick={reloadPage}>CREATE ANSWER</button>
      </form>
    </main>
  )
}

export default OneQuestion
