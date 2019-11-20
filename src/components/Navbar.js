import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/az-logo.svg';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
          fullName:'',
          redirectToReferrer: false,
        }; 
        this.logout = this.logout.bind(this);
      }

      logout(){
        sessionStorage.setItem("userData",'');
        sessionStorage.clear();
        this.props.history.push("/auto_zone/");
      }

      componentDidMount() {
        if (sessionStorage.getItem('userData')) {
            
            let data = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({fullName: data[0].fullName});
        }
      }

    render() {

        var strUserName = sessionStorage.getItem('userData');
        const style     = strUserName ? {display: 'none'} : {};
        const style1    = !strUserName ? {display: 'none'} : {};
        return(
                <nav className="nav-wrapper">
                    <div className="container">
                        <Link to="/auto_zone/" className="brand-logo"><img src={logo} alt="logo" /></Link> 
                        <Link to="/auto_zone/cart" className="brand-cart"><i className="material-icons">shopping_cart</i></Link>                                      
                        <ul className="right">
                            <li><Link to="/auto_zone/">Shop</Link></li>
                            <li><Link to="/auto_zone/about">About Us</Link></li>
                            <li><Link to="/auto_zone/contact">Contact Us</Link></li>
                            <li><Link to="/auto_zone/login" style={style}>Login</Link></li>
                            <li><Link to="/auto_zone/signup" style={style}>Signup</Link></li>
                            <li><Link href="/auto_zone/my_account" style={style1}>Welcome, {this.state.fullName}</Link></li>
                            <li><Link to="#" style={style1} onClick={this.logout}>Log out</Link></li>
                            <li><Link to="/auto_zone/cart"><i className="material-icons">shopping_cart</i></Link></li>
                        </ul>
                    </div>
                </nav>

            
        )
    }
}

export default withRouter(Navbar);