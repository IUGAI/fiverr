import React from 'react'
import './CatCard.scss'
import {Link} from 'react-router-dom'

export default function CatCard({card}) {
  return (
   <Link to='/gigs/cat=design'>
    <div className='catCard'>
    <img src={card.img}/>
    <span className='desc'>{card.desc}</span>
    <span className='title'>{card.title}</span>
    </div>
   </Link>
  )
}
