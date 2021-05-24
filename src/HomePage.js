import React from 'react';
import { Button } from '@material-ui/core';
import './HomePage.css';

function HomePage() {
    return (
        <div className="homePage">
            <div className="header">
                <h1>WhatsApp Web Clone</h1>
                <p>This is a Scoial Network App (Replica of WhatsApp Web) built with Reactjs</p>
            </div>
            <div className="guide">
                <h2>Little Guide</h2>
                <ul className="guide__list">
                    <li>There are different Rooms for different Chats</li>
                    <li>Click the desired room to enter the Chat</li>
                    <li>If you want to create another room than just click on <br />
                        <b>Add New Chat</b> button, and Create your own room🎉</li>
                    <li> Remember: All rooms are Public</li>
                </ul>
            </div>
            <div className="stack">
                <h3>Tech Stack</h3>
                <ul>
                    <li>React js</li>
                    <li>Firebase Firestore DB</li>
                    <li>Material UI</li>
                    <li>React Router</li>
                    <li>React Context API</li>
                    <li>Redux</li>
                    <li>Google Authentication</li>
                </ul>
            </div>
            <div className="footer">
                <p>Made with 🖤 by <a href="https://github.com/sharjeelyunus" target="_blank" rel="noreferrer">Sharjeel Yunus</a></p>
                <a href="https://github.com/sharjeelyunus/Whatsapp-Clone-React" target="_blank" rel="noreferrer">
                    <Button>Source Code</Button>
                </a>
            </div>
        </div >
    )
}

export default HomePage;