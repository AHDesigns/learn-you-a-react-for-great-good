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