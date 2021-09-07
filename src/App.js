import { useState, useEffect } from 'react'
import './styles/App.css'
import Developer from './components/Developer'
import { getGitHubOrgMemberData } from './api'

export const App = () => {
  const [developers, setDevelopers] = useState([])

  useEffect(() => {
    getGitHubOrgMemberData().then((data) => {
      setDevelopers(data.data)
    })
  }, [])

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
        .filter((dev) => !['amygori', 'jeanetteobr'].includes(dev.login))
        .map((dev) => {
          return (
            <Developer
              name={dev.login}
              key={dev.id}
              favorited={dev.favorited}
              handleFavorite={handleFavorite}
            />
          )
        })}
    </main>
  )
}
