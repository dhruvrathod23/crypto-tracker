import React from 'react'
import './Coin.css';

const Coin = ({name,image,price,Symbol,volume}) => {
    return (
        <div className="container">
            <div className="row">
<div className="coin">
    <img src={image} />
    <h1>{name}</h1>
    <p className ="symbol">{Symbol}</p>
    <p className ="price">₹{price}</p>
    <p className ="symbol">{volume}</p>
</div>
            </div>
            
        </div>
    )
}

export default Coin
