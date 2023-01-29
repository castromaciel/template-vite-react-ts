import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Template: Vite + React + Ts</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is 
          {' '}
          {count}
        </button>
        <p>
          Edit 
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <p>
          Follow me at
          {' '}
          <a href="https://github.com/castromaciel" target="_blank" rel="noreferrer">github</a>
        </p>
      </div>
    </div>
  )
}

export default App
