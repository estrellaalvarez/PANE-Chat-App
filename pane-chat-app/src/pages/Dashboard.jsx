import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Navbar from '../components/Navbar'
import Register from './Register'
import '../App.css';


const Dashboard = () => {
    return (
        <div className='dash'>
            <div className='container'>
                <Register />
            </div>
        </div>
    )
}

export default Dashboard