import React from "react"

import InputOption from "./InputOption.js"

import CreateIcon from '@material-ui/icons/Create'
import "./feed.css"

const Feed = () => {
    return(
        <div className="feed">
            <div className="feedInputContainer">
                <div className="feedInput">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feedInputOptions">
                    <InputOption />
                </div>
            </div>
        </div>
    )
}

export default Feed