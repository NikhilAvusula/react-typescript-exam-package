import React from 'react'
import { ChangeEvent, Component } from 'react';
import {useNavigate} from 'react-router-dom'
import "../scss/Shared/loginForm.scss"
import { withRouter, WithRouterProps } from '../components/Shared/WithRouter';
import SignUpForm from '../components/SignUp/SignUpForm';
import { RoutesEnum } from '../helpers/Routes';
import { transformDateWithDash } from '../utils/Utils';
import { IQuestionModel,IOptionModel,ISkillsModel, ICandidateModel } from '../models/User/UserModel';
import CustomerService from "../Services/CandidateService";
import { AxiosError, AxiosResponse } from "axios";
import { catchError } from '../utils/Utils';

interface ISignUpPageProps{
    reqSkills?:ISkillsModel[];
}

interface ISignUpPageState{
   skills?:ISkillsModel[],
   candidateUuid?:string, 
}
class SignUpPage extends Component<WithRouterProps<unknown>, ISignUpPageState,ISignUpPageProps> {
    customerService: CustomerService;
    constructor(props: WithRouterProps<unknown>) {
        super(props);
        this.state = {
            skills:[],
            candidateUuid:"",
        }
        this.customerService = new CustomerService();
    }
    
    handleSignUpSubmit = (values: ICandidateModel) => {
        // console.log(values)
        const date = transformDateWithDash(values?.dateOfBirth)
        const obj = {
            ...values,
            dateOfBirth:date
        }
        this.customerService.saveCanditateInfo(values).then((response) => {
            console.log(response);
            if (response.status === 200) {
               this.setState({candidateUuid:response.data})
            }
          }).catch((error)=>{
            if (error.response.status === 400) {
              catchError(error,true)
            }
          })
        }
        // console.log(obj)
        // this.props?.navigate(`/${RoutesEnum.CONGRATS}`)
    
    
    handleSkills = () =>{
        const rawSkillsArray: IOptionModel[] = []
        this.customerService.getSkills()
        .then((response: AxiosResponse<IQuestionModel>) => {
            if(response.status === 200){
            const rawSkillsArray = response.data.questionOptions
            const filteredSkills = rawSkillsArray?.map((element:IOptionModel)=>{
            return{
                id:element.questionOptionsId,
                text:element.optionText,
                value:element.optionText,
            }
            })
            this.setState({
                skills:filteredSkills
            })
            }
            
        })
        .catch ((err: AxiosError) => catchError(err, true))
    }

    componentDidMount() {
        this.handleSkills()
}

    render() {
       return(
        <div className='login-main-container'>
           <SignUpForm
                handleSignUpSubmit={this.handleSignUpSubmit}
                reqSkills = {this.state.skills}
            />
        </div>
        
       )
    }

}    

export default withRouter<WithRouterProps<unknown>>(SignUpPage);