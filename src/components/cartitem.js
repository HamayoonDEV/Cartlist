import './cartitem.css'
import React from 'react'

function Cartitem() {
    let items = {
        price:999,
        title : 'Fan',
        image:"",
        qty:1
    }
    const increase =()=>{
        items.qty++

    }
  return (
    <>
    <div className='cartitem' >
        <div className='right' >
            <img alt='' src={items.image} />
        </div>
        <div className='left' >
            <div><h1>{items.title}</h1></div>
            <div> price:{items.price}</div>
            <div>qty:{items.qty}</div>

        </div>
    </div>
    <div className='btn-icons' >
    <img alt='increase' src='https://cdn-icons-png.flaticon.com/128/7171/7171790.png' onClick={increase.bind(items)} />
        <img alt='decrease' src='https://cdn-icons-png.flaticon.com/128/7171/7171789.png' />
        <img alt='delete' src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png' />
    </div>
    </>
  )
}

export default Cartitem