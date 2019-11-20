import React from 'react';
import MetaTags from 'react-meta-tags';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'
import Recipe from './Recipe'
function Cart(props){
    console.log(props);
    //to remove the item completely
    const handleRemove = (id)=>{
        props.removeItem(id);
    }
    //to add the quantity
    const handleAddQuantity = (id)=>{
        props.addQuantity(id);
    }
    //to substruct from the quantity
    const handleSubtractQuantity = (id)=>{
        props.subtractQuantity(id);
    }
        let addedItems = props.items.length ?
            (  
                props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id} tabIndex={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title" title={item.title}>{item.title}</span>
                                        <p title={item.desc}>{item.desc}</p>
                                        <p><b title={item.price}>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/auto_zone/cart"><i className="material-icons" onClick={()=>{handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/auto_zone/cart"><i className="material-icons" onClick={()=>{handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
              <MetaTags>
                <title>AutoZone, Inc. | Cart</title>
                <meta name="description" content="Cart products" />
                <meta property="og:title" content="AutoZone, Inc. | Cart" />
              </MetaTags>
                <div className="cart">
                    <h5 title="You have ordered">You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Recipe />          
            </div>
       )
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)