import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
    return (
        <div className='chat'>
            <div className='chat-nav'>
                <div className='user-name'>User Name</div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat