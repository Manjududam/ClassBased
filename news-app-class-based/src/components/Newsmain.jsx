import React, { Component } from 'react'

export default class NewsMain extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl, publishedAt, author, source} = this.props
    
    return (
    <>
    <div className='my-3'>
      <div className="card col-12" >
        <div className="div">
        <span className='position-absolute d-flex justify-content-end badge rounded-pill bg-danger' style={{right:'0'}}>{source}</span></div>
        <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2023/09/14/1600x900/UFO_1690338678360_1694684278375.jpg": imageUrl} className="card-img-top" alt={imageUrl}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className='card-text'><small className='text-muted'>By {author} on {new Date(publishedAt).toGMTString()}</small></p>
          <a href={newsUrl} target='_top' className="btn btn-sm btn-dark">Read me</a>
        </div>
      </div>
    </div>
        
        
    </>
    )
  }
}

