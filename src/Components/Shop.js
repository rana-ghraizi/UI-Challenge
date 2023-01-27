import React from 'react';
import cup1 from '../images/cup1.jpeg'
import cup2 from '../images/cup2.jpg'
import cup3 from '../images/cup3.jpeg'
import './Shop.css';
function Shop(props) {
    return (
        <div className='shop' id='products'>
        <p className='title'>Our <span className='mate'>Products</span></p>
        <div className='cups'>
            <div className='cup'>
                <img src={cup1} className="cup-image"/>
                <p>$ 0.00</p>
                <p>Cup 1</p>
            </div>
            <div className='cup'>
                <img src={cup2} className="cup-image"/>
                <p>$ 0.00</p>
                <p>Cup 2</p>
            </div>
            <div className='cup'>
                <img src={cup3} className="cup-image"/>
                <p>$ 0.00</p>
                <p>Cup 3</p>
            </div>
        </div>
        </div>
    );
}

export default Shop;