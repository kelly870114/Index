import React from 'react';
import axios from 'axios';
import { AppBar, Drawer } from '@material-ui/core';
import Head from './head.jsx';
import Home from './home.jsx';

// const styles = theme => ({
//     root: {
//         display: 'flex',
//     },
// });
export default class ReactApp extends React.Component {
    
    render() {
        const { classes } = this.props;
        return (
                <div>
                    <Home/>
                </div>
            
            )
    }
}