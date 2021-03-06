import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PhotoGallery from '../Utilities'
import { dougPhotos } from "../../assets/images/photos";
import resume from '../../assets/pdf/DouglasJames-Resume-4.22.2020.pdf'

export default class AboutMe extends Component {
    render() {
        return (
            <div>
                <h1>About Me</h1>
                <p className="indent">
                    Welcome to my personal website! I am a young engineer and businessman trained in the Silicon Valley at San Jose State University. 
                    Currently, I work on freelance web projects like <Link to="/experience/capsmd.org">capsmd.org</Link> and 
                    &nbsp;<Link to="/experience/theblairfamilyfoundation.org">theblairfamilyfoundation.org</Link>, as 
                    well as my tech support startup <Link to="/experience/minute.tech">Minute.tech</Link>. 
                    I am still seeking potential opportunities outside freelance work on a larger engineering team because I want to challenge myself and learn 
                    new technologies, best practices, shortcuts, and more. I am currently focused on finding a job in software engineering or web 
                    development, especially with technologies like Javascript, React.js, and Node.js. 
                </p>
                <p className="indent">
                   I currently reside in Oakland, CA. Some of my many interests include coding, gaming, eating healthy (but tasty), camping &amp; hiking, technology, outer space, and animals. 
                   I have listed my professional experience on the <Link to="/experience/">Experience</Link> page, with sub pages detailing each job. For the tl;dr version, 
                   I invite you to <a href={resume} download>download my standard 2 page resume</a>.
                </p>
             
                <PhotoGallery photos={dougPhotos} />
            </div>
        )
    }
}
