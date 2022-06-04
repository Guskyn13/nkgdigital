import React, { useMemo, useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { loadFull } from 'tsparticles'

const ParticlesComponent = ({ props }) => {
    const options = useMemo(() => {
        return {
          background: {
            color: "#000",
          },
          fullScreen: {
            enable: true, 
            zIndex: -1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true, 
                mode: "push", 
              },
              onHover: {
                enable: true, 
                mode: "repulse", 
              },
            },
            modes: {
              push: {
                quantity: 5,
              },
              repulse: {
                distance: 150,
              },
            },
          },
          particles: {
            links: {
              enable: true, // enabling this will make particles linked together
              distance: 150, // maximum distance for linking the particles
            },
            move: {
              enable: true, // enabling this will make particles move in the canvas
              speed: { min: 1, max: 3 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
            },
            opacity: {
              value: { min: 0.1, max: 1 }, // using a different opacity, to have some semitransparent effects
            },
            size: {
              value: { min: 1, max: 5 }, // let's randomize the particles size a bit
            },
          },
        };
      }, []);
    
      // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
      const particlesInit = useCallback((engine) => {
        loadSlim(engine);
        // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
      }, []);
    
      // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
      return <Particles init={particlesInit} options={options} />;
    };

export default ParticlesComponent;