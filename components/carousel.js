import Carousel from 'react-bootstrap/Carousel'

class DemoCarousel extends React.Component{
    render(){
        return(
        <div id="sectionCarousel">
          <div className="container">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Second slide"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Third slide"
                />
                
              </Carousel.Item>
            </Carousel>            
          </div>
        </div>          
      )
    }
}
export default DemoCarousel;
