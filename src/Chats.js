import React from 'react';
import Chat from './Chat';

function Chats() {
    return (
        <div className='chats'>
            <Chat
            name= "Jason"
            message= "Ok hogya jani"
            timestamp= "5 minutes ago"
            profilePic= "https://cdn.mos.cms.futurecdn.net/j7kRb63ZpD3TAQzeH5Vfsd.jpg"
            />
            <Chat
            name= "Lara"
            message= "Assalam o Alikum"
            timestamp= "12 minutes ago"
            profilePic= "https://upload.wikimedia.org/wikipedia/commons/6/60/Lara_Stone_NYC.jpg"
            />
            <Chat
            name= "Sarah"
            message= "Hi! How are you"
            timestamp= "1 hour ago"
            profilePic= "https://www.skadden.com/-/media/images/professionals/j/johnen-sarah/detail/mjdcotddnji5nkm2rg.jpg"
            />
            <Chat
            name= "Mark"
            message= "Whats up?"
            timestamp= "2 days ago"
            profilePic= "https://www.biography.com/.image/t_share/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg"
            />
        </div>
    )
}

export default Chats
