import React from 'react';

export default function UserDash({ storage }) {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid" style={{color: 'white'}}>
        <img src={storage.picture.data.url} /> {storage.name} 
      </div>
    </nav>
  )
}