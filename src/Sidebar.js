import React from "react"

import { Avatar } from "@material-ui/core"
import "./sidebar.css"

const Sidebar = () => {

    const recentItem = (topic) => {
        return (
            <div className="sidebarRecentItem">
                <span className="sideHash">#</span>
                <p>{topic}</p>
            </div>
        )
    }

    return (
        <div className="sidebar">
            <div className="sidebarTop">
                <img src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="color gradient background" />
                <Avatar className="sidebarAvatar" />
                <h2>Mars Mendes</h2>
                <h4>mdmbusiness2@gmail.com</h4>
            </div>
            <div className="sidebarStats">
                <div className="sidebarStat">
                    <p>Who viewed you</p>
                    <p className="sidebarStatNumber">2,543</p>
                </div>
                <div className="sidebarStat">
                    <p>Views on post</p>
                    <p className="sidebarStatNumber">2,433</p>
                </div>
            </div>
            <div className="sidebarBottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    )
}

export default Sidebar