import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import Slide from './main_slide';
import HeaderTitle from './header_title';

import { setSlide } from '../actions';

class main extends Component {
  render() {
    const settings = {
      customPaging: (i) => {
        switch (i) {
          case 0:
            return <a className={`main-btn ${this.props.slide === 0 ? 'btn-highlighted' : ''}`}>Web Design</a>;
          case 1:
            return <a className={`main-btn ${this.props.slide === 1 ? 'btn-highlighted' : ''}`}>User Experience</a>;
          case 2:
            return <a className={`main-btn ${this.props.slide === 2 ? 'btn-highlighted' : ''}`}>Mobile Apps</a>;
          default:
            return null;
        }
      },
      dots: true,
      autoplay: true,
      dotsClass: 'info-list',
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: this.props.setSlide,
    };
    return (
      <div className="main">
        <HeaderTitle>Fig Knight</HeaderTitle>
        <div className="slider">
          <Slider {...settings}>
            <div><Slide><h3>1</h3></Slide></div>
            <div><Slide><h3>2</h3></Slide></div>
            <div><Slide><h3>3</h3></Slide></div>
          </Slider>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ mainSlides }) => {
  const { slide } = mainSlides;
  return { slide };
};

export default connect(mapStateToProps, { setSlide })(main);
