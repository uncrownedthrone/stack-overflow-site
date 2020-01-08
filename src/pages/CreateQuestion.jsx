import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CreateQuestion = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const addNewQuestion = async e => {
    const resp = await axios.post(
      `https://localhost:5001/api/Question/CreateQuestion`,
      {
        shortDescription: title,
        content: content,
      }
    )
  }
  useEffect(() => {
    addNewQuestion()
  }, [])

  return (
    <main>
      <form onSubmit={addNewQuestion}>
        <input placeholder="Title" required type="text" />
        <input placeholder="Content" required type="text" />
        <button>Submit</button>
      </form>
    </main>
  )
}

export default CreateQuestion
