import React from 'react'
import './styles/Second.css'
import project from './assets/me.jpeg'

const Second = () => {
    return (
        <section className='section-2'>
            <h1 className='about-me'>About Me</h1>
            <div className='container-2'>
                <div className='image-cont'>
                    <img src={project} alt="" />
                </div>
                <div className='text-2'>
                    <p>1. dfvd</p>
                    <p>2. sdc</p>
                    <p>3. dscvsd</p>
                    <p>4. sdcv</p>
                </div>
            </div>
            
        </section>
    )
}

export default Second
