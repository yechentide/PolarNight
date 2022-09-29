import { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import "./style/App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <ul>
        <li><Link to={"hello"}>Hello</Link></li>
        <li><Link to={"http"}>axios</Link></li>
      </ul>
      <hr className="border-2 border-pink-300 my-3" />
      <Outlet />
    </div>
  )
}

export default App
