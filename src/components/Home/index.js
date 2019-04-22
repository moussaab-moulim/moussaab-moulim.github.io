import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import Button from '../Button';


const Home = (props) => (
    <div className="section" id="home">


        <div id="home-bg-video" >

        </div>

        <div id="home-overlay">

        </div>

        <div id="home-content">
            <div id="home-content-inner" className="text-center">
                <div id="home-heading">
                    <h1><span id="home-heading-1">Moussaab MOULIM</span><br /><span id="home-heading-2">Software <span>ENGINEER</span></span></h1>
                </div>
                <div id="home-text">
                    <p>full stack web and mobile Software engineer and developer</p>
                </div>
                <Button buttonClass="btn-home" />
            </div>

        </div>


        <a href="#about" id="arrow-down">
            <i class="fas fa-angle-down"></i>
        </a>


    </div>
)

export default Home;