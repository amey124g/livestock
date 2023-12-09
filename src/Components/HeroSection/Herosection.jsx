import './herosection.css'
import Img1 from './Images/1.png'
import Img2 from './Images/2.png'
import buy from './Images/buyimg.png'
import sell from './Images/sellimg.png'
import feed from './Images/feedimg.png'
import products from './Images/productsimg.png'


function Herosection() {
  return (
    <div className='hero-section'>
         <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                <img className='carousel-img' src={Img1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item active" data-bs-interval="2000">
                <img className='carousel-img' src={Img2} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div className="features">
            <div className="features-flex">
              <div className="features-card">
                <img src={buy} alt="" className="features-card-img" />
                <button className='features-card-btn'>Buy Animals</button>
              </div>
              <div className="features-card">
                <img src={sell} alt="" className="features-card-img" />
                <button className='features-card-btn'>Sell Animals</button>
              </div>
              <div className="features-card">
                <img src={feed} alt="" className="features-card-img" />
                <button className='features-card-btn'>Animal Feed</button>
              </div>
              <div className="features-card">
                <img src={products} alt="" className="features-card-img" />
                <button className='features-card-btn'>Products</button>
              </div>
            </div>
          </div>

          <h1 className='hero-section-title'>Buy or Sell Animals Easy with Livestock</h1>
    </div>
  )
}

export default Herosection
