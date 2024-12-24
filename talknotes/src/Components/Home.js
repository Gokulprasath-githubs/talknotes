import React, { useState } from 'react';
import './Home.css';

function Home({ onRegister }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        localStorage.setItem('user', JSON.stringify(formData));
        onRegister();
    };

    return (
        <div style={{ backgroundColor: '#fdf5e6', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="form-containers">
                <div className="header-boxd">
                    <h1>&nbsp;&nbsp;Sign up</h1>
                </div>
                <form onSubmit={handleRegister}>
                    <h1 style={{ fontSize: '23px' }}>Sign up</h1>
                    <div className="form-field">
                        <label style={{ textAlign: 'left', fontSize: '11px' }}>Username</label>
                        <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
                    </div>
                    <div className="form-field">
                        <label style={{ textAlign: 'left', fontSize: '11px' }}>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div className="form-field">
                        <label style={{ textAlign: 'left', fontSize: '11px' }}>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                    </div>
                    <div className="form-field">
                        <label style={{ textAlign: 'left', fontSize: '11px' }}>Confirm Password</label>
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
                    </div>
                    <div className="form-buttons">
                        <button type="submit" className="register-button">Register</button>
                        <button className="login-button" >Login</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Home;
