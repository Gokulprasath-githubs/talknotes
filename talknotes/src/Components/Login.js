import React, { useState } from 'react';
import './Home.css';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            onLogin();
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div style={{ backgroundColor: '#fdf5e6', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="form-containers">
                <div className="header-boxd">
                    <h1>&nbsp;&nbsp;Login</h1>
                </div>
                <form onSubmit={handleLogin}>
                    <h1 style={{ fontSize: '23px' }}>Login</h1>
                    <div className="form-field">
                        <label style={{ textAlign: 'left', fontSize: '11px' }}>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-field">
                        <label style={{ textAlign: 'left', fontSize: '11px' }}>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="form-buttons">
                        <button type="submit">Login</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default Login;
