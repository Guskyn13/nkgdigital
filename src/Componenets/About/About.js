import React from 'react';
import './About.css'
import { parkPhoto, rockies } from '../../Assets'
import SectionTitle from '../SectionTitle'

const About = () => {
    return (
        <div className='about_container'>
            <div className='about_leftside'>
                <img src={parkPhoto} />
            </div>
            <div className='about_middle'>
                <div className='sectionTitle'>
                    <SectionTitle
                        subheading="Let me introduce myself"
                        heading="About Me"
                    />
                </div>
                <p>You are meeting Nathan, a freelance website developer and designer from Florida. Creator of professional pages of all sorts. Would love to help you turn those ideas into a beautiful reality.</p>
                <div className="about_buttons">
                    <button>Works</button>
                    <button>Read More</button>
                </div>
            </div>
            <div className='about_rightside' />
        </div>
    )
}

export default About