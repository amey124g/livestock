import './herosection.css'
import Img1 from './Images/dCarousel1.png'
import Img2 from './Images/dCarousel2.png'
import mImg1 from './Images/mCarousel1.svg'
import mImg2 from './Images/mCarousel2.svg'
import DogImg from './Images/dogs.svg'
import CowImg from './Images/cows.svg'
import FeedImg from './Images/feed.svg'
import ProductsImg from './Images/products.svg'
import ArrowIcon from './Images/arrow-right.svg'
// Splide
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Herosection() {
  const options = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    height       : '15rem',
  };

  return (
    <div className='hero-section'>
         {/* <div id="carouselExampleAutoplaying1" class="carousel slide desktop-carousel" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                <img className='carousel-img' src={Img1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img className='carousel-img' src={Img2} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying1" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
          </div> */}

          <Splide
            options={{
              autoplay: true,
              type: 'loop',
              interval: 2000,
              arrows: false,
              perPage: 1,
              pauseOnHover : false,
              resetProgress: false,
              rewind: true
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <img src={Img1} alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
              <img src={Img2} alt="Image 2"/>
            </SplideSlide>
          </Splide>

          <div id="carouselExampleAutoplaying2" class="carousel slide mobile-carousel" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                <img className='carousel-img' src={mImg1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img className='carousel-img' src={mImg2} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div className="features">
            <div className="features-flex">
              <div className="features-card">
                <img src={DogImg} alt="" className="features-card-img" />
                <div className="features-card-desc">
                  <button className='features-card-btn'>Buy Animals</button>
                  <img className="arrow-right" src={ArrowIcon} alt="" />
                </div>
              </div>

              <div className="features-card">
                <img src={CowImg} alt="" className="features-card-img" />
                <div className="features-card-desc">
                  <button className='features-card-btn'>Sell Animals</button>
                  <img className="arrow-right" src={ArrowIcon} alt="" />
                </div>
              </div>

              <div className="features-card">
                <img src={FeedImg} alt="" className="features-card-img" />
                <div className="features-card-desc">
                  <button className='features-card-btn'>Animal Feed</button>
                  <img className="arrow-right" src={ArrowIcon} alt="" />
                </div>
              </div>

              <div className="features-card">
                <img src={ProductsImg} alt="" className="features-card-img" />
                <div className="features-card-desc">
                  <button className='features-card-btn'>Products</button>
                  <img className="arrow-right" src={ArrowIcon} alt="" />
                </div>
              </div>
            </div>
          </div>

          <h1 className='hero-section-title'>Buy or Sell Animals Easy with Livestock</h1>
    </div>
  )
}

export default Herosection
