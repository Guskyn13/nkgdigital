import React from 'react'
import './Services.css'
import SectionTitle from '../SectionTitle'
import ServiceItem from './ServiceItem'
import { serviceApp, serviceWebsite, serviceHosting, serviceDrone } from '../../Assets'

const Services = () => {
  return (
    <>
      <div className="services-background" />
      <div className='services-container'>
        <SectionTitle subheading='What I can do for you' heading='Services' />
        <div className="services-servicesContainer">

            <div className="services-col1">
              <img src={serviceApp} alt="service app" className='service-icon' />
              <ServiceItem
                title='Custom App Dev'
                desc="Solve specific problems you are facing with testing and maintainability"
              />
            </div>

            <div className="services-col2">
              <img src={serviceWebsite} alt="service website" className='service-icon' />
              <ServiceItem
                title='Web Design'
                desc='UI/UX design including the blueprints of the website '
              />
            </div>

            <div className="services-col3">
              <img src={serviceHosting} alt="service hosting" className='service-icon' />
              <ServiceItem
                title="Web Hosting"
                desc='Deploy and host your website with the domain of your choice'
              />
            </div>

            <div className="services-col4">
              <img src={serviceDrone} alt="service drone" className='service-icon' />
              <ServiceItem
                title="Drone Photo"
                desc='Capture unimaginable photos with drones for eye-catching images '
              />
            </div>

        </div>
      </div>
    </>
  )
}

export default Services
