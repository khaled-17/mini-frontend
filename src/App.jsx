import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Get from './components/Get'
import Post from './components/Post'
 
function App() {
  const [count, setCount] = useState(0)



  const [displayUrl, setDisplayUrl] = useState('https://todo.egysnakes.com/');

  


  return (
    <>
      <div>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
       <p>{displayUrl}</p>



      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       <div style={{display:'flex',}}>
        
        <Get DisPlayUrl={displayUrl}  url={'api/v2/tasks'}  title={'api/v2/tasks'}/>
        <Get DisPlayUrl={displayUrl}  url={'api/v2/'}  title={'api/v2/'}/>
        <Get DisPlayUrl={displayUrl}  url={'api/v2/name'}  title={'api/v2/name'}/>
         </div>
      </div>
      <Post />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
