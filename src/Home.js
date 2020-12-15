import React from 'react'
import './Home.css'
import home_photo from './images/home_photo.jpg'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src={home_photo}
                alt=""/>
            </div>

            <div className="home__row">
                <Product/>
            </div>
        </div>
    )
}

export default Home
