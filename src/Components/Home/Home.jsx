import React from 'react';
import './home.css'
import video from '../../Assets/video.mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'


const Home = () => {
    return (
        <section className='home'>
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homecontent container">
                <div className="textDiv">
                    <span className="smallText">
                        Our Packages
                    </span>
                    <h1 className='homeTitle'>
                        Search your Holidays
                    </h1>

                </div>

                <div className="cardDiv grid"></div>
                <div className="destinationInput">
                    <label htmlFor="city">Search your destination:</label>
                    <div className="input flex">
                        <input type="text" placeholder='Enter name here...' />
                        <GrLocation className="icon" />
                    </div>

                </div>


                <div className="cardDiv grid">
                    <div className="dateInput">
                        <label htmlFor=" date">Select your date:</label>
                        <div className="input flex">
                            <input type="date" />
                            <GrLocation className="icon" />


                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:
                            </label>
                            <h3 className="total">$10000 </h3>

                        </div>
                        <div className="input flex">
                            <input type="range" max="10000" min="500" />
                        </div>
                        <div className="searchOptions flex">
                            <HiFilter className="icon" />
                        </div>


                    </div>

                </div>
            </div>

        </section>
    )
}

export default Home