import React from 'react'
import Navbar from '../components/navbar'
import Cartitem from '../components/cartitem'

class Home extends React.Component {
  constructor(){
    super()
this.state = {
   products:[{
    price:999,
    title : 'watch',
    image:"",
    qty:12,
    id:1
   },
   {
    price:999,
    title : 'Fan',
    image:"",
    qty:1,
    id:2
   },
   {
    price:99,
    title : 'laptop',
    image:"",
    qty:10,
    id:3
   }

   ]
}
}
handleIncreaseQty = (product)=>{
        const {products}=this.state
        const index = products.indexOf(product)
        products[index].qty +=1

        this.setState({
          products:products
        })
}
  
  
  render(){
    const {products}=this.state
  return (
    <>
    <Navbar/>
    
    {products.map((product)=>{
      return <Cartitem product={product} key={product.id} onIncreaseQuntity={this.handleIncreaseQty}  />

    })}
    
    </>
  )}
}

export default Home