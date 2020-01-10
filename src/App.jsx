import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import CreateQuestion from './pages/CreateQuestion'
import OneQuestion from './pages/OneQuestion'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/question/:id" component={OneQuestion}></Route>
        <Route exact path="/createquestion" component={CreateQuestion}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
