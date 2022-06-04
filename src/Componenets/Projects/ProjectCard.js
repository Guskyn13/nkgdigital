import { Link } from 'react-router-dom'
import styled from 'styled-components'
import randomPic from '../../Assets/origin.jpg'

const ProjectCardStyles = styled.div`
height: 500px;
overflow: hidden;
    .project_img {
        height: 300px;
        border-radius: 12px;
        overflow: hidden;
        display: inline-block;
        border: 3px solid #fff;
        margin-top: 25px;
        img {
            height: 100%;
        }
    }
    .project_info {
        margin-top: 1rem;
        width: 465px;
        padding: 1rem;
    }
    .project_title {
        font-size: 2rem;
        text-decoration: none;
    }
    .project_desc {
        font-size: 1.2rem;
        margin-top: .75rem;
    }
    @media only screen and (max-width: 768px) {
        .project_img {
            height: 350px;
        }
    }
`

export default function ProjectCard({
    img = randomPic,
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