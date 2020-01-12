import React, { useEffect, useState } from 'react'
import Question from './Question'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const getData = async () => {
    const resp = await axios.get('https://localhost:5001/api/Question/')
    setData(resp.data)
  }

  const getSearchResults = async () => {
    const resp = await axios.get(
      'https://localhost:5001/api/Question/searchterm/' + searchTerm
    )
    setData(resp.data)
    console.log(searchTerm)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {data.map((question, i) => {
        return (
          <div>
            <div>
              <Link to={`/question/${question.id}`}>
                <Question
                  description={question.description}
                  content={question.content}
                  dateOfPost={question.dateOfPost}
                  upVoteQuestion={question.upVoteQuestion}
                  downVoteQuestion={question.downVoteQuestion}
                />
              </Link>
            </div>
          </div>
        )
      })}
      <input
        type="search"
        placeholder="Search Questions"
        value={searchTerm}
        name="description"
        onChange={e => setSearchTerm(e.target.value)}
      ></input>
      <button onClick={getSearchResults}>Search</button>
      <button onClick={getData}>Clear Question</button>
    </div>
  )
}
export default HomePage
