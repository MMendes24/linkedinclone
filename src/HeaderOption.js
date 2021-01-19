import React from "react"
import "./headerOptions.css"
import { Avatar } from "@material-ui/core"

const HeaderOption = ({ avatar, Icon, title }) => {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOptionIcon" src={avatar}/>}
            {avatar && 
                <Avatar className="headerOptionIcon" />
            }
            <h3 className="headerOptionTitle">{title}</h3>
        
        </div>
    )
}

export default HeaderOption