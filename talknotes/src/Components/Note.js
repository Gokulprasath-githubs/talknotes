import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from './notesSlice';
import { FaRegNoteSticky } from "react-icons/fa6";
import './Note.css';

function Note({ username }) {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({ title: '', message: '' });

    const notes = useSelector((state) => state.notes.notes || []); // Accessing notes from Redux store
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleAdd = () => {
        if (!formData.title || !formData.message) {
            alert('Please fill out both fields.');
            return;
        }
        dispatch(addNote(formData)); // Add note to Redux store
        setFormData({ title: '', message: '' });
        setShowPopup(false);
    };

    const handleCancel = () => {
        setFormData({ title: '', message: '' });
        setShowPopup(false); 
    };

    return (
        <div style={{ backgroundColor: '#fdf5e6 ', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
                <h1 style={{ padding: 10, marginRight: 30 }}>Good Morning {username}!</h1>
                <div style={{ marginTop: '20px', width: '50%' }}>
                    {Array.isArray(notes) && notes.length > 0 ? (
                        notes.map((note, index) => (
                            <div key={index} style={{ border: ' 2px solid #824d1a', padding: '10px', marginBottom: '10px', borderRadius: '5px',minHeight:'200px',backgroundColor:'white' ,maxWidth: 510}}>
                                <h3 className="header-boxs" >{note.title}</h3>
                                <p  style={{fontSize:'14px', marginLeft:'-35px'}}>{note.message}</p>
                                
                            </div>
                           
                            
                        ))
                    ) : (
                        <p>No notes available. Add one using the icon above.</p>
                    )}
                </div>
                <div>
                    <FaRegNoteSticky
                        onClick={() => setShowPopup(true)}
                        style={{ cursor: 'pointer', fontSize: '24px',marginLeft:300 }}
                    />
                </div>
            </div>

     

            {/* Popup Content */}
            {showPopup && (
                <div
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'white',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        borderRadius: '10px',
                        zIndex: 1000,
                        width:200
                    }}
                >
                    <div className="header-box">
                    <h1>&nbsp;&nbsp;Add Notes</h1>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div  className="form-field">
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '5px', marginTop: '5px' }}
                        />
                    </div>
                    <div  className="form-field">
                              <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '5px', marginTop: '5px' ,height:100,borderColor:'gray'}}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button onClick={handleAdd} style={{ padding: '5px 10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
                            Add
                        </button>
                        <button onClick={handleCancel} style={{ padding: '5px 10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Background Overlay */}
            {showPopup && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        zIndex: 999,
                    }}
                    onClick={handleCancel}
                ></div>
            )}
        </div>
    );
}

export default Note;
