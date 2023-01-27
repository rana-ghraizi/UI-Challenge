import React from 'react';
import Image1 from '../images/image3.jpeg';
import './Definition.css'

function Definition(props) {
    return (
    <div className='definition' id='home'>
        <p className='title'>What is <span className='mate'>Maté?</span></p>
        <div className='definition-content'>
            <img src={Image1} className="image1"/>
            <div className='mate-text'>
                <p>
                    Matè is also known as yerba matè is a traditional South American caffeine-rich infused drink.<br/><br/>

                    It is made by soaking dried leaves of the holly species Ilex paraguariensis in hot water and is served with a metal straw known as bombija in a container typically made from calabash gourd.<br/><br/>

                    It grows in Argentina, Paraguay, Uruguay, and south of Brazil and is commonly known in Syria and parts of Lebanon where it was first introduced from Argentina.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Definition;
