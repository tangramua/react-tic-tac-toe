import React from 'react'
import { getUsers } from '../../actions/getUsers'
import Credit from '../../components/Credit'
import { connect } from 'react-redux'

const CreaditContainer = (props) => {
    
    const { users } = props 
    
    return (
        <Credit users={users} />
    )
}

const mapStateToProps = (store) => ({
        users: store.users
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: dispatch(getUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreaditContainer)