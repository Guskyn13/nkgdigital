import React from 'react'
// import './Footer.css'
import styled from 'styled-components'
import FooterCol from './FooterCol'

const FooterStyle = styled.div`
padding: 1rem 0;
color: white;
background-color: #000;
opacity: 0.85;
    .footer_container {
        display: flex;
    }
    .footer_col1 {
        flex: 2;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .footer_col1 h1 {
        font-size: 3rem;
        padding-bottom: 1rem;
    }
    .footer_col1 p {
        font-size: 1.5rem;
    }
    .footer_col2,
    .footer_col3,
    .footer_col4 {
        flex: 1;
    }
`

const Footer = () => {
    return (
        <FooterStyle>
            <div className='footer_container'>
                <div className='footer_col1'>
                    <h1>Nathan Gusky</h1>
                    <p>A freelance web designer and developer from Florida.
                        Enjoy helping others brings ideas to reality.
                    </p>
                </div>
                <div className='footer_col2'>
                    <FooterCol
                        heading='Important Links'
                        links={[
                            {
                                title: 'Home',
                                path: '/',
                                type: 'Link',
                            },
                            {
                                title: 'About',
                                path: '/about',
                                type: 'Link',
                            },
                            {
                                title: 'Projects',
                                path: '/projects',
                                type: 'Link',
                            },
                            {
                                title: 'Contact',
                                path: '/contact',
                                type: 'Link',
                            },
                        ]}
                    />
                </div>
                <div className='footer_col3'>
                        <FooterCol 
                            heading = 'Contact Info'
                            links = {[
                                {
                                    title: 'Phone',
                                    path: 'tel:8505563452'
                                },
                                {
                                    title: 'Gmail',
                                    path: 'mailto:nathangusky13@gmail.com'
                                }
                            ]}
                        />
                </div>
                <div className='footer_col4'>
                        <FooterCol 
                            heading = 'Social Links'
                            links = {[
                                {
                                    title: 'Linkdin',
                                    path: '',
                                    type: 'Link'
                                },
                                {
                                    title: 'Facebook',
                                    type: '',
                                    path: ''
                                },
                                {
                                    title: 'Personal Site',
                                    type: 'Link',
                                    path: 'https://nathans-portfolio.netlify.app/'
                                }
                            ]}
                        />
                </div>
            </div>
        </FooterStyle>
    )
}

export default Footer