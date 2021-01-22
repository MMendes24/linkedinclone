import React from "react"

import InputOption from "./InputOption"

import { Avatar } from "@material-ui/core"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import MessageIcon from "@material-ui/icons/Message"
import ShareIcon from "@material-ui/icons/Share"
import SendIcon from "@material-ui/icons/Send"

import "./post.css"

const Post = ({ name, description, message, photoUrl }) => {
    return(
        <div className="post">
            <div className="postHeader">
                < Avatar />
                <div className="postInfo">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="postBody">
                <p>{message}</p>
            </div>

            <div className="postButtons">
                <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
                <InputOption Icon={MessageIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareIcon} title="Share" color="gray" />
                <InputOption Icon={SendIcon} title="Send" color="gray" />
            </div>
        </div>
    )
}

export default Post