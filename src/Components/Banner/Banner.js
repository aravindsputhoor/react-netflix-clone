import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='banner_button'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>Lorem ipsum dolor sit amet. Sed veniam ipsum qui consequuntur architecto At explicabo quidem aut exercitationem deserunt aut sint ducimus et ipsum voluptatem.</h1>
      </div>
      <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner