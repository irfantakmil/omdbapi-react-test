import React from 'react'
import Home from './components/home'
import {HashRouter as Router, Route} from 'react-router-dom'
import MovieDetail from './components/movieDetail'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/movie/:id" component={MovieDetail}/>
      </div>
    </Router>
  )
}

export default App