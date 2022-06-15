import React, { useState, useEffect } from 'react';
import './About.css'
import { parkPhoto } from '../../Assets'
import SectionTitle from '../SectionTitle'

// function mouseProp(e, element) {
//     let posX = e.offSetX;
//     let posY = e.offSetY;

//     console.log(posX);
// }

function useMouse(e) {
    const [mousePosition, setMousePosition] = useState({
        // x: e.pageX,
        // y: e.pageY
    });

    useEffect(() => {
        function handle(e) {
            setMousePosition({
                x: e.pageX,
                y: e.pageY
            });
            console.log(mousePosition);
        }

        document.addEventListener("click", handle);
        });

    return mousePosition;
}

const About = () => {
    const { x, y } = useMouse();

    const [pulseworks, setPulseworks] = useState(false);
    const [pulsereadmore, setPulsereadmore] = useState(false);
    const [worksMouseX, setWorksMouseX] = useState("");
    const [worksMouseY, setWorksMouseY] = useState("");
    const [readmoreMouseX, setReadmoreMouseX] = useState("");
    const [readmoreMouseY, setReadmoreMouseY] = useState("");

    const handleClick = () => {
        setWorksMouseX(x + "px");
        setWorksMouseY(y + "px");
        setPulseworks(current => !current);
    }
    const handleClick2 = () => {
        setReadmoreMouseX(x)
        setReadmoreMouseY(y + "px")
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
                        <button id='workBtn' className='about_ripple' onClick={handleClick}>Works</button>
                        <button id='workBtn' className='about_ripple' onClick={handleClick2}>Read More</button>

                    </div>
                        <p>Position X = {x}</p>
                        <p>Position Y = {y}</p>
                </div>
                <div className='about_rightside' />
            </div>


        </>
    )
}

export default About