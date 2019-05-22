import React from 'react';
import ReactDOM from 'react-dom';

import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <div className="right">
                    <button onClick="window.location.href='about_us.html'">ABOUT US</button>
                    <button onClick="window.location.href='contacts.html'">CONTACTS</button>
                    <button onClick="window.location.href='howdy_partners.html'">PARTNERS</button>
                </div>
            </nav>
        );
    }
}

export default Nav;
