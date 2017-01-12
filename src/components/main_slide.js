import React from 'react';

export default (props) => {
  return (
    <div className="main-slide">
      <img alt="phone" src={'https://s28.postimg.org/vy2plhjul/phone.png'} />
      <div className="slide-text">{props.children}</div>
    </div>
  );
};
