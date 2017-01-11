import React from 'react';
import Slider from 'react-slick';
import HeaderTitle from './header_title';

export default () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="main">
      <HeaderTitle>Fig Knight</HeaderTitle>
      <ul className="info-list">
        <li>Web Design</li>
        <li>Mobile Apps</li>
        <li>User Experience</li>
      </ul>
      <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    </div>
  );
};
