import React from 'react'
import '../styles/loading-screen.css'

const LoadingScreen = () => {
    return (
        <div className='overlay' >
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default LoadingScreen