import React from 'react'
import { Component } from 'react';
// import "../scss/Shared/congratsPage.scss"
import { withRouter, WithRouterProps } from '../components/Shared/WithRouter';

interface ICongratsPageState{
    userName?: string,
    password?: string, 
}

class CongratsPage extends Component<WithRouterProps<unknown>, ICongratsPageState> {
    constructor(props: WithRouterProps<unknown>) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount() {
    
    }

    render() {
        return(
        <div className='congrats-container'>
            <h1>congrats Page</h1>
        </div>
        
        )
    }
    
}
export default withRouter<WithRouterProps<unknown>>(CongratsPage);