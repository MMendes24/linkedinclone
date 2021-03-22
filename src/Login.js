import React, { useState } from "react"
import login from "./features/userSlice"
import { useDispatch } from "react-redux"
import { auth } from "./firebase"
import "./login.css"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()


    const loginToApp = e => {
        e.preventDefault()
    }

    const register = () => {
        if (!name) {
            return alert("Please enter a full name!")
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic,
                            })
                        )
                    })
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.png"
                alt="Linked In" />

            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name (required if registering)"
                    type="text"
                    name=""
                    id="" />

                <input
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    placeholder="Profile pic URL (optional)"
                    type="text"
                    name=""
                    id="" />

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    name=""
                    id="" />


                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="Password"
                    name=""
                    id="" />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member? {" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login