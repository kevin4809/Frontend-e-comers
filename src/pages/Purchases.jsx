import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchases } from '../store/slices/purchases.slice'
import '../styles/stylePurchases.css'

const Purchases = () => {

    const dispatch = useDispatch()

    const purchases = useSelector(state => state.phurchases.data?.purchases)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    useEffect(() => {

        dispatch(getPurchases())


    }, [dispatch])




    return (
        <div>

            {
                purchases?.map(purchase => (
                    <div className=' content-purchases card' key={purchase.cart.id}>

                        <div className="d-flex date-purchases">
                            <h3>{purchase.createdAt.substring(5, 6) !== 0 ? months[purchase.createdAt.substring(6, 7)] : months[purchase.createdAt.substring(6, 8)]},</h3>
                            <h3>{purchase.createdAt.substring(8, 10)},</h3>
                            <h3>{purchase.createdAt.substring(0, 4)}</h3>
                        </div>

                        {
                            purchase.cart.products.map(purchaseItem => (
                                <div key={purchaseItem.id}>
                                    <h3 className='text-muted'>{purchaseItem.brand}</h3>

                                    <div className="row text">
                                        <div className="col-6">
                                            <h3>{purchaseItem.title}</h3>
                                        </div>
                                        <div className="col-3">
                                            <h3 className='quantity-purchases '>{purchaseItem.productsInCart.quantity}</h3>
                                        </div>
                                        <div className="col-3 text-end">
                                            <h3>{purchaseItem.price * purchaseItem.productsInCart.quantity}$</h3>
                                        </div>
                                    </div>


                                </div>
                            ))
                        }

                    </div>


                ))
            }
        </div>
    )
}

export default Purchases