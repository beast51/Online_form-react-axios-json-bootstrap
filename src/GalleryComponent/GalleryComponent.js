import React from 'react';
import Slider from "react-slick";
import "./GalleryComponent.css";

class GalleryComponent extends React.Component {
    render() {

        const {galleryTitle, images, slidesPerView} = this.props.gallery;
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: parseInt(slidesPerView),
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };

        return (
            <div className="container">
                <header className="pt-5">
                    <h1>{galleryTitle}</h1>
                </header>
                <Slider {...settings} >
                    {images.map((url, number) => {
                        return (
                            <div className="card" key={number}>
                                <img className="card-img" src={url} alt={`slide№${number}`}/>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}

export default GalleryComponent;
