import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height:'100vh'}}
          className="d-block w-100"
          src="https://images.pexels.com/photos/935789/pexels-photo-935789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>I promise to hold your hand no matter what happens...!! </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'100vh'}}
          className="d-block w-100"
          src="https://images.pexels.com/photos/1759823/pexels-photo-1759823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Set a space in your heart for me!!!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'100vh'}}
          className="d-block w-100"
          src="https://images.pexels.com/photos/2526130/pexels-photo-2526130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>You taught me the real meaning of love. One look at your face sets my world straight....</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;