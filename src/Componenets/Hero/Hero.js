import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero_container'>
            <div className='hero_info'>
                <h1>Nathan Gusky</h1>
                <div className='hero_skills'>
                    <p className='hero_border1'>Web Developer</p>
                    <p className='hero_border2'>Full Stack Engineer</p>
                    <p>Drone Photography</p>
                </div>
            </div>
        </div>
    )
}

export default Hero