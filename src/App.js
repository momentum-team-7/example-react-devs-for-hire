import { useState } from 'react'
import './styles/App.css'
import Developer from './components/Developer'

export const App = () => {
  const [developers, setDevelopers] = useState([
    {
      name: 'Tatiana',
      expertise: 'front-end developer',
      availableForHire: true,
      favorited: false,
    },
    {
      name: 'Albany',
      expertise: 'front-end developer',
      availableForHire: false,
      favorited: false,
    },
    {
      name: 'Laura',
      expertise: 'front-end developer',
      availableForHire: true,
      favorited: false,
    },
    {
      name: 'Pearl',
      expertise: 'back-end developer',
      availableForHire: false,
      favorited: false,
    },
  ])

  const handleFavorite = (name, favorited) => {
    const newDevs = developers.map((dev) => {
      if (dev.name === name) {
        return { ...dev, favorited }
      }
      return dev
    })
    setDevelopers(newDevs)
  }

  return (
    <main>
      <h1>Developers for Hire!</h1>
      {developers
        .filter((dev) => dev.availableForHire)
        .map((dev) => {
          return (
            <Developer
              name={dev.name}
              expertise={dev.expertise}
              key={dev.name}
              favorited={dev.favorited}
              handleFavorite={handleFavorite}
            />
          )
        })}
    </main>
  )
}
