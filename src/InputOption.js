import React from "react"
import "./inputOptions.css"

const InputOption = ({ Icon, title, color }) => {
    return (
        <div className="inputOption">
            <Icon style={{ color: color }} />
            
        </div>
    )
}

export default InputOption