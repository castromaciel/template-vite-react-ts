import { useState } from 'react'
import { ImageLink } from './components'
import { HOME_LINKS } from './constants'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((count) => count + 1)
  }

  return (
    <div className="App">
      <div>
        {
          HOME_LINKS.map((imageLink) => <ImageLink key={imageLink.alt} {...imageLink} />)
        }
      </div>
      <h1>Template: Vite + React + Ts</h1>
      <div className="card">
        <button type="button" onClick={handleClick}>
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
          Use this
          {' '}
          <a href="https://github.com/castromaciel/template-vite-react-ts" target="_blank" rel="noreferrer">template</a>
        </p>
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
