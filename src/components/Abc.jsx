import React ,{ useRef,useState}from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Abc() {
    const sliderRef = useRef(null);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <div className='row mb-4'>
      <div className="col-lg-3"></div>
      <div className="col-lg-6"><div>
      <Slider ref={sliderRef} {...sliderSettings}>
        <div>
          <h3 className='text-center'>Focus On What You Love</h3>
          <img style={{height:'400px',width:'100%'}} src="https://images.pexels.com/photos/1004014/pexels-photo-1004014.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" />
        </div>
        <div>
          <img  style={{height:'400px',width:'100%'}} src="https://images.pexels.com/photos/348520/pexels-photo-348520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2" />
        </div>
        <div>
          <img style={{height:'400px',width:'100%'}}  src="https://images.pexels.com/photos/17834/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 3" />
        </div>
      </Slider>

    </div></div>
      <div className="col-lg-3"></div>

    </div>
    </>
  )
}

export default Abc