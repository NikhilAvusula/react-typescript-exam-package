import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { clearSubmitErrors, Field, getFormValues, InjectedFormProps, reduxForm } from 'redux-form'
import TextField from '../../commonFields/TextField';
// import asyncValidate from "./LoginAsyncValidate";
import view from "../../images/view.svg"
import viewBlockIcon from "../../images/view-block.svg"
import "../../scss/Shared/loginForm.scss"
import avira from "../../images/avira.png"

interface ILoginFormProps {
    handleLoginSubmit: (values: FormData) => void;
}

const LoginForm: React.FC<
  ILoginFormProps & InjectedFormProps<Record<string, unknown>, ILoginFormProps>
> = (props: any) => {
    const [password1, setPassword1] = useState(true);
    return(
        <div className="login-container">
        <form className="login-form">
        <img src={avira} alt="avira-logo" className="avira-logo" />
         <div className="form-element">
        <Field
          component={TextField}
          name="userName"
          label={"User Name"}
          value={props?.userName}
        />
        </div>

        <div className="form-element">
        <Field
          component={TextField}
          name="password"
          label={"Password"}
          value={props?.password}
          type={password1 ? `password` : ""}
          displayError={true}
          onChange = {()=>{props.dispatch(clearSubmitErrors("LoginForm"))}}
        />
        <img src={password1 ? view: viewBlockIcon}
            onClick={() => setPassword1(!password1)}
            alt="eyeIcon" className="show" />
        </div>

        <div className='buttonwrap'><button type='button'
                disabled={props?.invalid}
                onClick={props?.handleSubmit(props.handleLoginSubmit)}>
                Login</button></div>
    </form>
    </div>
    )

    
}

export default connect((state: Record<string, unknown>) => {
    return {
      formValues: getFormValues("LoginForm")(state),
    };
  })(
    reduxForm<Record<string, unknown>, ILoginFormProps>({
      form: "LoginForm",
      enableReinitialize: true,
    })(LoginForm)
  );