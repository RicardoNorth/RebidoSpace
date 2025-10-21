import React, { useEffect, useState } from 'react'
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
        <div className='headerlinks'></div>
        <a href="">
          <img src={pineappleLogo} className='pineapplelogo'/>
        </a>
        <a href=''>Intro</a>
        <a href=''>编程作品</a>
        <a href="">读书笔记</a>
        <a href="">好的故事</a>
        <a href="">数据中心</a>
        <a href="">闲置物品</a>
        <a href="">联系我</a>
        <div className='time'>
          {time}
        </div>
      </div>
      
    </>
  )
}

export default Header