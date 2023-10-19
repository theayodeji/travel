
function Slide() {
  
    var currentSlide = 1;

    const controls = document.querySelectorAll('.slide-control');
    const slider = document.querySelector('.testimonial-slider');

    controls.forEach(control => {
      control.addEventListener('click', () => {

        if (control.classList.contains('left')){
          if (currentSlide === 1){
            return
          }
          
          else if (currentSlide === 2){
            currentSlide = 1
            slider.classList.remove('slide2', 'slide1', 'slide3')
            slider.classList.add('slide1')
          
          }else if(currentSlide === 3){
            currentSlide = 2;
            slider.classList.remove('slide2', 'slide1', 'slide3')
            slider.classList.add('slide2')

          }
        };

        if (control.classList.contains('right')){
          if (currentSlide === 1){
            currentSlide = 2;
            slider.classList.remove('slide2', 'slide1', 'slide3')
            slider.classList.add('slide2')
          }
          
          else if (currentSlide === 2){
            currentSlide  = 3;
            slider.classList.remove('slide2', 'slide1', 'slide3')
            slider.classList.add('slide3')

          }else if(currentSlide === 3){
            return
          }
        }

      })
    })

}

export default Slide;