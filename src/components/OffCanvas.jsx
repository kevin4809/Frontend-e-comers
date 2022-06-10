import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import '../styles/styleCanvasOff.css'
const OffCanvas = () => {

    const cart = useSelector(state => state.car.cart?.products);

    const navigate = useNavigate();


    return (
        <div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {
                        cart?.map(car => (
                            <div key={car.id} className='container content-cart' onClick={() => navigate(`/products/${car.productsInCart.productId}`)}>
                                <h3 className='text-muted brand-text'>{car.brand}</h3>
                                <h3>{car.title}</h3>
                                <h3 className='text-muted quantity-text'>Quantity</h3>
                                <h3>{car.productsInCart.quantity}</h3>
                                <div className="d-flex justify-content-end ">
                                    <h3 className='total'>Total:</h3>
                                    <h3>{car.price}</h3>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OffCanvas