import './cartitem.css'
import React from 'react'

class Cartitem extends React.Component {
    constructor(){
        super()
    this.state = {
        price:999,
        title : 'Fan',
        image:"",
        qty:1
    }}
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
  return (
    <>
    <div className='cartitem' >
        <div className='right' >
            <img alt='' src={this.state.image} />
        </div>
        <div className='left' >
            <div><h1>{this.state.title}</h1></div>
            <div> price:{this.state.price}</div>
            <div>qty:{this.state.qty}</div>

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