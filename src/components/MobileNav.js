import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
class MobileNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
          redirectToReferrer: false,
        }; 
        this.logout = this.logout.bind(this);
      }

      logout(){
        sessionStorage.setItem("userData",'');
        sessionStorage.clear();
        this.props.history.push("/auto_zone/");
      }

    render() {
      
        var strUserName = sessionStorage.getItem('userData');
        const style     = strUserName ? {display: 'none'} : {};
        const style1    = !strUserName ? {display: 'none'} : {};
    return(
	<>
  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label for="openSidebarMenu" className="sidebarIconToggle">
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>
  <div id="sidebarMenu">
    <ul className="sidebarMenuInner">
        <li><Link to="/auto_zone/">Shop</Link></li>
        <li><Link to="/auto_zone/contact">Contact Us</Link></li>
        <li><Link to="/auto_zone/about">About Us</Link></li>
        <li style={style}><Link to="/auto_zone/login" >Login</Link></li>
        <li style={style}><Link to="/auto_zone/signup" style={style}>Signup</Link></li>
        <li  style={style1}><Link href="/auto_zone/my_account">My Account</Link></li>
        <li  style={style1}><Link to="#"  onClick={this.logout}>Log out</Link></li>
    </ul>
  </div>
   </>
   
        
    )
    }
}

export default withRouter(MobileNav);