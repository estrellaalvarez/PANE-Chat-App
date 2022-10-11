import React from 'react'

const Input = () => {
    return (
        <div className='input'>
            <input type="text" placeholder='Messsage User Name'></input>
            <input type='file' id="file"></input>
            <button>Send Message</button>
        </div>
    )
}

export default Input