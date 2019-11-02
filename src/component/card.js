import React from 'react'

const Card = ({className = 'Card', children}) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

export default Card
