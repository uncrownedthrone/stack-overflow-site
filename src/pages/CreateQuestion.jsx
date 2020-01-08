import React, { useState } from 'react'
import axios from 'axios'

const CreateQuestion = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const addQuestion = async e => {
    await axios.post(`https://localhost:5001/api/Question/CreateQuestion`, {
      shortDescription: title,
      content: content,
    })
  }

  const updateTitle = e => {
    setTitle(e.target.value)
  }

  const updateContent = e => {
    setContent(e.target.value)
  }

  return (
    <main>
      <form onSubmit={addQuestion}>
        <input
          placeholder="Title"
          required
          type="text"
          onChange={updateTitle}
        />
        <input
          placeholder="Content"
          required
          type="text"
          onChange={updateContent}
        />
        <button>Submit</button>
      </form>
    </main>
  )
}
export default CreateQuestion

// import axios from 'axios'

// const CreateQuestion = () => {
//   const [question, setQuestion] = useState([])
//   const [title, setTitle] = useState('')
//   const [content, setContent] = useState('')

//   const addNewQuestion = async e => {
//     const resp = await axios.post(
//       `https://localhost:5001/api/Question/CreateQuestion`,
//       {
//         shortDescription: title,
//         content: content,
//       }
//     )
//     setQuestion(resp.data)
//   }
//   useEffect(() => {
//     addNewQuestion()
//   }, [])

//   return (
//     <h2>New Question</h2>
//     <section>
//     {questions.map(question => {
//       return (
//         <>
//         <p>{questions.</p>
//         </>
//       )
//     })}
//     </section>
//   )
// }
// }
