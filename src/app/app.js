import React from 'react';
import './app.css';
import Header from '../Header/component';
import Feed from '../Feed/component';

export default function App({ prop }) {
    return (
        <div className="contentWrapper">
            <Header />
            <div className="main">
                <div className="mainContent">
                    <Feed />
                    <div className="feedInput">
                        <p>Feed input button</p>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="onlineUser">
                        <p>Online user</p>
                    </div>
                </div>
            </div>
        </div>
    )
}   