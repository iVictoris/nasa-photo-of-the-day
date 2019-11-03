import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";
import Caption from "./Caption";
import Image from "./Image";
import Title from "./Title";

const PhotoCard = ({ className = "PhotoCard", apiKey = "DEMO_KEY" }) => {
  const extractData = data => {
    if (data) {
      const { explanation, hdurl, url, title, media_type } = data;
      const neededData = {
        explanation,
        hdurl,
        url,
        title,
        media_type
      };
      return neededData;
    }
  };
  const [data, setData] = useState({});

  useEffect(() => {
    // fetch data to...
    // https://api.nasa.gov/planetary/apod?api_key=${apiKey}
    const apiRequest = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    axios
      .get(apiRequest)
      .then(({ data }) => {
        const { media_type, ...neededData } = extractData(data);
        if (media_type !== "image") {
          return axios.get(apiRequest.concat(`&date=2012-03-14`));
        }
        setData(neededData);
      })
      .then((newData) => {
        if (newData) {
          const {data} = newData;
          const neededData = extractData(data);
          setData(neededData);
        }
      })
      .catch(console.log);
  }, []);

  const { title, url, explanation } = data;

  return (
    <section className={className}>
      <Card className='card'>
        <section className='card-body'>
        <Title value={title} className='card-title' />
        <Image src={url} className='card-img-top'/>
        <Caption value={explanation} className='card-text' />
        </section>
      </Card>
    </section>
  );
};

export default PhotoCard;
