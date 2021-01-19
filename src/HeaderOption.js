import React from "react"
import "./headerOptions.css"

const HeaderOption = ({ Icon, title }) => {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption" />}
            <h3 className="headerOptionTitle">{title}</h3>
        
        </div>
    )
}

export default HeaderOption