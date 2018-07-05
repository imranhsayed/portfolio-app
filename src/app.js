import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css'
import './styles/style.scss'



const app = document.getElementById( 'appId' );
ReactDOM.render( <AppRouter/>, app );
