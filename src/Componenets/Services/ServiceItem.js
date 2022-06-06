import styled from 'styled-components'

const ServiceItemStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

.servicesItem__title {
    font-size: 2.5rem;
    padding-bottom: 1rem;
    color: #000;
}
.servicesItem__desc {
    font-size: 1.15rem;
}


@media only screen and (max-width: 1300px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: purple;

    .servicesItem__title {
        color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    span {
        font-size: 1.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
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
            <span className="servicesItem__desc">{desc}</span>
        </ServiceItemStyle>
    )
}