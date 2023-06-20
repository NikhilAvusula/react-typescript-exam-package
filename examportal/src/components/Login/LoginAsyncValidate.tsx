import { clearSubmitErrors } from "redux-form";
import { FormErrorType } from "../../models/Shared/CommonFields";

export const checkValidFields = async (values: any) => {
    console.log(values)
    const errors: Record<string, FormErrorType> = {};
    let requiredErrCode = "*Required"
    if (!values.userName) {
      Object.assign(errors, { userName: requiredErrCode });
    }
    if (!values.password) {
      Object.assign(errors, { password: requiredErrCode });
    }
    
    return errors;
  }

  export const checkValidUserName = async (values:any) =>{
    const errors: Record<string, FormErrorType> = {};
    if (values !== 'Avira') {
        const errCode = "Invalid UserName"
        Object.assign(errors, { batchNumber: errCode });
    }
    return errors;
  }

  export const checkValidPassword = async (values:any) =>{
    const errors: Record<string, FormErrorType> = {};
    if (values !== 'Admin@123') {
        const errCode = "Invalid Password"
        Object.assign(errors, { batchNumber: errCode });
    }
    return errors;
  }

const asyncValidate = async (values: any, dispatch: any, props: any, blurredField: any) => {
    const fieldAsyncErrors = {};
    if (!blurredField) {
      const errors = await checkValidFields(values);
      if (Object.keys(errors)?.length > 0) {
        Object.assign(fieldAsyncErrors, { ...props?.asyncErrors, ...errors })
      }
    }
    else if (blurredField === "userName") {
      dispatch(clearSubmitErrors('LoginForm'));
      const errors = await checkValidUserName(values);
      if (Object.keys(errors)?.length > 0) {
        Object.assign(fieldAsyncErrors, { ...props?.asyncErrors, ...errors })
      } else {
        Object.assign(fieldAsyncErrors, { ...props?.asyncErrors })
      }
      
    }
    else if (blurredField === "password") {
      dispatch(clearSubmitErrors('LoginForm'));
      const errors = await checkValidPassword(values);
      if (Object.keys(errors)?.length > 0) {
        Object.assign(fieldAsyncErrors, { ...props?.asyncErrors, ...errors })
      } else {
        Object.assign(fieldAsyncErrors, { ...props?.asyncErrors })
      }
    }
}

export default asyncValidate;