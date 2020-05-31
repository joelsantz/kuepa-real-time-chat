import React from 'react';

import './Video.css';
import notes from '../../icons/notes.png';
import download from '../../icons/download.png';
import star from '../../icons/star.png';

const Video = () => (
  <div className="videoContainer">
    <div>
        <iframe width="900" height="580" src="https://www.youtube.com/embed/dLu3mUw4184" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className= "optionsContainer nav">
                <ul>
                    <li className = "notes"><a href="#">Notas del profesor <img src={notes} alt="notes icon" /></a></li>
                    <li className = "documents"><a class="active" href="#">Documentos <img src={download} alt="donwload-icon" /></a></li>
                    <li className = "exam"><a href="#">Examen <img src={star} alt="star icon" /></a></li>
                </ul>
        </div>
    </div>
</div> 
);

export default Video;