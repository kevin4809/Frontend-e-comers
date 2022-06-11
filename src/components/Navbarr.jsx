import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCart } from '../store/slices/car.slice';
import OffCanvas from './OffCanvas';

const Navbarr = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getCart())

    }, [dispatch])


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">E-COMERS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navbar-aling">
                            <li className="nav-item">
                                <a className="nav-link " href="#/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/purchases">Purchases</a>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Cart</div>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <OffCanvas />

        </div>
    )
}

export default Navbarr