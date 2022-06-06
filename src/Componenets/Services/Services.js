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
          <div className="services-columns">

            <div className="services-col1">
              <img src={serviceApp} alt="" className='service-icon' />
              <ServiceItem
                title='Custom App Dev'
              />
            </div>

            <div className="services-col2">
              <img src={serviceWebsite} alt="service website" />
              <ServiceItem
                title='Web Design'
              />
            </div>

            <div className="services-col3">
              <img src={serviceHosting} alt="service hosting" />
              <ServiceItem
                title="Web Hosting"
              />
            </div>

            <div className="services-col4">
              <img src={serviceDrone} alt="service drone" />
              <ServiceItem
                title="Drone Photo"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Services
