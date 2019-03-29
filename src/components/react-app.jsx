import React from 'react';
import axios from 'axios';

//import Appbar from './appbar.jsx/index.js';
import Login from './app/login.jsx';
//import Test2 from './test2.jsx';
import Drawer from './app/drawer.jsx';
import { AppBar } from '@material-ui/core';
import Head from './app/head.jsx';
import Home from './app/home.jsx';
import Login3 from './Loginpage/logincomponent';
import Drawer2 from './studentpage/drawer.jsx';
 
export default class ReactApp extends React.Component {
 
    // constructor(props) {
    //     super(props);
    //     this.state = {employees: []};
    //     this.Axios = axios.create({
    //         baseURL: "/employee",
    //         headers: {'content-type': 'application/json'}
    //     });
    // }
 
    //componentDidMount() {
        //let _this = this;
        //this.Axios.get('/get')
          //.then(function (response) {
             //console.loSg(response);
            //_this.setState({employees: response.data});v
          //})
          //.catch(function (error) {
            //console.log(error);
        //  });
    //}
 
    render() {
        return (
                <div>
                    <Drawer2/>
                </div>
            
            )
    }
}