import React from 'react';
import './Header.css';

function Header() {

    return (
        <div className="header">
            <div style={{fontWeight:'bold',padding:16,color:'#006b6b'}}>&nbsp;Keep Note</div>
            <div className="horizontal-container">   <div >About </div>
                <div>Notes </div>
                <div>Accounts </div>
                <div>Login </div></div>

        </div>
    )
}

export default Header 