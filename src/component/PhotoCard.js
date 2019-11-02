import React, {useState, useEffect} from 'react'
import axios from 'axios';

import Card from './Card';
import Caption from './Caption';
import Image from './Image';
import Title from './Title';

const PhotoCard = ({className = 'PhotoCard', apiKey = 'DEMO_KEY'}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // fetch data to...
    // https://api.nasa.gov/planetary/apod?api_key=${apiKey}

    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`).then(({data}) => {
      const {explanation, hdurl, url, title, media_type} = data;
      const neededData = {
        explanation, hdurl, url, title, media_type
      }
      setData(neededData)
    })
    .catch(console.log);
    // data = {
      // explanation,
      // hdurl,
      // url,
      // title,
      // media_type
    }, []);

    const {title, url, explanation} = data;
  
  return (
    <section className={className}>
      <Card>
        <Title value={title}/>
        <Image src={url}/>
        <Caption value={explanation}/>
      </Card>
    </section>
  )
}

export default PhotoCard
