import React from 'react'
import { setOne, setTwo} from '../../actions/setNamePlayer'
import Home from '../../components/Home'
import { connect } from 'react-redux'

const HomeContainer = (props) => {

    const { setOne, setTwo, playerOne, playerTwo } = props
    return (
        <Home
            setOne={setOne}
            setTwo={setTwo}
            playerOne={playerOne}
            playerTwo={playerTwo}
        />
    )
}

const mapStateToProps = (store) => ({
    playerOne: store.name.userOne,
    playerTwo: store.name.userTwo
})

const mapDispatchToProps = (dispatch) => ({
    setOne: name => dispatch(setOne(name)),
    setTwo: name => dispatch(setTwo(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)