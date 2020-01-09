import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from './Question'
import Answer from '../components/Answer'

const OneQuestion = props => {
  const [question, setQuestion] = useState({})
  const [answers, setAnswers] = useState([])
  const [newAnswer, setNewAnswer] = useState('')
  const [votes, setVotes] = useState(0)

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
          upDownVoteAnswer: votes,
          upDownVoteQuestion: votes,
        }
      )
      console.log(resp)
    }
  }

  const upVoteQuestion = async () => {
    const resp = await axios.put(
      `https://localhost:5001/api/Question/upvote/${props.match.params.id}`
    )
    setQuestion(question => {
      return {
        ...question,
        upDownVoteQuestion: question.upDownVoteQuestion + 1,
      }
    })
  }

  const downVoteQuestion = () => {
    setQuestion(question => {
      return {
        ...question,
        upDownVoteQuestion: question.upDownVoteQuestion - 1,
      }
    })
  }

  const upVoteAnswer = () => {
    setAnswers(answers => {
      return {
        ...answers,
        upDownVoteAnswer: answers.upDownVoteAnswer + 1,
      }
    })
  }

  const downVoteAnswer = () => {
    setAnswers(answers => {
      return {
        ...answers,
        upDownVoteAnswer: answers.upDownVoteAnswer - 1,
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
          upDownVoteQuestion={question.upDownVoteQuestion}
        />
        <button onClick={upVoteQuestion}>Upvote</button>
        <button onClick={downVoteQuestion}>Downvote</button>
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

      <section>
        <button onClick={upVoteAnswer}>Upvote</button>
        <button onClick={downVoteAnswer}>Downvote</button>
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
