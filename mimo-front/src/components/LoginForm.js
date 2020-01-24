import React, {Component} from 'react'

class LoginForm extends Component{

    state={
        id: ""
    }

    handleChange=(e)=>{
        e.persist()
        this.setState({id: e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.changeId(this.state.id)
    }

    render=()=>{
        return(
            <div id="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.id}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

const msp = (state) => ({
    user: state.character.active
})

export default LoginForm