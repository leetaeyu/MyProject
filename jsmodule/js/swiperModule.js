/* 
*Swiper module
*2023.12.18
*TY.LEE
*/

const slideShowView = {one : 1, two : 2, three : 3, four : 4}
let swiperSlide = function(view, point, point2){
    let _self = this;

    let _element = null;

    let _view = view;

    let responsive = point;

    let responsive2 = point2

    let _option = {
        slidesPerView:_view,
        infinite:true,
        loopAdditionalSlides: 1,
        loop:true,
        allowTouchMove: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        breakpoints:{}
    }

    _self.init = function(elementClass){
      _element = document.querySelector("." + elementClass);
      return _self;
    }

    _self.speed = function(speed){
      try {
        _option.speed = speed;
      } catch(e) {
        console.error('speed error');
      }
      return _self;
    }
    
    _self.between = function(between){
      try {
        _option.spaceBetween = between;
      } catch(e) {
        console.error('between error');
      }
      return _self;
    }
    
    _option.breakpoints[responsive] = {};
    _option.breakpoints[responsive2] = {};

    _self.responsive = function(viewItem){
      try {
        _option.breakpoints[responsive].slidesPerView = viewItem;
      } catch(e) {
        console.error('responsive error');
      } return _self;
    }
    
    _self.responsive2 = function(viewItem){
      try {
        _option.breakpoints[responsive2].slidesPerView = viewItem;
      } catch(e) {
        console.error('responsive2 error');
      } return _self;
    }
    
    _self.draw = function(){
        new Swiper(_element, _option)
    }
}
