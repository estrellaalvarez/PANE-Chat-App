import React from 'react'
import Nav from '../components/Nav'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Chats from '../components/Chats'
import Message from '../components/Message'
import Input from '../components/Input'
import '../App.css';


const Dashboard = () => {
    return (
        <div className='dash'>
            <div className='container'>
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Dashboard