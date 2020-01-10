import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from './Question'
import Answer from '../components/Answer'

const OneQuestion = props => {
  const [question, setQuestion] = useState({})
  const [answers, setAnswers] = useState([])
  const [newAnswer, setNewAnswer] = useState('')
  const [upVoteAnswer, setUpVoteAnswer] = useState(0)
  const [downVoteAnswer, setDownVoteAnswer] = useState(0)
  const [upVoteQuestion, setUpVoteQuestion] = useState(0)
  const [downVoteQuestion, setDownVoteQuestion] = useState(0)

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
      console.log(resp)
    }
  }

  const clickUpVoteQuestion = async () => {
    const resp = await axios.put(
      `https://localhost:5001/api/Question/upvote/${props.match.params.id}`
    )
    setUpVoteQuestion(question => {
      return {
        ...question,
        upVoteQuestion: question.upVoteQuestion + 1,
      }
    })
  }

  const clickDownVoteQuestion = () => {
    setDownVoteQuestion(question => {
      return {
        ...question,
        downVoteQuestion: question.downVoteQuestion - 1,
      }
    })
  }

  const clickUpVoteAnswer = () => {
    setUpVoteAnswer(answers => {
      return {
        ...answers,
        upVoteAnswer: answers.upVoteAnswer + 1,
      }
    })
  }

  const clickDownVoteAnswer = () => {
    setDownVoteAnswer(answers => {
      return {
        ...answers,
        downVoteAnswer: answers.downVoteAnswer - 1,
      }
    })
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
          upVoteQuestion={question.upVoteQuestion}
          downVoteQuestion={question.downVoteQuestion}
        />
        <button onClick={clickUpVoteQuestion}>Upvote</button>
        <button onClick={clickDownVoteQuestion}>Downvote</button>
      </div>
      <ul>
        {answers.map((answers, i) => {
          return (
            <li className="answers" key={i}>
              <Answer
                answerContent={answers.answerContent}
                dateOfPost={answers.dateOfPost}
                upVoteAnswer={answers.upVoteAnswer}
                downVoteAnswer={answers.downVoteAnswer}
              />
            </li>
          )
        })}
      </ul>

      <section>
        <button onClick={clickUpVoteAnswer}>Upvote</button>
        <button onClick={clickDownVoteAnswer}>Downvote</button>
      </section>
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
