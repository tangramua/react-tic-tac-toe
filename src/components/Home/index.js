import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom' 
import Logo from '../Logo'
import useModal from 'use-react-modal'

import './style.css'

const Home = (props) => {

    const { setOne, setTwo, playerOne, playerTwo } = props
    const { isOpen, openModal, Modal } = useModal()

    const handleFirstPlayer = (e) => {
        setOne(e.target.value)
    }
    const handleSecondPlayer = (e) => {
        const name = e.target.value
        setTwo(name)
    } 

    return (
        <div>
            <Logo />
            <div className="btn-group">
                <button className="default-btn" onClick={openModal}>New Game</button>
                <Link to="/credit"><Button text="Credit" /></Link>
                <Button text="Exit" />
            </div>
            {isOpen && (
                <Modal>
                    <div className="modal">
                        <p>Start new game</p>
                        <p><label>Player one</label>
                        <input type="text" onChange={handleFirstPlayer} id="player1" /></p>
                        <p><label>Player two</label>
                        <input type="text" onChange={handleSecondPlayer} id="player2" /></p>
                        <Link to="/start"><button disabled={playerOne && playerTwo ? false : true} className='default-btn'>Start!</button></Link>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default Home