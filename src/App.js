import { useState } from 'react'
import './styles/App.css'

export const App = () => {
  const [developers] = useState(['Tatiana', 'Laura', 'Albany'])
  return (
    <main>
      <h1>Developers for Hire!</h1>
      {developers.map((dev, idx) => (
        <Developer name={dev} expertise="front-end developer" key={idx} />
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
