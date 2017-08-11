import React from 'react';
import Carousel from 'nuka-carousel';

const VericalCarousel = ({ children }) => {

  const Decorators = [ {
    component: React.createClass({
      render() {
        const { currentSlide, previousSlide, nextSlide, slideCount } = this.props;

        return (
          <div>
            <i className="fa fa-chevron-circle-left fa-3x"
               onClick={this.props.previousSlide} aria-hidden="true"/>
          </div>
        )
      }
    }),
    position: 'BottomLeft'
  } ];

  return (
    <Carousel decorators={Decorators}
              vertical={true}
              autoplay={true}
              slidesToShow={2}
    >
      { children }
    </Carousel>
  )
};

export default VericalCarousel;