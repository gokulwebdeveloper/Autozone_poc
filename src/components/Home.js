import React from 'react';
import BannerCarousel from './BannerCarousel';
import MetaTags from 'react-meta-tags';
import Products from './Products.js';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import SeoTags from "./SeoTags.js";

function Home(props) {
  const seometaTags = {
    "title": "AutoZone Auto Parts - Buy Online or in a Store Near You",
    "description": "AutoZone is the leading auto parts retailer. You'll always find the best replacement parts, aftermarket accessories for cars, trucks and SUVs online or In-store. Get yours today!",
    "keywords": "AutoZone,Garage,Bolt,Metals,Car accessiores"
  }
  const handleClick = (id) => {
    props.addToCart(id);
    alert("Add to cart successfully");
  }
  return (
    <div className="container">
      <SeoTags MetaTags={seometaTags} />
      <BannerCarousel />
      <Products />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)