import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Note from './Components/Note';

function App() {
    const [currentPage, setCurrentPage] = useState('Home');
    const [username, setUsername] = useState('');

    const handleRegister = () => {
        setCurrentPage('Login');
    };

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUsername(storedUser.username); // Set the username after login
        }
        setCurrentPage('Note');
    };

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home onRegister={handleRegister} />;
        } else if (currentPage === 'Login') {
            return <Login onLogin={handleLogin} />;
        } else if (currentPage === 'Note') {
            return <Note username={username} />;
        }
        return null;
    };

    return (
        <div className="App">
            <Header />
            <div style={{ backgroundColor: '#fdf5e6 ', textAlign: 'left', padding: '10px' }}>
                Homepage / {currentPage}
            </div>
            <div>{renderPage()}</div>
        </div>
    );
}

export default App;
