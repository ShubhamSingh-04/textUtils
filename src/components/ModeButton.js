import React, { useEffect, useState } from 'react'

export default function ModeButton({ toggleModeParent, mode }) {

  const mystyleWhite = {
    color: 'black',
    backgroundColor: 'white',
    border: '2px solid black'
  }

  const mystyleBlack = {
    color: 'white',
    backgroundColor: 'black',
    border: '2px solid white'
  }

  const [mystyle, toggleStyle] = useState(mystyleBlack);
  const btnText = mystyle.backgroundColor === 'white' ? 'Light Mode' : 'Dark Mode';

  useEffect(() => {
    if (mode === 'light')
      toggleStyle(mystyleWhite);
    else
      toggleStyle(mystyleBlack);
  }, [mode]); // Only `mode` is needed here

  return (
    <>
      <button type="button" className="btn btn-primary" style={mystyle} onClick={toggleModeParent}>
        {btnText}
      </button>
    </>
  )
}
