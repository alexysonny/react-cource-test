import React, { Component } from 'react'
import './navbar.css'

export default class Navbar extends Component{
    render(){
        return(
            <div className="navbarWrapper">
                <div className="navbarElements">
                    <ul>
                        <li>Домой</li>
                        <li>Новости</li>
                        <li>Профиль</li>
                        <li>Вход</li>
                    </ul>
                </div>
            </div>
        );
    }
}