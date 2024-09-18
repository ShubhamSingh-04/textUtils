import React from 'react'

export default function Alert({alert}) {
  return (
    alert && (<div>
    <div className="alert alert-success" role="alert" style = {{zIndex:'7'}}>
  Text Copied
</div>
    </div>)
  )
}
