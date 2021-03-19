import { useState } from 'react'
import './styles/App.css'

export const App = () => {
  const [developers] = useState([
    {
      name: 'Tatiana',
      expertise: 'front-end developer',
      availableForHire: true,
    },
    {
      name: 'Albany',
      expertise: 'front-end developer',
      availableForHire: false,
    },
    {
      name: 'Laura',
      expertise: 'front-end developer',
      availableForHire: true,
    },
    {
      name: 'Pearl',
      expertise: 'back-end developer',
      availableForHire: false,
    },
  ])

  return (
    <main>
      <h1>Developers for Hire!</h1>
      {developers.map((dev, idx) => {
        if (dev.availableForHire) {
          return (
            <Developer name={dev.name} expertise={dev.expertise} key={idx} />
          )
        } else {
          return null
        }
      })}
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
