import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import CreateQuestion from './pages/CreateQuestion'
import Question from './pages/Question'
import OneQuesiton from './pages/OneQuestion'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/createquestion" component={CreateQuestion}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
