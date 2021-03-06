import React from 'react';
import Carousel from 'nuka-carousel';
import backSlideIcon from '../../assets/images/icons/back-slide.svg';
import styles from './style.module.scss';
const classNames = require('classnames/bind');
const cx = classNames.bind(styles);

const Decorators = [{
  component: React.createClass({
    render() {
      const { currentSlide, previousSlide, nextSlide, slideCount } = this.props;

      return (
        <div>
          <i className="fa fa-chevron-circle-left fa-3x"
             onClick={this.props.previousSlide} aria-hidden="true"/>
          <div className={styles.slideSwitchers}>
            <img src={backSlideIcon} className={ cx({ [styles['disabled']]: !currentSlide })} onClick={previousSlide}/>
            <img src={backSlideIcon} className={ cx({ [styles['disabled']]: currentSlide === slideCount - 1 })}
                 onClick={nextSlide}/>
          </div>
        </div>
      )
    }
  }),
  position: 'BottomLeft'
}];

const NukaCarousel = ({ children }) => (
  <Carousel decorators={Decorators} autoplay={true}>
    { children }
  </Carousel>
)

export default NukaCarousel;