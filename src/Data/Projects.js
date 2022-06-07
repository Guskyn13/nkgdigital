import {portfolioImg, ecommImg, droneImg, metamask, cryptoquery} from '../Assets'

const projects = [
    {
        id: 1,
        name: 'Sanity Portfolio',
        desc: 'Personal website, built in React with Sanity backend. Detailed information regarding myself.',
        img: portfolioImg,
        github: ''
    },
    {
        id: 2,
        name: 'Ecomm',
        desc: 'Ecommerece website using Sanity backend with payments using react stripe',
        img: ecommImg,
        github: 'https://github.com/Guskyn13/ecomm_stripe'
    },
    {
        id: 3,
        name: 'Dronography',
        desc: 'Social media app for drone pilots to display personal photography and commuincate between. Lgoin with google email',
        img: droneImg,
        github: ''
    },
    {
        id: 4,
        name: 'Metamask Wallet',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper, lorem non bibendum auctor, enim quam laoreet mi, eu tincidunt augue ipsum in ipsum. Quisque.',
        img: metamask,
        github: ''
    },
    {
        id: 5,
        name: 'Crypto Query',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper, lorem non bibendum auctor, enim quam laoreet mi, eu tincidunt augue ipsum in ipsum. Quisque.',
        img: cryptoquery,
        github: ''
    },
]

export default projects;