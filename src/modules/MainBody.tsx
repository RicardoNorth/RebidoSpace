import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Works from '../pages/Works'


const MainBody = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/notes"  />
      </Routes>
    </>
  )
}

export default MainBody