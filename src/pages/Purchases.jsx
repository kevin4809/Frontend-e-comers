import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchases } from '../store/slices/purchases.slice'

const Purchases = () => {

    const dispatch = useDispatch()

    const purchases = useSelector(state => state.phurchases.data?.purchases)

    useEffect(() => {

        dispatch(getPurchases())

    }, [dispatch])


    return (
        <div>

            {
                purchases?.map(purchase => (
                    <div key={purchase.id}>
                        <h1>{purchase?.createdAt}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default Purchases