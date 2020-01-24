import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.js'
import { FFXIV_API_BASE_URL } from "../index"

class Login extends Component{
    state={
        id: "",
        character: null
    }

    changeId=(value)=>{
        this.setState({id: value}, this.fetchCharacter)    
    }

    fetchCharacter=()=>{
        fetch(FFXIV_API_BASE_URL + "character/" + this.state.id)
        .then(res=>res.json())
        .then(character=>this.setState({character}))
    }

    render = () =>{
        console.log(this.state.character)
        return(
            <div id="login-page">
                <LoginForm changeId={this.changeId}/>
                {this.state.character? <p>{"Hello"}</p>:null}
            </div>
        )
    }
}

export default Login