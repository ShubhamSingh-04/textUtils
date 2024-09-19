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
  const btnText = mystyle.backgroundColor === 'white' ? 'Turn on Dark Mode' : 'Turn on Light Mode';

  useEffect(() => {
    if (mode === 'dark')
      toggleStyle(mystyleBlack);
    else
      toggleStyle(mystyleWhite);
  }, [mode]); // Only `mode` is needed here

  return (
    <>
      <button type="button" className="btn btn-primary" style={mystyle} onClick={toggleModeParent}>
        {btnText}
      </button>
    </>
  )
}
