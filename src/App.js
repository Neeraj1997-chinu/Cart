import React from 'react';

import Cart from './Cart';

import Navbar from  './Navbar';

class App extends React.Component {
  constructor(){
    super();
    //default state
    this.state={
        products :[
            {
                price:99,
                title:'watch',
                qty:1,
                img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                id:1
            },
            {
                price:999,
                title:'Mobile phone',
                qty:1,
                img:'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                id:2
            },
            {
                price:999,
                title:'laptop',
                qty:1,
                img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
                id:3
            }
        ]
    }
    // this.testing();
    //you can bind here too
    // this.increaseQuanity = this.increaseQuanity.bind(this);
    //or we can use arrow function
  }
  handleIncreaseQuantity =(product) =>{
      console.log("increase the quantity",product );
      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty +=1;

      this.setState({
          products :products
      });
  }
  handleDecreaseQuantity =(product) =>{
      console.log("Decrease the quantity",product );
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty===0){
          return;
      }
      products[index].qty -=1;

      this.setState({
          products :products
      });
  }
  handleDeleteProduct = (id) => {
      const {products} = this.state;

      const items = products.filter((item) => item.id !==id);

      this.setState({
          products:items
      });
  }
  getCartCount = () => {
    const {products} = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }
  getCartTotal = () => {
    const {products} = this.state;

    let Total = 0;

    products.forEach((product) => {
        Total = Total+ product.price * product.qty;
    })

    return Total;
  }
  render(){
    const {products} = this.state;
    return (
      <div className="App">
          <Navbar count={this.getCartCount()}/>
          <Cart
          products = {products}
          onIncreaseQuantity ={this.handleIncreaseQuantity}
          onDecreaseQuantity ={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          />
          <div style={ {padding:10, fontSize:20 }} >TOTAL : {this.getCartTotal()}</div>
      </div>
      
    );
  }
}

export default App;
