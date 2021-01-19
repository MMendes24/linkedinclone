import React from "react"

import CreateIcon from '@material-ui/icons/Create'

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
            </div>
        </div>
    )
}

export default Feed