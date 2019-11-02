import React, {useState, useEffect} from 'react'

import Card from './Card';
import Caption from './Caption';
import Image from './Image';
import Title from './Title';

const PhotoCard = ({className = 'PhotoCard', apiKey = ''}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // fetch data to...
    // https://api.nasa.gov/planetary/apod?api_key=${apiKey}
    
  }, []);
  
  return (
    <section className={className}>
      <Card>
        <Title />
        <Image />
        <Caption />
      </Card>
    </section>
  )
}

export default PhotoCard
