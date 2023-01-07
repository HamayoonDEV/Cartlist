import './cartitem.css'
import React from 'react'

class Cartitem extends React.Component {
   
    render(){
        const {price,title,qty,image}=this.props.product
  return (
    <>
    <div className='cartitem' >
        <div className='right' >
            <img alt='' src={image} />
        </div>
        <div className='left' >
            <div><h1>{title}</h1></div>
            <div> price:{price}</div>
            <div>qty:{qty}</div>

        </div>
    </div>
    <div className='btn-icons' >
    <img alt='increase' src='https://cdn-icons-png.flaticon.com/128/7171/7171790.png' onClick={()=>this.props.onIncreaseQuntity(this.props.product)} />
        <img alt='decrease' src='https://cdn-icons-png.flaticon.com/128/7171/7171789.png'  />
        <img alt='delete' src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png' />
    </div>
    </>
  )}
}

export default Cartitem