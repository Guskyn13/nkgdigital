import react from 'react'
import styled from 'styled-components'
import { Logo } from '../../Assets'

const ServiceItemStyle = styled.div`
text-align: center;
background-color: blue;
height: 400px;
width: 350px;

@media only screen and (max-width: 1300px) {
    .servicesItem_icon {
        width: 125px;
        height: 125px;
    }
    .servicesItem__title {
        color: #000;
    }
    .servicesItem__title {
        font-size: 1.25rem;
    }
}
`

export default function ServiceItem({
    icon = Logo,
    title = 'Web Development',
    desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
}) {
    return (
        <ServiceItemStyle>
            <div className="servicesItem__icon">{icon}</div>
            <div className="servicesItem__title">{title}</div>
            <span>{desc}</span>
        </ServiceItemStyle>
    )
}