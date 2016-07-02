import React from 'react';

export default function Deets() {
    let user = window.cheating;
    return (
            <div>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <img src={user.picture.data.url} />              
            </div>
            );
}