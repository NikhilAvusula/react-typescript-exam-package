import { emailvalidation,onlyNumbers,validateDate } from "../utils/generalUtils";


interface errorsValues {
  firstname: string;
}

const validate = (values: any) => {
  const errors: {
    firstName: any;
    lastName: any;
    email: any;
    gender:any;
    phoneNumber: any;
    dateOfBirth:any;
    highestQualification:any;   
    passedOutYear:any;
    city: any;
    district:any;
    pincode: any;
    state: any;
    skills:any;
  } = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    gender:undefined,
    phoneNumber: undefined,
    dateOfBirth: undefined,
    highestQualification:undefined,
    passedOutYear:undefined,
    city: undefined,
    district:undefined,
    pincode: undefined,
    state: undefined,
    skills:undefined,
  };
  // console.log('validate values: ', values);
  if (!values.firstName) {
    // console.log('firstName error')
    errors.firstName = "*Please enter your first name";
  }

  if (!values.lastName) {
    // console.log('lastName error')
    errors.lastName = "*Please enter your last name";
  }

  if (!values.gender) {
    // console.log('lastName error')
    errors.gender = "*Please enter your gender";
  }

  if (!values.highestQualification) {
    // console.log('lastName error')
    errors.highestQualification = "*Please enter your higest qualification";
  }

  if (!values.passedOutYear) {
    // console.log('lastName error')
    errors.passedOutYear = "*Please enter your passed out year";
  } else if (values.passedOutYear.length != 4 || !/^(198\d|199\d|200\d|201\d|202\d|203\d|204|d|205\d)$/.test(values.passedOutYear)) {
    errors.passedOutYear = "*Please enter valid year";
  }

  if (!values.email) {
    // console.log('email error')
    errors.email = "*Email Required";
  } else if (
    values.email &&
    !emailvalidation().test(values.email)
  ) {
    // console.log('email error')
    errors.email = "*Please enter your email in format: yourname@example.com";
  }
  if (!values.phoneNumber) {
    // console.log('phoneNumber error')    
    errors.phoneNumber = "*Mobile Number Required";
  } else if (values.phoneNumber.length != 10 || !/^[0-9]*$/.test(values.phoneNumber)) {
    errors.phoneNumber = "*Please enter valid 10 digit phone number";
  }
  
 if (!values.district) {
    errors.district = "*District required";
  }
  if (!values.city) {
    errors.city = "*City required";
  }
  if (!values.state) {
    errors.state = "*State required";
  }
  if (!values.pincode){
        errors.pincode = "*Pincode required"
    } else if (values?.pincode?.length < 5 || !/^[0-9]*$/.test(values.pincode)){
        errors.pincode = "*Enter valid 5 digit pincode"
    }
 

  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Please select Date";
  }

  if (!values.skills) {
    errors.skills = "Please select your skills";
  }

  // console.log('valiadte errors: ', errors) // remove all console after issue fix
  return errors;
};

export default validate;
