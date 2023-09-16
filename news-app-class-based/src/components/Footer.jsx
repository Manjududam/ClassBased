import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='bg-dark d-flex justify-content-center align-items-center sticky-bottom'>
            <p className="text-center align-items-center text-light my-2">News - Copyright &copy; 2023</p>
            <br/>
        </footer>
        
      </div>
    )
  }
}

export default Footer
