export const SET_SLIDE = 'SET_SLIDE';

export const setSlide = (num) => {
  return {
    type: SET_SLIDE,
    payload: num,
  };
};
