import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import pineappleLogo from '../assets/pineapple.svg'
import '../styles/Header.css'



const Header: React.FC = () => {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formattedTime = now.toLocaleTimeString([], { hour12: false})
      setTime(formattedTime)
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)

    return () => clearInterval(timer)
  }, [])


  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={pineappleLogo} className='pineapplelogo'/>
        </Link>
        <Link to="/">Intro</Link>
        <Link to="/works">编程作品</Link>
        <Link to="">读书笔记</Link>
        <Link to="">好的故事</Link>
        <Link to="">数据中心</Link>
        <Link to="">闲置物品</Link>
        <Link to="">联系我</Link>
        <div className='time'>
          {time}
        </div>
      </div>
      
    </>
  )
}

export default Header