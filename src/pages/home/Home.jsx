import React from 'react'
import Featured from '../../components/Featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import CatCard from '../../components/catCard/CatCard'
import { cards, projects } from '../../data.js'

function Home() {
    return (
        <div>
            <Featured />
            <TrustedBy />
            <Slide>
                {cards.map((card) => {
                    return <CatCard key={card.id} card={card} />
                })}
            </Slide>
            <div className='features'>
                <div className='container'>
                    <div className='item'>

                    </div>
                    <div className='item'>
                      <video src='./img/video.mp4' controls></video>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
