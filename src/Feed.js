import React, { useEffect, useState } from "react"

import InputOption from "./InputOption"
import Post from "./Post"
import { db } from "./firebase"
import firebase from "firebase"

import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventIcon from '@material-ui/icons/Event'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import "./feed.css"

const Feed = () => {
    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => {
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()

                }))
            )
        })
    }, [])

    const sendPost = e => {
        e.preventDefault()
        db.collection("posts").add({
            name: "Mars Mendes",
            description: "this a test",
            message: input,
            photoURL: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    return (
        <div className="feed">
            <div className="feedInputContainer">
                <div className="feedInput">
                    <CreateIcon />
                    <form>
                        <input type="text" onChange={e => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feedInputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>

            {/* Posts */}
            {posts.map(({ id, data: { name, description, message,
                photoURL } }) => {
                return (
                    <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoURL}
                    />
                )
            })}
        </div>
    )
}

export default Feed