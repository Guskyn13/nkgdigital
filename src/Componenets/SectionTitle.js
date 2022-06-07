import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
overflow: hidden;
    text-align: center;
    p {
        font-size: 2rem;
    }
    h2 {
        font-size: 2.5rem;
        margin-top: 0.5rem;
        text-transform: uppercase;
    }
`;

export default function SectionTitle({
    subheading = 'Need Subheading',
    heading = 'Need Heading',
}) {
    return (
        <SectionTitleStyle>
            <p>{subheading}</p>
            <h2>{heading}</h2>
        </SectionTitleStyle>
    )
}