import React, { useEffect, useState } from 'react'
import Question from './Question'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
  const [data, setData] = useState([])

  const getData = () => {
    axios.get('https://localhost:5001/api/Question/').then(resp => {
      setData(resp.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <ul className="1">
        {data.map((e, i) => {
          return (
            <div className="2" key={i}>
              <div className="3">
                <Link className="4" to={`/question/${e.id}`}>
                  <Question
                    className="5"
                    title={e.description}
                    shortDesc={e.content}
                    vote={e.upDownVoteQuestion}
                    date={e.dateOfPost}
                  />
                </Link>
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
export default HomePage
