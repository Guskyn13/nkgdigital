import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, FreeMode } from 'swiper'
import projects from '../../Data/Projects'

import "swiper/css/bundle"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const SwiperStyle = styled.div`
padding: 5rem 0;

.swiper {
    padding-top: 50px;
    padding-bottom: 50px;
}
.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 350px;
    height: 500px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    overflow: hidden;
}
    .swiper-button-prev,
    .swiper-button-next {
        position: absolute;
        background-color: gray;
        border-radius: 10px;
        height: 50px;
        width: 50px;
        color: #fff;
        z-index: 10;
        right: 425px;
        left: auto;
        top: 0;
        transform: translateY(50%);
    }
    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .swiper-button-next {
        right: 350px;

    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
        font-size: 2rem;
    }

    @media only screen and (max-width: 1300px) {
    padding: 2rem 0;

    .swiper {
        padding-top: 0px;
        padding-bottom: 0px;
    }
    .swiper-slide {
        width: 200px;
    }
    .swiper-button-prev,
    .swiper-button-next {
        height: 25px;
        width: 25px;
        right: 200px;
        top: 25px;
        border-radius: 4px;
    }
    .swiper-button-next {
        right: 150px;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
        font-size: 1rem;
    }
    }
`

export default function SwiperSection() {
    return (
        <SwiperStyle>
            <div className="project_background"></div>
            <div className='project_swiperContainer'>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    centeredSlides={true}
                    modules={[Navigation, Pagination]}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    navigation={true}
                >
                    {projects.map((project, i) => {
                        if (i >= 5) return;
                        return (
                            <SwiperSlide key={i}>
                                <ProjectCard
                                    img={project.img}
                                    title={project.name}
                                    desc={project.desc}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </SwiperStyle>
    )
}