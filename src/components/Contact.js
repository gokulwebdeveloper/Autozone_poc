import React from 'react';
import MetaTags from 'react-meta-tags';
import SeoTags from './SeoTags';
import ContentDisplay from './ContentDisplay.js';

function Contact(props){
  const seometaTags = {
          "title":"AutoZone, Inc. | Contact Us",
          "description": "Contact US",
          "keywords": "AutoZone,Garage,Bolt,Metals,Car accessiores"
      }
    const contentDisplay = {
        "title":"Contact Us",
        "description":`Use this form if you have a Store related question or comment.<br />Get Customer Service Help Or,<br /> you can reach us by<br /> phone at
        1-800-AUTOZONE (1-800-288-6966) <img src="https://autozone.know-where.com/autozone/Icon/US.png" id="map" name="map" alt=""></img>`
    }  
    return(
            <div className="container">
              <SeoTags MetaTags={seometaTags} />
              <ContentDisplay content={contentDisplay} />
            </div>
        )
}

export default Contact;


