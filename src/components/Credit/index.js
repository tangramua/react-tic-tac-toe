import React from 'react'
import Logo from '../Logo'
import Button from '../Button'
import { Link } from 'react-router-dom'

import './style.css'

const Credit = (props) => {
    const { users } = props.users
    if(users){

        const usersList = users.map(item => {
            return (
                <p className="user" key={item.id}>{item.name}</p>
            )
        })

        return (
            <div>
                <Logo />
                <div className="content">
                    <p>Credit</p> 
                    <div className="users-list">
                        {usersList}
                    </div>
                    <Link to="/"><Button text="Back"/></Link>
                </div>
            </div>
        )
    }
    else {
        return <div>Loading...</div>
    }
}

export default Credit