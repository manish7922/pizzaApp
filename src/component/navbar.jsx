import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from "react";
import {Link} from "react-router-dom"
class Navbar extends Component {


    render(){
 
  
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand"  to="/">Pizza System</Link>
    <div className="" id="navbarSupportedContent">
    <ul className="navbar-nav">
    
     
    <li className="nav-item">
    <Link className="navbar-brand"  to="/veg">Veg Pizza</Link>
    </li>
    
    <li className="nav-item">
<Link className="navbar-brand"  to="/nonveg">Non-Veg Pizza</Link>
    </li>
    <li className="nav-item">
    <Link className="navbar-brand"  to="/sidedish">side Dishes</Link>
    </li>
    <li className="nav-item">
    <Link className="navbar-brand"  to="/others">Other Items</Link>
    </li>
    </ul>
    </div>
        </nav>
)
    }
}
export default Navbar;