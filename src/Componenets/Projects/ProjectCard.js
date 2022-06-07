import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Logo } from '../../Assets'

const ProjectCardStyles = styled.div`
height: 500px;
overflow: hidden;
    .project_img {
        height: 300px;
        border-radius: 12px;
        overflow: hidden;
        display: inline-block;
        border: 3px solid #fff;
        background-color: #000;
        margin-top: 25px;
        transition: 0.5s;
        img {
            height: 100%;
        }
    } 
    .project_info {
        margin-top: 1rem;
        width: 465px;
        padding: 1rem;
        background-color: #000;
    }
    .project_title {
        font-size: 2rem;
        text-decoration: none;
    }
    .project_desc {
        font-size: 1.2rem;
        margin-top: .75rem;
    }
    @media only screen and (max-width: 1300px) {
    height: 400px;
    .project_img {
        height: 150px;
        width: 100%;
        border-radius: 8px;
    }
    .project_info {
        margin-top: 0rem;
        width: 100%;
    }
    .project_title {
        font-size: 1.5rem;
        color: #fff;
        padding-bottom: 1rem;
    }
    .project_desc {
        font-size: 1rem;
        margin-top: .25rem;
    }
    }
`

export default function ProjectCard({
    img = Logo,
    title = 'Project Name',
    desc = 'Loreum Ipsum'
}) {
    return (
        <ProjectCardStyles>
            <Link to='#' className='project_img'>
                <img src={img} alt="" />
            </Link>
            <div className='project_info'>
                <Link to='#' className='project_title'>{title}</Link>
                <p className='project_desc'>{desc}</p>
            </div>
        </ProjectCardStyles>
    )
}