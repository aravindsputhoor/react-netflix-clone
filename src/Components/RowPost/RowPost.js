import React, {useEffect, useState} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {IMG_URL, API_KEY} from '../../constants/constants'

const RowPost = (props) => {
  const [movies, setMovie] = useState([]);
  const [urlId, setUrlId] = useState('');
  
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data.results);
      setMovie(response.data.results);
    }).catch((error)=>{console.log(error);});
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const handleMovie = (id) =>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length !=0){
        setUrlId(response.data.results[0]);
      }
    }).catch((err)=>{console.log(err);})
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj, index)=>{
         return <img key={index} className={props.isSmall ? 'small-poster' : 'poster' } src={IMG_URL+obj.backdrop_path} alt="poster" onClick={()=>handleMovie(obj.id)} />
        })}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts}></YouTube>}
    </div>
  )
}

export default RowPost