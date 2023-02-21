import { useState } from 'react'
import './App.css'
import { MyComponent } from 'components-react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Stencil Component Example</h1>
      </header>

      <article>
        <p>Stencil component:</p>
        <MyComponent first="joan" last="Test"></MyComponent>
      </article>
    </div>
  )
}

export default App
