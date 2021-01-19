import React from "react"

import { Avatar } from "@material-ui/core"
import "./post.css"

const Post = ({ name, description, message, photoUrl }) => {
    return(
        <div className="post">
            <div className="postHeader">
                < Avatar />
                <div className="postInfo">
                    <h2>Mars Mendes</h2>
                    <p>Description</p>
                </div>
            </div>

            <div className="postBody">
                <p>Message</p>
            </div>
        </div>
    )
}

export default Post