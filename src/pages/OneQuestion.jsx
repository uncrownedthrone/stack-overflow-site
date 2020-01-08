import React from 'react'

const OneQuestion = () => {
  const [question, setQuestion] = useState([])
  const [answers, setAnswers] = useState([])

  const getQuestion = async () => {
    await axios
      .get(
        `https://localhost:5001/api/Question/question/${props.match.params.id}`
      )
      .then(resp => {
        setQuestion(resp.data[0])
      })
  }

  const getAnswers = async () => {
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
    </main>
  )
}

export default OneQuestion
