import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJ1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption className='carouselCaption'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1611688370466-0e415a5c922e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnJ1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />

        <Carousel.Caption className='carouselCaption'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1611688370466-0e415a5c922e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnJ1bmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />

        <Carousel.Caption className='carouselCaption'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;