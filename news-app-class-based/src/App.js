import React, { Component } from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';


export default class App extends Component {
  apiKey = (process.env.REACT_APP_NEWS_API);

  state = {
    progress : 0,
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})

  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Switch>
          <Route exact path="/home">
          <Main setProgress={this.setProgress} apiKey={this.apiKey} key="general" pagesize ={9} country="in" category= "general"/>
          </Route>
          <Route exact path="/business">
          <Main setProgress={this.setProgress} apiKey={this.apiKey} key="business" pagesize ={9} country="in" category= "business"/>
          </Route>
          <Route exact path="/entertainment">
          <Main setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pagesize ={9} country="in" category= "entertainment"/>
          </Route>
          <Route exact path="/health">
          <Main setProgress={this.setProgress} apiKey={this.apiKey} key="health" pagesize ={9} country="in" category= "health"/>
          </Route>
          <Route exact path="/science">
          <Main setProgress={this.setProgress} apiKey={this.apiKey} key="science" pagesize ={9} country="in" category= "science"/>
          </Route>
          <Route exact path="/sports">
          <Main setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pagesize ={9} country="in" category= "sports"/>
          </Route>
          <Route exact path="/technology">
          <Main setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pagesize ={9} country="in" category= "technology"/>
          </Route>
        </Switch>
        </Router>
        <Footer/>
  
      </div>
    )
  }
}
