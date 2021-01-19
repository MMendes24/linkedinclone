import React from 'react'
import "./header.css"

import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className="header">
            <h1>This is the header</h1>

            <div className="headerLeft">
                <img src="" alt="" />
            </div>

            <div className="headerRight">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>
    )
}

export default Header