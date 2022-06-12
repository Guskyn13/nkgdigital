import React, { useState, useEffect } from 'react';
import './About.css'
import { parkPhoto } from '../../Assets'
import SectionTitle from '../SectionTitle'

function useMouse() {
    const [mousePosition, setMousePosition] = useState({
        x: null,
        y: null
    });

    useEffect(() => {
        function handle(e) {
            setMousePosition({
                x: e.pageX,
                y: e.pageY
            });
        }

        document.addEventListener("mousemove", handle);
        return () => document.removeEventListener("mousemove", handle)
    });

    return mousePosition;
}

const About = () => {
    const [pulseworks, setPulseworks] = useState(false);
    const [pulsereadmore, setPulsereadmore] = useState(false);

    const { x, y } = useMouse();

    const [worksMouseX, setWorksMouseX] = useState("");
    const [worksMouseY, setWorksMouseY] = useState("");
    const [readmoreMouseX, setReadmoreMouseX] = useState("");
    const [readmoreMouseY, setReadmoreMouseY] = useState("");

    const handleClick = () => {
        setWorksMouseX(x + "px");
        // setWorksMouseY(y + "px");
        console.log(worksMouseX);
        setPulseworks(current => !current);
    }
    const handleClick2 = () => {
        setPulsereadmore(current => !current);
    }



    return (
        <>
            <div className='about_container'>
                <div className='about_leftside'>
                    <img src={parkPhoto} />
                </div>
                <div className='about_middle'>
                    <div className='sectionTitle'>
                        <SectionTitle
                            subheading="Let me introduce myself"
                            heading="About Me"
                        />
                    </div>
                    <p>You are meeting Nathan, a freelance website developer and designer from Florida. Creator of professional pages of all sorts. Would love to help you turn those ideas into a beautiful reality.</p>
                    <div className="about_buttons">
                        <button className={`about_ripple ${pulseworks ? 'pulse' : ''}`} onClick={handleClick}>Works</button>
                        <button className={`about_ripple ${pulsereadmore ? 'pulse2' : ''}`} onClick={handleClick2}>Read More</button>
                    </div>
                <p>Mouse X is {x}</p>
                <p>Mouse Y is {y}</p>
                </div>
                <div className='about_rightside' />
            </div>


        </>
    )
}

export default About