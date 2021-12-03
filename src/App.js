import React, { Component } from 'react';
import './App.css';
// import  FormValidation  from "./FormValidation";
// import Contact from "./Contact";
// import Header from "./Components/Header";
import News from "./News";
import Navbar from "./Navbar";
import { BrowserRouter,Switch,Route } from 'react-router-dom';


export class App extends Component {

  pagesize= 6 ;

  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar />
      <Switch>
        {/* <FormValidation/> */}
        {/* <Contact/> */}
        {/* <Header/> */}
        <Route exact path="/" ><News key="general"  pageSize={this.pagesize} country='in' category="general" /></Route>
        <Route exact path="/science" ><News key="science" pageSize={this.pagesize} country='in' category="science" /></Route>
        <Route exact path="/sports" ><News key="sports" pageSize={this.pagesize} country='in' category="sports" /></Route>
        <Route exact path="/business" ><News key="business" pageSize={this.pagesize} country='in' category="business" /></Route>
        <Route exact path="/entertainment" ><News key="entertainment" pageSize={this.pagesize} country='in' category="entertainment" /></Route>
        <Route exact path="/technology" ><News key="technology" pageSize={this.pagesize} country='in' category="technology" /></Route>
        <Route exact path="/general" ><News key="general" pageSize={this.pagesize} country='in' category="general" /></Route>
        <Route exact path="/health" ><News key="health" pageSize={this.pagesize} country='in' category="health" /></Route>
        
        </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App
