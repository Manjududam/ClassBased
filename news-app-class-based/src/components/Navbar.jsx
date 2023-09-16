import React, { Component } from 'react'
// import {Link} from "react-router-dom";

export default class Navbar extends Component {
 


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  text-light border border-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">News</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" href="/home">Home</a>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                    </li> */}
                    <li className="nav-item">
                    <a className="nav-link" href="/business">Business</a></li>
                    <li className="nav-item">
                    <a className="nav-link" href="/entertainment">Entertainment</a></li>
                    <li className="nav-item">
                    <a className="nav-link" href="/health">Health</a></li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">Science</a></li>
                    <li className="nav-item">
                    <a className="nav-link" href="/science">Sports</a></li>
                    <li className="nav-item">
                    <a className="nav-link" href="/technology">Technology</a></li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        
      </div>
    )
  }
}
