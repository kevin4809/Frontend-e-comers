import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { buy } from '../store/slices/car.slice';
import '../styles/styleCanvasOff.css'
const OffCanvas = () => {

    const cart = useSelector(state => state.car.cart?.products);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getTotal = () => {
        let total = 0;
        cart?.forEach(cartItem => total += cartItem.price * cartItem.productsInCart.quantity)
        return total
    }



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
                                <h4 className='text-muted brand-text'>{car.brand}</h4>
                                <h4>{car.title}</h4>
                                <h3 className='text-muted quantity-text'>Quantity</h3>
                                <h3>{car.productsInCart.quantity}</h3>
                                <div className="d-flex justify-content-end ">
                                    <h3 className='total'>Total:</h3>
                                    <h3 >{car.price * car.productsInCart.quantity}$ </h3>
                                </div>

                            </div>
                        ))
                    }
                </div>

                <div className="button-checkout">
                    <div className="total d-flex">
                        <h3 className='text-muted'> total:   </h3>
                        <h3 className='total-value'>{getTotal()}$</h3>
                    </div>
                    <button onClick={() => {
                        dispatch(buy())
                        alert('Complete purchase')
                    }}>CheckOut</button>

                </div>


            </div>
        </div>
    )
}

export default OffCanvas