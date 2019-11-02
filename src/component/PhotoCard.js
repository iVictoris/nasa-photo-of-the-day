import React, {useState, useEffect} from 'react'
import axios from 'axios';

import Card from './Card';
import Caption from './Caption';
import Image from './Image';
import Title from './Title';

const PhotoCard = ({className = 'PhotoCard', apiKey = ''}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // fetch data to...
    // https://api.nasa.gov/planetary/apod?api_key=${apiKey}

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`).then(console.log).catch(console.log);

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
