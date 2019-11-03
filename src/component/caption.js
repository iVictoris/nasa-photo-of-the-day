import React from 'react'

const Caption = ({value, className = 'Caption'}) => {
  return (
    <p className={className}>
      {value}
    </p>
  )
}

export default Caption
