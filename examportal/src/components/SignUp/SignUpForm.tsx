import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { clearSubmitErrors, Field, getFormValues, InjectedFormProps, reduxForm } from 'redux-form'
import TextField from '../../commonFields/TextField';
import MultiSelectField from '../../commonFields/MultiSelectField'
import PastDatePicker from '../../commonFields/PastDatePicker';
import YesOrNo from '../../commonFields/YesOrNoSelectBox';
// import asyncValidate from "./LoginAsyncValidate";
import view from "../../images/view.svg"
import viewBlockIcon from "../../images/view-block.svg"
import "../../scss/Shared/loginForm.scss"
import avira from "../../images/avira.png"
import { Label, Row } from 'reactstrap';
import validate from "../../../src/Validate/Validate";
import { ICandidateModel, IOptionModel,ISkillsModel } from '../../models/User/UserModel';



interface ISignUpFormProps {
    handleSignUpSubmit: (values: ICandidateModel) => void;
    reqSkills ?: ISkillsModel[];
}

const SignUpForm: React.FC<
  ISignUpFormProps & InjectedFormProps<Record<string, unknown>, ISignUpFormProps>
> = (props: any) => {
    return(
        <Row className="login-container">
        <form className="login-form" onSubmit={props.handleSubmit(props.handleSignUpSubmit)}>
        <img src={avira} alt="avira-logo" className="avira-logo" />
        <h1>Please provide your information to start the assessment</h1>
        <div className="block col-md-12">

            <div className="form-element col-mb-3">
                <Field
                component={TextField}
                name="firstName"
                label={"First Name"}
                value={props?.firstName}
                />
            </div>
            <div className="form-element col-mb-3">
                <Field
                component={TextField}
                name="lastName"
                label={"Last Name"}
                value={props?.lastName}
               />
            </div>
            <div className="form-element col-mb-3">
                <Field
                component={TextField}
                name="gender"
                label={"Gender"}
                value={props?.gender}
                />
            </div>
            <div className="form-element date-picker col-mb-3">
                <Label>Date Of Birth</Label>
                <Field
                    component={PastDatePicker}
                    name="dateOfBirth"
                    valuedata={null}
                    maxDate={new Date()}
                    showYearDropdown
                    placeholderText="DD/MM/YYYY"
                    value={props?.dateOfBirth}
                    autoComplete="off"
                />
            </div>
        </div>
        
        <div className="block col-md-12">
            <div className="form-element col-mb-3">
                <Field
                component={TextField}
                name="highestQualification"
                label={"Highest Qualification"}
                value={props?.qualification}
                />
            </div>
            <div className="form-element col-mb-3">
                <Field
                component={TextField}
                name="passedOutYear"
                label={"Passed Out Year"}
                value={props?.passYear}
                />
            </div>
            <div className="form-element col-mb-3">
                <Field
                component={TextField}
                name="email"
                label={"Email"}
                value={props?.email}
                />
            </div>
            <div className="form-element col-mb-3">
                <Field
                component={TextField}
                name="phoneNumber"
                label={"Mobile Number"}
                value={props?.phoneNumber}
                />
            </div>
        </div>
        
        <div className="block col-md-12">

            <div className="form-element col-mb-3">
                <Field
                component={TextField}
                name="city"
                label={"Town/City"}
                value={props?.city}
                />
            </div>
            <div className="form-element col-mb-3">
                <Field
                component={TextField}
                name="district"
                label={"District"}
                value={props?.district}
                />
            </div>
            <div className="form-element col-mb-3">
                <Field
                component={TextField}
                name="state"
                label={"State"}
                value={props?.state}
                />
            </div>
            <div className="form-element col-mb-3">
            <Field
            component={TextField}
            name="pincode"
            label={"Pincode"}
            value={props?.pincode}
            />
            </div>
        </div>
        <div className="block col-md-12">
        
        <div className="form-element  select-field bizType statesWrapcol-mb-3">
        <Field
          component={MultiSelectField}
          name="skills"
          label={"Skills"}
          values={props?.reqSkills}
          placeholder='Select Your Skills'
          />
        </div>
    </div>
    <div className='buttonwrap'><button type='submit' disabled={props?.invalid}>
        Submit</button>
    </div>
</form>
</Row>

)}

export default connect((state: Record<string, unknown>) => {
    return {
      formValues: getFormValues("SignUpForm")(state),
    };
  })(
    reduxForm<Record<string, unknown>, ISignUpFormProps>({
      form: "SignUpForm",
      enableReinitialize: true,
      validate,
      })(SignUpForm)
  );