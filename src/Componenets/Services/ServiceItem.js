import react from 'react'
import styled from 'styled-components'
import { Logo } from '../../Assets'

const ServiceItemStyle = styled.div`
@media only screen and (max-width: 1300px) {
    .servicesItem__title {
        color: #000;
    }
    .servicesItem__title {
        font-size: 1.25rem;
    }
}
`

export default function ServiceItem({
    title = 'Web Development',
    desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
}) {
    return (
        <ServiceItemStyle>
            <div className="servicesItem__title">{title}</div>
            <span>{desc}</span>
        </ServiceItemStyle>
    )
}