import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const CreateQuestion = () => {
  const [question, setQuestion] = useState({
    content: '',
    description: '',
  })
  const [questionId, setQuestionId] = useState()
  const [
    wasQuestionCreatedSuccessfully,
    setWasQuestionCreatedSuccessfully,
  ] = useState(false)

  const updateQuestionObject = e => {
    e.persist()
    setQuestion(prevQuestion => {
      return {
        ...prevQuestion,
        [e.target.name]: e.target.value,
      }
    })
  }

  const submitQuestion = async e => {
    e.preventDefault()
    const isValid = Object.keys(question).reduce((acc, key) => {
      return acc && question[key] !== ''
    }, true)

    if (isValid) {
      const resp = await axios.post(
        'https://localhost:5001/api/Question/CreateQuestion',
        {
          ...question,
        }
      )
      if (resp.status === 200) {
        setQuestionId(resp.data.id)
      }
    }
  }

  useEffect(() => {
    if (questionId) {
      setWasQuestionCreatedSuccessfully(true)
    }
  }, [questionId])

  return wasQuestionCreatedSuccessfully ? (
    <Redirect to={`/question/${questionId}`} />
  ) : (
    <div>
      <form onSubmit={submitQuestion}>
        <input
          type="text"
          placeholder="Question Topic"
          value={question.content}
          name="content"
          onChange={updateQuestionObject}
        />
        <input
          type="text"
          placeholder="What is your question?"
          value={question.description}
          name="description"
          onChange={updateQuestionObject}
        />
        <button>CREATE QUESTION</button>
      </form>
    </div>
  )
}

export default CreateQuestion
