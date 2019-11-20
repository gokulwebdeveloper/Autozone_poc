import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


 
function BannerCarousel() {
        return (
            <div>            
            <Carousel showArrows={false} showThumbs={false}   useKeyboardArrows  emulateTouch transitionTime={1000} showStatus={false}>
                <div>
                    <img src="https://www.autozone.com/images/MEDIA_ProductCatalog/m12590019_fy20p03-hero-winter-d.jpg" alt="gallery1" />
               
                </div>
                <div>
                    <img src="https://www.autozone.com/images/MEDIA_ProductCatalog/m12590014_fy20p03-hero-mobil1campaign-d.jpg" alt="gallery2" />
              
                </div>
                <div>
                    <img src="https://www.autozone.com/images/MEDIA_ProductCatalog/m12590016_fy20p03-hero-visibility-d.jpg" alt="gallery3" /> 
                </div>
            </Carousel>
            
            </div>
   
        );
}

export default BannerCarousel;