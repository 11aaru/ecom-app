import React from 'react';
import { Link } from 'react-router-dom';

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ items, cart, setCart }) => {

    const addToCart = (id, price, title, description, imgSrc) => {
        const obj = {
            id,
            price,
            title,
            description,
            imgSrc
        };
        // Rest of the function logic
        setCart([...cart, obj]);
        console.log("Cart element =", cart);
        toast.success('🦄 item added!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
            Position

    }

    return (
     <>
   
        <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Bounce
        />

        <div className="container">
            <div className="row">
                {items.map((product) => {
                    return (
                        <div key={product.id} className='col-lg-4 mt-5'>
                            <div className="card" style={{ width: "18rem" }}>
                                <Link to={`/product/${product.id}`} style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <img src={product.imgSrc} className="card-img-top" alt="..." />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <button className='btn btn-primary mx-3'>{product.price}{"₹"}</button>
                                    <button onClick={() => {
                                        addToCart(product.id, product.price, product.title, product.description, product.imgSrc)
                                    }}
                                    className='btn btn-warning'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>


        </>
    )
}

export default Product;
