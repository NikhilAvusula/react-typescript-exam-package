import axios, { AxiosError, AxiosResponse } from "axios";
import { ICandidateModel, IQuestionModel } from "../models/User/UserModel";
import { APP_Config } from "../utils/AppConfig";

class CustomerService {
    BaseUrl = "http://192.168.86.28:9002/avira/";
    SaveUrl = "http://192.168.86.28:9002/employee/";
    fetcher; 

    constructor(){ 
        this.fetcher = axios.create();
    
        // this.fetcher.interceptors.request.use((req:any) => {
        //   req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
        //   return req;
        // });
}

getSkills(): Promise<AxiosResponse<IQuestionModel>> {
    return this.fetcher.get<IQuestionModel>(`${this.BaseUrl}getGeneralQuestion`);
  }

saveCanditateInfo(data:ICandidateModel){
    return this.fetcher.post(`${this.SaveUrl}saveEmployee`,data)
    .then((response) => response);
}

}

export default CustomerService;
