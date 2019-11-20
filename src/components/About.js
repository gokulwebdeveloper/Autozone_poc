import React from 'react';
import MetaTags from 'react-meta-tags';
import SeoTags from './SeoTags';
import ContentDisplay from './ContentDisplay.js';

function About(props) {
  const seometaTags = {
    "title": "AutoZone, Inc. | About Us",
    "description": "Buy batteries, brake pads, oil, or any other parts you need online and get free shipping with next day delivery or pick up your purchase at a store near you.",
    "keywords": "AutoZone,Garage,Bolt,Metals,Car accessiores"
  }
  const contentDisplay = {
    "title": "About Us",
    "description": `For more than 37 years, AutoZone has been committed to providing the best parts, prices and customer service in the automotive aftermarket industry. We have a rich culture and history of going the Extra Mile for our customers and our community.
        Today, AutoZone is the leading retailer and a leading distributor of automotive replacement parts and accessories in the U.S.
        Use the links below to find out how we began, where we're headed and how you can play a role.`
  }
  return (
    <div className="container">
      <SeoTags MetaTags={seometaTags} />
      <ContentDisplay content={contentDisplay} />
    </div>
  )
}

export default About;