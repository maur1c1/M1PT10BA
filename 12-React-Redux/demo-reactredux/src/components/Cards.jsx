import React from "react";
import {connect} from "react-redux";
import { getUsers } from "../redux/actions";

class Cards extends React.Component{

    constructor(props){
        super(props)
    }

componentDidMount(){
    this.props.getUsers();
}

    render(){
        return(
            <>
                <h1>Users: </h1>
                {
                    this.props.users.map(user => {
                        return (
                            <div>
                                <p>{user.name}</p>
                            </div>
                        )
                    })                    
                }
            </>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch)=>{
            return{
                getUsers: ()=> {dispatch(getUsers())}
            }
}

export default connect(
    mapStateToProps, //me permite traer informacion del estado global
    mapDispatchToProps //me permite despachar acciones
) (Cards);

