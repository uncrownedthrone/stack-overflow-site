import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import CreateQuestion from './pages/CreateQuestion'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="*" component={NotFound}></Route>
        <Route exact path="/createquestion" component={CreateQuestion}></Route>
      </Switch>
    </Router>
  )
}

export default App
