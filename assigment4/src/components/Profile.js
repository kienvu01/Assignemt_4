
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const Profile = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
      let didCancled = false;
      axios({
          method: 'GET',
          url: 'https://60dff0ba6b689e001788c858.mockapi.io/tokens'
      }).then(response => {
          if (!didCancled) {
              console.log('response =', response);
              setUser(response.data)
          }
      },[]);
      return () => {
          didCancled = true;
      }
  }, []);
  console.log('User =', user)
  return (
    <div>
      <p>Token: {user.token}</p>
      <p>UserID:{user.userId}</p>
    </div>
    
  )
}

export default Profile;