import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';


const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    // You'll update this function later
  }

  return (
    <div className="" style={{ backgroundColor: 'rgb(255, 205, 165)' }}>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="First slide"
            style={{ "max-width": 1800, "height": "auto", "minHeight": 250, "margin": "0 auto"}}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 h-80"
            src="https://via.placeholder.com/800x400"
            alt="First slide"
            style={{ "max-width": 1800, "height": "auto", "minHeight": 250, "margin": "0 auto"}}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  interval={5000}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="First slide"
            style={{ "max-width": 1800, "height": "auto", "minHeight": 250, "margin": "0 auto"}}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <div className="container">
          <div className="row">
            <div className="container-fluid d-flex flex-column" style={{ minHeight: '50vh' }}>
              <div className="row flex-grow-1 d-flex justify-content-center align-items-center" style={{ border: '1rem',  }}>
                <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
                  <div>
                    <h2>Welcome to Our Website</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies blandit tortor, ac tincidunt urna tristique nec.</p>
                  </div>
                </div>
                <div className="col-md-5 order-md-2 d-flex justify-content-center align-items-center">
                  <div>
                    <h2>Welcome to Our Website</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies blandit tortor, ac tincidunt urna tristique nec.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="row justify-content-end mb-2">
          <div className="">
            <button className="btn btn-warning">Join Us</button>
          </div>
        </div>
      </div>
      </div>
      <div>
        <footer 
        style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '1rem', bottom: 0, width: '100%' }}
        >
      <p>&copy; 2022 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
    
  )
}

export default Home