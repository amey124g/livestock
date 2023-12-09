import './categories.css'
import dogimg from './Images/dogimg.png'

function Categories() {
  return (
    <div className='categories'>
      <h1 className="categories-title">Animal Categories</h1>
      <div className="categories-flex">
        <div className="categories-card">
            <img src={dogimg} alt="" className='categories-card-img' />
            <p className="categories-card-p">Dogz</p>
        </div>
        <div className="categories-card">
            <img src={dogimg} alt="" className='categories-card-img' />
            <p className="categories-card-p">Cats</p>
        </div>
        <div className="categories-card">
            <img src={dogimg} alt="" className='categories-card-img' />
            <p className="categories-card-p">Birds</p>
        </div>
        <div className="categories-card">
            <img src={dogimg} alt="" className='categories-card-img' />
            <p className="categories-card-p">Fishes</p>
        </div>
        <div className="categories-card">
            <img src={dogimg} alt="" className='categories-card-img' />
            <p className="categories-card-p">Farm Animals</p>
        </div>
      </div>
    </div>
  )
}

export default Categories
