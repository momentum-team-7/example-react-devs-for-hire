import { useState } from 'react'
import './styles/App.css'

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
      {developers.map((dev, idx) => {
        if (dev.availableForHire) {
          return (
            <Developer
              name={dev.name}
              expertise={dev.expertise}
              key={idx}
              favorited={dev.favorited}
              handleFavorite={handleFavorite}
            />
          )
        } else {
          return null
        }
      })}
    </main>
  )
}

const Developer = (props) => {
  const { name, expertise, favorited, handleFavorite } = props
  return (
    <div className={favorited ? 'dev dev--favorited' : 'dev'}>
      <h2>{name}</h2>
      <p>{expertise}</p>
      <button onClick={() => handleFavorite(name, !favorited)}>
        {favorited ? 'unfav 💔' : 'fav ❤️'}
      </button>
    </div>
  )
}
