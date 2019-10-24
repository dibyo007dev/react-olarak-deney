import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"

function App() {
  return (
    <div className="App">
      <h1>Welcome to Dibyo's portfolio</h1>
      <h2>Hi this is my awesome portfolio .. lets do this </h2>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
