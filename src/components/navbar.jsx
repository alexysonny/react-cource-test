import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './navbar.css'

export class Navbar extends Component{
    render(){
        return(
            <div className="navbarWrapper">
                <div className="navbarElements">
                    <ul>
                        <li><Link to="/">На главную</Link></li>
                        <li><Link to="/news">Новости</Link></li>
                        <li><Link to="/profile">Профиль</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isLoggedIn
  }
}
connect(mapStateToProps)(Navbar);
export default Navbar;