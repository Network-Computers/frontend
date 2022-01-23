
// import Carousel from 'bootstrap/js/src/carousel'
import image1 from "C:/Users/jyoth/Downloads/hp-desktop-computer-500x500.jpg"
import image2 from "C:/Users/jyoth/Downloads/hp-probook.jpg"
import image3 from "C:/Users/jyoth/Downloads/lap ser.jpg"
import image4 from "C:/Users/jyoth/Downloads/lap up.jpg"
import image5 from "C:/Users/jyoth/Downloads/dell lapi.webp"

const Mainpage  = () => {
   
    return ( 
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
      
          <div class="carousel-item active">
            <img src={image1} class="d-block w-50" alt="first image" height='600'  ></img>
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-50" alt="second image" height='550'></img>
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-50" alt="third image" height='550'></img>
          </div>
          <div class="carousel-item">
            <img src={image4} class="d-block w-75" alt="fourth image" height='550'></img>
          </div>
          <div class="carousel-item">
            <img src={image5} class="d-block w-50" alt="fifth image" height='550'></img>
          </div>
         
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden" >Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden" >Next</span>
        </button>
      </div>
        
     );
}

export default Mainpage;