import React from 'react'

const Image = ({src, className = 'Image'}) => {
  return (
    <>
      <img src={src} className={className} />
    </>
  )
}

export default Image
