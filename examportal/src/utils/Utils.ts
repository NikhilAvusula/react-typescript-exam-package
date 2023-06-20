import moment from "moment";
import { toast } from "react-toastify";
import { dateValidate } from "../helpers/Regex";

export const ParseJson=(data: any)=>{
  try {
    return JSON.parse(data);
  } catch(e) {
    return data;
  }
}

export const catchError = (error: any, showToaster:boolean) => {
  const status = error.response ? error.response.status : null;
  if (showToaster && status == 500) {
    toast.error("Something went wrong");
  }
  if (showToaster && status == 403) {
    toast.error("You don't have access to it");
  }
  if (showToaster && status == 400) {
    toast.error("Invalid request");
  }
}

export const validateDate = (value: any) => {
  const dateformat = dateValidate;
  if(value?.match(dateformat)){
    return true
  } else{
    return false
  }
}

export const transformDateWithDash = (date:string) =>{
  if(date == null) return null;
  if(Date.parse(date)){
    return moment(date).format("YYYY-MM-DD")
  }
  return date;
}
