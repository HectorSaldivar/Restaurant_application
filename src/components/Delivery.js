import React from 'react'

function Delivery() {
    return (
        <div className='delivery'>
            <h1>Delivery</h1>
            <div className='deliveryIcons'>
                    <span className='firstLogo'>
                    <a href='/'>
                           <img src="https://mitacotaqueria.com/wp-content/uploads/2020/05/Ritual-Logo-Black-PNG-small.png" alt="First slide"></img>
                        </a>
                    </span>
                    <span className='secondLogo'>
                        <a href='/'>
                           <img src="https://cdn.doordash.com/img/dasher/DD_OpenGraph_preview.png" alt="First slide"></img>
                        </a>
                    </span>
                    <span className='thirdLogo'>
                        <a href='/'>
                            <img src="https://cdn.iconscout.com/icon/free/png-256/uber-eats-1613370-1369417.png" alt="First slide"></img>
                        </a>
                    </span>
            </div>
        </div>
    )
}

export default Delivery

