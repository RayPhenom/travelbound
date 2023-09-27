import React from 'react';
import './home.css'
import video from '../../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'

const Home = () => {
    return(
        <section className='home'>
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type ="video/mp4"></video>

            <div className="homecontent container">
                <div className="textDiv">
                    <span className="smallText">
                        Our Packages
                    </span>
                    <h1 className='homeTitle'>
                        Search your Holidays
                    </h1>

                </div>

                <div className="cardDiv grid">
                    <div className="dateInput">
                        <label htmlFor=" date">Select your date:</label>
                        <div className="input flex">
                            <input type="date" />
                            <GrLocation className="icon"/>


                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home