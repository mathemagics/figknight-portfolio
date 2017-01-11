import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import Slide from './main_slide';
import HeaderTitle from './header_title';

import { setSlide } from '../actions';
// const mouseOver = (num) => {
//   console.log(num);
//   return () => {
//     this.refs.slider.slickGoTo(num);
//   };
// };

class main extends Component {
  constructor(props) {
    super(props);
    this.changeSlide = this.changeSlide.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.slide);
    this.refs.slider.slickGoTo(nextProps.slide - 1);
  }
  changeSlide(num) {
    return () => {
      console.log(num);
      this.props.setSlide(num);
    };
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="main">
        <HeaderTitle>Fig Knight</HeaderTitle>
        <ul className="info-list">
          <li>
            <button className="main-btn" onMouseEnter={this.changeSlide(1)}>
              Web Design
            </button>
          </li>
          <li>
            <button className="main-btn" onMouseEnter={this.changeSlide(2)}>
              Mobile Apps
            </button>
          </li>
          <li>
            <button className="main-btn" onMouseEnter={this.changeSlide(3)}>
              User Experience
            </button>
          </li>
        </ul>
        <Slider ref="slider" {...settings}>
          <div><Slide><h3>1</h3></Slide></div>
          <div><Slide><h3>2</h3></Slide></div>
          <div><Slide><h3>3</h3></Slide></div>
        </Slider>
      </div>
    );
  }
}
const mapStateToProps = ({ mainSlides }) => {
  const { slide } = mainSlides;
  return { slide };
};

export default connect(mapStateToProps, { setSlide })(main);
