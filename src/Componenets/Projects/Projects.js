import React from 'react'
import styled from 'styled-components'
import SwiperSection from './Swiper'
import SectionTitle from '../SectionTitle'

const ProjectsStyle = styled.div`
padding: 2rem 0;
  .projects_container {
    color: #fff;
  }
`

const Projects = () => {
  return (
    <ProjectsStyle>
      <div className='projects_container'>
        <SectionTitle subheading="Some of my recent works" heading="Projects" />
        <div className='projects_projects'>
          <SwiperSection />
        </div>
      </div>
    </ProjectsStyle>
  )
}

export default Projects