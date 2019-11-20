import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


function OrderSummary(props){    
    const handleClick = (e) => {
        e.preventDefault();
        if(sessionStorage.getItem('userData')) {
            props.history.push('/auto_zone/order-conform');          
        }else{
            props.history.push('/auto_zone/login');
        }
        
    }
    let addedItems = props.items.length ?
    (  
        props.items.map(item=>{
            return(
               
                <tr key={item.id}>
                            <td>{item.id}</td>
                            <td> 
                                <img src={item.img} alt={item.img} width='150' className=""/>
                            </td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.price }</td>                             
                        </tr>
                 
            )
        })
    ):

     (
        <tr><td colSpan="6">Nothing order is placed.</td></tr>
     ) 
     
     let totalAmt = props.items.length ? (  
        <tr><td colSpan="5">Total</td><td>{props.total}</td></tr>
    ): "";

       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                      <p>Order Summary</p>
                      <table striped bordered hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Item Qty</th>
                                <th>Total Amount</th>
                                </tr>
                            </thead>
                            <tbody>

                                {addedItems}  
                                {totalAmt}                            
                            </tbody>
                            </table>
                           <br />
                           <br />
                           <div className="checkout">
                                <button className="waves-effect waves-light btn" onClick={handleClick}>Place Your Order</button>
                            </div>
                            <br />

                </div>       
            </div>
       )
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
    }
}

export default withRouter(connect(mapStateToProps)(OrderSummary));