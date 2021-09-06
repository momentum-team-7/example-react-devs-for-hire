import { useState } from 'react'

export default function Developer({
  name,
  expertise,
  favorited,
  handleFavorite,
}) {
  const [show, setShow] = useState(false)

  return (
    <div className={favorited ? 'dev dev--favorited' : 'dev'}>
      <h2>{name}</h2>
      {show ? (
        <div>
          <button className="btn-sm controls" onClick={() => setShow(false)}>
            Hide expertise
          </button>
          <p>{expertise}</p>
        </div>
      ) : (
        <button className="btn-sm controls" onClick={() => setShow(true)}>
          Show expertise
        </button>
      )}
      <div>
        <button
          className="fav-btn"
          onClick={() => handleFavorite(name, !favorited, 'something')}
        >
          {favorited ? '💔' : '❤️'}
        </button>
      </div>
    </div>
  )
}
