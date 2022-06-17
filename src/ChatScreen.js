import React, { useState } from 'react'
import './ChatScreen.css'
import Avatar from '@mui/material/Avatar'

function ChatScreen() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Jason',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Lara_Stone_NYC.jpg',
            message: 'Whats up!'
        },
        {
            name: 'Jason',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Lara_Stone_NYC.jpg',
            message: 'When you will be free?'
        },
        {
            message: 'Might be at 7pm, anything important??'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');

    }
    return (
        <div className='chat_screen'>
            <p>You matched on 10/06/22</p>
            {messages.map(message => (
                message.name ?
                    (
                        <div className='chatscreen_msg'>
                            <Avatar
                                className='chatscreen_profilepic'
                                alt={message.name}
                                src={message.image}
                            />
                            <p className='chatscreen_text'>{message.message}</p>
                        </div>
                    ) :
                    (
                        <div className='chatscreen_yourmsg'>
                            <p className='chatscreen_yourtext'>{message.message}</p>
                        </div>
                    )
            ))}

            <form className='chatscreen_inputform'>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className='chatscreen_inputfield' type='text' placeholder='Type a message...'></input>
                <button onClick={handleSend} className='chatscreen_inputbutton' type='submit'>SEND</button>
            </form>

        </div>
    )
}

export default ChatScreen;