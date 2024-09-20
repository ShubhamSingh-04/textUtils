import React from 'react'

export default function Alert({ alert }) {
  return (
    <div style={{ height: '55px',}}>
      {alert && (<div>
        <div className="alert alert-success" role="alert" style={{ zIndex: '7', position: 'absolute', width: '100%' }}>
          Text Copied
        </div>
      </div>)
      }
    </div>
  )
}
