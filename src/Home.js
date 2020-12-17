import React from 'react'
import './Home.css'
import home_photo from './images/home_photo.jpg'
import ProductList from './ProductList'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src={home_photo}
                alt=""/>
            </div>

            <div className="home__row">
                <ProductList/>
            </div>
        </div>
    )
}

export default Home
