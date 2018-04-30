import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

export default class Navbar extends Component{
    render(){
        return(
            <div className="navbarWrapper">
                <div className="navbarElements">
                    <ul>
                        <li><Link to="/">На главную</Link></li>
                        <li><Link to="/news">Новости</Link></li>
                        <li><Link to="/profile">Профиль</Link></li>
                        <li><Link to="/login">Вход</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}