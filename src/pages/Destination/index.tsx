import React, { useState } from "react";
import Header from "../../components/Header";
import './style.scss';

const Destination = () => {
    const [name, setName] = useState("Mars");
    const listDestination = ["Moon", "Mars", "Europa", "Titan"];

    let detail, distance, time, url;

    switch (name) {
        case "Moon":
            detail =
                "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
            distance = '384400 km';
            time = '3 days';
            url = `${process.env.PUBLIC_URL}/assets/destination/image-moon.png`;
            break;
        case 'Mars':
            detail = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
            distance = '225 mil. km';
            time = '9 months';
            url = `${process.env.PUBLIC_URL}/assets/destination/image-mars.png`;
            break;
        case 'Europa':
            detail = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
            distance = '628 mil. km';
            time = '3 years';
            url = `${process.env.PUBLIC_URL}/assets/destination/image-europa.png`;
            break;
        case 'Titan':
            detail = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
            distance = '1.6 bil. km';
            time = '7 years';
            url = `${process.env.PUBLIC_URL}/assets/destination/image-titan.png`;
            break;
        default:
            break;
    }

    return (
        <div className="destination-wrapper wrapper">
            <Header />
            <div className="step">
                <span className="number">01</span>
                <div className="title">Pick your destination</div>
            </div>

            <div className="body">
                <img src={url} alt="" />
                <div>
                    <div className="description">
                        <ul className="options">
                            {listDestination.map((des, index) => (
                                <li
                                    key={`${index}-${des}`}
                                    onClick={() => setName(des)}
                                    className={`destination ${name === des ? 'active' : ''}`}
                                >
                                    {des}
                                </li>
                            ))}
                        </ul>
                        <div className="name">{name}</div>
                        <div className="detail">{detail}</div>
                    </div>
                    <div className="distance-time">
                        <div className="distance"><span>AVG. DISTANCE</span>{distance}</div>
                        <div className="time"><span>Est. travel time</span>{time}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;
