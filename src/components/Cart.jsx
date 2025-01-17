import React from 'react';

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container my-5" style={{width:"54%"}}>
        {cart.map((product) => {
          return (
            <div key={product.id} className="card mb-3 my-5" style={{ width: '740px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    <button className='btn btn-primary mx-3'>{product.price}{"₹"}</button>
                    <button className='btn btn-warning'>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart;
