import React from 'react';

export default function Deets({ user }) {
    return (
            <div className='center'>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <img src={user.picture.data.url} />              
            </div>
            );
}