import React from 'react'

const Title = ({value, className = 'Title'}) => {
  return (
    <h2 className={className}>
      {value}
    </h2>
  )
}

export default Title
