import React from 'react';
import './Chat.css';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function Chat({ name, message, profilePic, timestamp }) {
    return (
        <Link to={`/chat/${name}`}
        profile message profilePic
        >
            <div className='chat'>
                <Avatar className='chat_image' src={profilePic} alt={name} />
                <div className='chat_person'>
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className='timestamp'>{timestamp}</p>
            </div>
        </Link>
    );
}

export default Chat;