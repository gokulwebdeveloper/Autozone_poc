import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetQTY } from './actions/cartActions'

function OrderConform(props){
    const handleRemove = ()=>{
        props.resetQTY();
        props.history.push('/auto_zone/');
    }
    return(
            <div className="container">
                <h3 className="center">Your Order Confirmed Successfully</h3>
                <button className="waves-effect waves-light btn pink remove center" onClick={()=>{handleRemove()}}>Redirect to home</button>
            </div>
        );
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        resetQTY: ()=>{dispatch(resetQTY())}
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(OrderConform));