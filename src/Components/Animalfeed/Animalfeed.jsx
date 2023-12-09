import './animalfeed.css'
import AnimalFeedImg from './Images/animal-feed-img-1.svg'

function Animalfeed() {
  return (
    <div className='animal-feed'>
      <div className="animal-feed-title-flex">
      <h1 className="animal-feed-title">Explore Animal Feed</h1>
      <button className="viewall-btn">View All</button>
      </div>
      
      <div className="animal-feed-flex">
        <div className="animal-feed-card">
            <img className='animal-feed-card-img' src={AnimalFeedImg} alt="" />
            <div className="animal-feed-card-description">
                <h1 className="animal-feed-card-title">Animal Feed</h1>
                <p className="animal-feed-card-p">Quantity: 10 kg</p>
                <p className="animal-feed-card-p">Price: ₹5000</p>
                <button className="animal-feed-card-btn">Add To Cart</button>
            </div>
        </div>
        <div className="animal-feed-card">
            <img className='animal-feed-card-img' src={AnimalFeedImg} alt="" />
            <div className="animal-feed-card-description">
                <h1 className="animal-feed-card-title">Animal Feed</h1>
                <p className="animal-feed-card-p">Quantity: 10 kg</p>
                <p className="animal-feed-card-p">Price: ₹5000</p>
                <button className="animal-feed-card-btn">Add To Cart</button>
            </div>
        </div>
        <div className="animal-feed-card">
            <img className='animal-feed-card-img' src={AnimalFeedImg} alt="" />
            <div className="animal-feed-card-description">
                <h1 className="animal-feed-card-title">Animal Feed</h1>
                <p className="animal-feed-card-p">Quantity: 10 kg</p>
                <p className="animal-feed-card-p">Price: ₹5000</p>
                <button className="animal-feed-card-btn">Add To Cart</button>
            </div>
        </div>
        <div className="animal-feed-card">
            <img className='animal-feed-card-img' src={AnimalFeedImg} alt="" />
            <div className="animal-feed-card-description">
                <h1 className="animal-feed-card-title">Animal Feed</h1>
                <p className="animal-feed-card-p">Quantity: 10 kg</p>
                <p className="animal-feed-card-p">Price: ₹5000</p>
                <button className="animal-feed-card-btn">Add To Cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Animalfeed
