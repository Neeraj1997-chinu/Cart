import React from 'react';

const CartItem = (props) =>{
    // constructor(){
    //     super();
    //     //default state
    //     this.state={
    //         price:999,
    //         title:'Mobile phone',
    //         qty:1,
    //         img:''
    //     }
    //     // this.testing();
    //     //you can bind here too
    //     // this.increaseQuanity = this.increaseQuanity.bind(this);
    //     //or we can use arrow function
    // }
    // testing(){
    //     const promise = new Promise((resolve,reject) => {
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);
    //     })

    //     promise.then(() => {
    //         this.setState({ qty: this.state.qty + 10});

    //         this.setState({ qty: this.state.qty + 10});

    //         this.setState({ qty: this.state.qty + 10});

    //         console.log(this.state);
    //     });
    // }
    // increaseQuanity(){
    //     console.log('this.state',this.state);
    // }
    //arrow function automatically bind the function
    //  increaseQuanity = () => {
        // this.state.qty +=1;
        // console.log('this.state',this.state);
        // use set state form 1
        // this.setState({
        //     //react take this object and merge it with state object and it will do shallow merging
        //     //shallow merging(which means it only update the qty  after set state react utomatically rerender)
        //     qty:this.state.qty + 1
        // });

        //use set state form 2 using call back
        //if it requires prevState then we use this
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty +1
    //         }
    //     }, ()=>{
    //         console.log(this.state);
    //     });
    // }
    // decreaseQuantity = () =>{
    //     const {qty} = this.state;
    //     if(qty===0){
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty -1
    //         }
    //     });
    // }
    
        // console.log('this.props',this.props)
        const{price,title,qty} = props.product;
        const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct } = props;
        return(
            <div className="cart-item">
                
                <div className="left-block">
                    <img alt="" style={styles.image} src={product.img}/>
                </div>
                <div className="right-block"> 
                    <div style={ { fontSize:25 } } > {title} </div>
                    <div style={ { color:'#777' } }> Rs {price} </div>
                    <div  style={ { color:'#777' } }> Qty {qty} </div>
                    <div className="cart-item-actions">
                        {/* button */}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                        onClick={() => onIncreaseQuantity(product) }
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/premium-icon/icons/svg/2985/2985073.svg" 
                        onClick={() => onDecreaseQuantity(product) }
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1345/1345874.svg" 
                        onClick={() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    
}

const styles ={
    image:{
        height:120,
        width:120,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;