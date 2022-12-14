import {useRouter} from 'next/router'
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3014/api/user', {
        username,
        password,
      })
      .then((res) => {
        if (res.data.length > 0){
          router.push('/parks')
        }
        else {
          alert("user not found")
        }
      });
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      
      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
      <button type="submit">Submit</button>
      </div>
    </form>
    <div>
    username: maksoudj
    </div>
    password: maksoudj
    </div>
  );
};

export default Form;