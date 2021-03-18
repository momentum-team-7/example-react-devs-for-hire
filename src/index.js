import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [developers] = useState(['Tatiana', 'Laura', 'Albany'])
  return (
    <main>
      <h1>Developers for Hire!</h1>
      {developers.map((dev) => (
        <Developer name={dev} expertise="front-end developer" />
      ))}
    </main>
  )
}

const Developer = (props) => {
  const { name, expertise } = props
  return (
    <div className="dev">
      <h2>{name}</h2>
      <p>{expertise}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
