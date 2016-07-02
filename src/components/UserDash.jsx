import React from 'react';

export default function UserDash({ storage }) {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid" style={{color: 'white'}}>
        <img src={storage.picture.data.url} /> {storage.name} 
        <div className="navbar-header navbar-right">
          <a className="navbar-brand"
            href="#"><img style={{ height: '35px', width: '65px' }}
            src='./assets/rechatSm4.png'/>
          </a>
        </div>
      </div>
    </nav>
  )
}