import React, { Component } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div className="navbar">

            
                <Link className="link" to="/scan">Scannen</Link>
                <Link className="link" to="/search">Produkt Suchen</Link>
                <Link className="link" to="/calc">Selbst berechnen</Link>
            

            </div>
        )
    }
}

export default Navbar