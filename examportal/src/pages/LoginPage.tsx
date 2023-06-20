import React from 'react'
import { ChangeEvent, Component } from 'react';
import "../scss/Shared/loginForm.scss"
import { withRouter, WithRouterProps } from '../components/Shared/WithRouter';
import LoginForm from '../components/Login/LoginForm';

interface ILoginPageState{
    userName?: string,
    password?: string, 
}

class LoginPage extends Component<WithRouterProps<unknown>, ILoginPageState> {
    constructor(props: WithRouterProps<unknown>) {
        super(props);
        this.state = {
            
        }
    }

    handleLoginSubmit = async (values: any) => {
        console.log(values)
        console.log("login success")
    }
    componentDidMount() {
        
    }

    render() {
       return(
        <div className='login-main-container'>
            <LoginForm
                handleLoginSubmit={this.handleLoginSubmit}
            />
        </div>
        
       )
    }

}    

export default withRouter<WithRouterProps<unknown>>(LoginPage);