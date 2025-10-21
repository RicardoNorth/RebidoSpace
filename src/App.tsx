import { BrowserRouter as Router } from 'react-router-dom'

import MainBody from './modules/MainBody'
import Header from './modules/Header'

import './App.css'

function App() {
  return (
    <Router>
      <Header></Header>
      <MainBody />
    </Router>
  )
}

export default App
