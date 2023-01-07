import './cartitem.css'
import React from 'react'

class Cartitem extends React.Component {
   
    increase =() => {
        this.setState((previousState)=>{
            return{
                qty:previousState.qty +1
            }
        })
    }
    decrease = ()=>{
        const {qty} =  this.state
        if(qty=== 0){
            return
        }
        this.setState((previousState)=>{
            return{
                qty : previousState.qty -1
            }
        })

    }
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
    <img alt='increase' src='https://cdn-icons-png.flaticon.com/128/7171/7171790.png' onClick={this.increase.bind(this)} />
        <img alt='decrease' src='https://cdn-icons-png.flaticon.com/128/7171/7171789.png' onClick={this.decrease.bind(this)} />
        <img alt='delete' src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png' />
    </div>
    </>
  )}
}

export default Cartitem