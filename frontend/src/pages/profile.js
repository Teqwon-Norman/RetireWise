import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('')
  const [email_verified, setEmailVerified] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      setFirstName(user.given_name);
      setLastName(user.family_name);
      setEmail(user.email);
      setEmailVerified(user.email_verified);
    }
  });
  

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const authenticateUser = async () => {
    await axios.post('http://127.0.0.1:5000/auth/login', {
      first_name,
      last_name,
      email,
      email_verified
    })
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={authenticateUser}>Get Token</button>
      </div>
    )
  );
};

export default Profile;