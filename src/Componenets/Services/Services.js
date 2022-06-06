import React from 'react'
import './Services.css'
import SectionTitle from '../SectionTitle'
import ServiceItem from './ServiceItem'
import { serviceApp, serviceWebsite } from '../../Assets'

const Services = () => {
  return (
    <>
      <div className="services-background" />
      <div className='services-container'>
        <SectionTitle subheading='What I can do for you' heading='Services' />
        <div className="services-servicesContainer">
          <div className="services-columns">
            <div className="services-col1">
              <ServiceItem
                icon={serviceApp}
                title='Custom App Dev'
              />
            </div>
            <div className="services-col2">
              <ServiceItem
                icon={serviceWebsite}
                title='Web Design'
              />
            </div>
            <div className="services-col3">
              <h4>Web Hosting</h4>
              <span>sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada</span>
            </div>
            <div className="services-col4">
              <h4>Drone Photo</h4>
              <span>sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
