import React from 'react'

const OneQuestion = () => {
  const [question, setQuestion] = useState({})
  const [answers, setAnswers] = useState([])

  const getQuestion = async () => {
    await axios
      .get(
        `https://localhost:5001/api/Question/question/${props.match.params.id}`
      )
      .then(res => {
        console.log(res.data[0])
        setQuestion(res.data[0])
      })
  }

  const getAnswers = async () => {
    await axios
      .get(
        `https://localhost:5001/api/Question/AllAnswersJoin/${props.match.params.id}`
      )
      .then(res => {
        console.log(res)
        setAnswers(res.data)
      })
  }

  useEffect(() => {
    getQuestion()
    getAnswers()
  }, [])

  return (
    <main className="card m-sm-1">
      <div className="card-body">
        <h1 className="card-title">Title: {question.shortDescription}</h1>
        <p className="card-text">Content: {question.content}</p>

        <p className="card-text">Date Created: {question.dateOfPost}</p>
        <p className="card-text">
          Praise: {question.praisesForMyQuestionRelevance}
        </p>
      </div>
      <div className="things"></div>

      {answers.map((item, i) => {
        return (
          <li className="card m-sm-1" key={i}>
            <Answer
              className="card-body"
              content={item.answerContent}
              date={item.dateOfPost}
              praise={item.praisesForMyAnswer}
            />
          </li>
        )
      })}
    </main>
  )
}
  return <div>THIS IS THE ONE QUESTION PAGE</div>
}

export default OneQuestion
