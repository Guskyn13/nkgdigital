import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColumnStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    .heading {
        font-size: 1.75rem;
        margin-bottom: 1rem;
    }
    li {
        margin-bottom: 0.5rem;
    }
    a {
        font-size: 1.25rem;
        text-decoration: none;
        color: #fff;
    }
`;

export default function FooterCol({
    heading = 'Column Heading',
    links = [
        {
            type: 'Link',
            title: 'Home',
            path: '/home',
        },
        {
            type: 'Link',
            title: 'About',
            path: '/about',
        }
    ],
}) {
    return (
        <ColumnStyle>
            <h2 className='heading'>{heading}</h2>
            <ul>
                {links.map((item, index) => (
                    <li key={index}>
                        {item.type === 'Links' ? (
                            <Link to={item.path}>{item.title}</Link>
                        ) : (
                            <a href={item.path}>{item.title}</a>
                        )}
                    </li>
                ))}
            </ul>
        </ColumnStyle>
    )
}