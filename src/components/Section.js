import React from 'react'
import './styles/Section.css'
import me from './assets/me.jpeg'

const Section = () => {
    return (
        <section className='main-section'>
            <div className="container">
                <div className="texts">
                    <h1 className="h1-big">Pardeev Reddy Maramreddy</h1>
                    <p>Write about</p>
                    <button className='text-button'>My Work</button>
                </div>
                <div className='image'>
                    <img src={me} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Section
