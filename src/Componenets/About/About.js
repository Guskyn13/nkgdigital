import React from 'react';
import styled from 'styled-components';
import './About.css'
import img from '../../Assets/About1.jpg'
import SectionTitle from '../SectionTitle'

const AboutStyle = styled.div`
.about_container {
    height: 100vh;
    width: 100vw;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    }
.about_leftside {
    background-color: #000;
    width: 25%;
    height: 75%;
    overflow: hidden;
}
.sectionTitle {
    color: #fff;
    padding-bottom: 25px;
}
`

const About = () => {
    return (
        <AboutStyle>
            <div className='about_container'>
                <div className='about_leftside'>
                    <img src={img} />
                </div>
                <div className='about_rightside'>
                    <div className='sectionTitle'>
                        <SectionTitle
                            subheading="Let me introduce myself"
                            heading="About Me"
                        />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque finibus suscipit. Cras vestibulum, nibh sed vestibulum scelerisque, turpis ex iaculis ligula, congue tempus erat augue porta nulla. Aenean mattis odio urna, nec dapibus mi gravida id. Aenean scelerisque ante sed mauris feugiat, id imperdiet nulla ultrices. Etiam euismod velit felis. Aliquam est lorem, congue at tempus id, bibendum ut turpis. Suspendisse rutrum urna mauris, ac sollicitudin arcu elementum quis. In a mi non dolor ultricies viverra. Curabitur faucibus eget diam in convallis.

                        Nunc quis erat a lorem lacinia iaculis nec id tortor. Nam ullamcorper congue dolor, eget mattis nisi mollis non. In tempus erat vitae elit consectetur hendrerit. Cras ac aliquet quam, a ultricies lectus. Vestibulum ullamcorper enim sed leo vestibulum sagittis. Nam ut.</p>
                    <button>See Portfolio</button>
                </div>
            </div>
        </AboutStyle>
    )
}

export default About