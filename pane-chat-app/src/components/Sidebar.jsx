import React from 'react'
import Nav from './Nav'
import Chats from './Chats'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Nav />
            <Chats />
        </div>
    )
}

export default Sidebar