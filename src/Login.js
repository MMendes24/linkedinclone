import React, { useState } from "react"
import { auth } from "./firebase"
import "./login.css"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const loginToApp = e => {
        e.preventDefault()
    }

    const register = () => {

    }

    return (
        <div className="login">
            <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.png"
                alt="Linked In" />

            <form>
                <input
                    value={name}
                    onChange={(e) =>setName(e.target.value)}
                    placeholder="Full name (required if registering)"
                    type="text"
                    name=""
                    id="" />

                <input
                    placeholder="Profile pic URL (optional)"
                    type="text"
                    name=""
                    id="" />

                <input
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    name=""
                    id="" />


                <input
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
                    placeholder="Password"
                    type="Password"
                    name=""
                    id="" />

                <button type="submit">Sign In</button>
            </form>

            <p>Not a member? {" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login