import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize = 12;
  //apiKey = process.env.REACT_APP_NEWS_API
  apiKey = "dafec09af65347aa9dcf797b1525ee71";
  render() {
    return (
      <Router>
      <div>       
        <Navbar/>        
        <Routes>
            <Route  path="/" element={<News key="general" apiKey ={this.apiKey} pageSize={this.pageSize} country="in" category="general"/>}/>
            <Route exact path="/general" element={<News key="general" apiKey ={this.apiKey} pageSize={this.pageSize} country="in" category="general"/>}/>
            <Route exact path="/business" element={<News key="business" apiKey ={this.apiKey} pageSize={this.pageSize} country="in" category="business"/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment" apiKey ={this.apiKey} pageSize={this.pageSize} country="in" category="entertainment"/>}/>
            <Route exact path="/health" element={<News key="health" apiKey ={this.apiKey} pageSize={this.pageSize} country="in" category="health"/>}/>
            <Route exact path="/science" element={<News key="science" apiKey ={this.apiKey} pageSize={this.pageSize} country="in" category="science"/>}/>
            <Route exact path="/technology" element={<News key="technology" apiKey ={this.apiKey} pageSize={this.pageSize} country="in" category="technology"/>}/>
            <Route exact path="/sports" element={<News key="sports" apiKey ={this.apiKey} pageSize={this.pageSize} country="in" category="sports"/>}/>

          </Routes>
      </div>
      </Router>
    )
  }
}
//modified

