import pineappleLogo from '../assets/pineapple.svg'
import '../styles/MainBody.css'

function Home() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={pineappleLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>This is Rebido's blog</h1>
      <p className="read-the-docs">
        欢迎光临...
      </p>
    </>
  )
}

export default Home