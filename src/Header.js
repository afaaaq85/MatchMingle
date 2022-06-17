import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useHistory} from "react-router-dom";


function Header({backButton}) {
    const history = useHistory();
    return (
        <div className='header'>

            {backButton ? (
                <IconButton onClick={()=> history.replace(backButton)}><ArrowBackIosIcon fontSize='large' className='header_icon'/></IconButton>
            ):
            (
                <IconButton><PersonIcon fontSize="large" className='header_icon' /></IconButton>
            )}

            <Link to="/">
                <img className='header_logo' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/TinderLogo-2017.svg/2560px-TinderLogo-2017.svg.png' 
                alt='' />
            </Link>

            <Link to="/chat">
                <IconButton><ForumIcon fontSize='large' className='header_icon'/></IconButton>
            </Link>

        </div>
    )
}

export default Header;