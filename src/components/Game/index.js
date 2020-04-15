import React from 'react'
import useModal from 'use-react-modal'
import Button from '../Button'
import { Link } from 'react-router-dom'

import './style.css'

const Game = (props) => {

    const { Modal } = useModal()
    const { playerOne, playerTwo, winner } = props

    return(
        <>
            {winner && (
                <Modal>
                    <div className="modal">
                        <p>Victory to: {winner === 'X' ? playerOne : playerTwo}</p>
                        <div className="modal-group-btn">
                            <button className="default-btn" onClick={() => props.restart()} >Restart</button>
                            <Link to="/"><Button text="Quit" /></Link>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default Game