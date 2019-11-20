import React from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

function Products(props) {

    const handleClick = (id) => {
        props.addToCart(id);
        alert("Add to cart successfully");
    }
    const styleWidth = {
        "width": "100%"
    };

    let itemList = props.items.map(item => {
        return (
            <div className="card" key={item.id}>
                <div className="card-image">
                    <img src={item.img} alt={item.title} />
                    <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => { handleClick(item.id) }}><i className="material-icons">add</i></span>
                </div>
                <div className="card-content">
                    <span className="card-title" title={item.title}>{item.title}</span>
                    <p title={`"Item Description of "${item.title}`}>{item.desc}</p>
                    <p><b title="price">Price: <span title={`Price ${item.price}$`}>{item.price}$</span></b></p>
                </div>
            </div>

        )
    })

    return (
        <div className="box">
            <h3 className="center" title="Our items" style={styleWidth}>Our items</h3>
            <div className="box">
                {itemList}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)


