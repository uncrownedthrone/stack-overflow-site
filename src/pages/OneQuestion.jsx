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
    if (resp.status === 200) {
      setQuestion(question => {
        question.upVoteQuestion += 1
        return {
          ...question,
        }
      })
    }
  }

  const clickDownVoteQuestion = async () => {
    const resp = await axios.put(
      `https://localhost:5001/api/Question/downvote/${props.match.params.id}`
    )
    if (resp.status === 200) {
      setQuestion(question => {
        question.downVoteQuestion -= 1
        return {
          ...question,
        }
      })
    }
  }

  const clickUpVoteAnswer = async e => {
    const resp = await axios.put(
      `https://localhost:5001/api/Answers/upvote/${e.currentTarget.value}`
    )
    if (resp.status === 200) {
      setAnswers(answers => {
        answers.upVoteAnswer += 1
        return {
          ...answers,
        }
      })
    }
  }

  const clickDownVoteAnswer = async e => {
    const resp = await axios.put(
      `https://localhost:5001/api/Answers/downvote/${e.currentTarget.value}`
    )
    if (resp.status === 200) {
      setAnswers(answers => {
        answers.downVoteAnswer -= 1
        return {
          ...answers,
        }
      })
    }
  }

  useEffect(() => {
    getQuestion()
    getAnswers()
  }, [answers])

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

      {answers.length > 0 && (
        <ul>
          {answers.map((answers, i) => {
            return (
              <>
                <li className="answers" key={i}>
                  <Answer
                    answerContent={answers.answerContent}
                    dateOfPost={answers.dateOfPost}
                    upVoteAnswer={answers.upVoteAnswer}
                    downVoteAnswer={answers.downVoteAnswer}
                  />
                </li>
                <br />
                <button value={answers.id} onClick={clickUpVoteAnswer}>
                  Upvote
                </button>
                <button value={answers.id} onClick={clickDownVoteAnswer}>
                  Downvote
                </button>
              </>
            )
          })}
        </ul>
      )}

      <form onSubmit={submitAnswer}>
        <input
          type="text"
          placeholder="Add an Answer"
          value={answers.content}
          name="content"
          onChange={e => setNewAnswer(e.target.value)}
        />
        <button onClick={reloadPage}>SUBMIT ANSWER</button>
      </form>
    </main>
  )
}

export default OneQuestion
