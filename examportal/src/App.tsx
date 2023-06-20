import React,{Component} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {IQuestionModel} from "./models/User/UserModel"
import './App.css';
import { RoutesEnum } from './helpers/Routes';
import NotFound from './pages/NotFound';
import Loading from './components/Shared/Loading';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CongratsPage from './pages/CongratsPage';

interface IAppState {
  skills?: IQuestionModel | null;
}

export default class App extends Component<unknown, IAppState> {
  myRef: React.RefObject<unknown>;
  constructor(props: unknown){
    super(props);
    this.myRef = React.createRef();
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App"
        ref={this.myRef as React.RefObject<HTMLDivElement>}
      >
        <div className="AppWrapper">
            <BrowserRouter>
            <Routes>
            <Route path={`/${RoutesEnum.NOTFOUND}`} element={<NotFound/>} />
            <Route path={`/${RoutesEnum.DEFAULT}`} element={
                    true ? <Navigate to={`/${RoutesEnum.SIGNUP}`} /> : <><Loading /></>
                  } />
            <Route path={`/${RoutesEnum.SIGNUP}`} element={<SignUpPage />} />
            <Route path={`/${RoutesEnum.CONGRATS}`} element={<CongratsPage />} />

            </Routes>
            </BrowserRouter>
        </div>
      </div>
    )
  }
}