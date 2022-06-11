import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchases } from '../store/slices/purchases.slice'
import '../styles/stylePurchases.css'

const Purchases = () => {

    const dispatch = useDispatch()

    const purchases = useSelector(state => state.phurchases.data?.purchases)


    useEffect(() => {

        dispatch(getPurchases())

    }, [dispatch])

    console.log(purchases)


    return (
        <div>

            {
                purchases?.map(purchase => (
                    <div className=' content-purchases card' key={purchase.cart.id}>

                        <h3 className='date-purchases'>{purchase.createdAt}</h3>

                        

                        {
                            purchase.cart.products.map(purchaseItem => (
                                <div key={purchaseItem.id}>
                                    <h3 className='text-muted'>{purchaseItem.brand}</h3>
                                    <div className="d-flex justify-content-between">
                                        <h3>{purchaseItem.title}</h3>
                                        <h3 className='quantity-purchases'>{purchaseItem.productsInCart.quantity}</h3>
                                        <h3>{purchaseItem.price}</h3>
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