import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { VscSettings } from "react-icons/vsc";
import { IoCreateOutline } from "react-icons/io5";
import axios from "axios";
import PlaceHolder from "../components/newUserPagePlaceholder";
import AccountComponent from "../components/accountComponent";
import "./styles/retirementAccountLog.css";

const RetirementAccountLog = () => {
  const { user, isAuthenticated } = useAuth0();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [email_verified, setEmailVerified] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      setFirstName(user.given_name);
      setLastName(user.family_name);
      setEmail(user.email);
      setEmailVerified(user.email_verified);
    }

    const authenticateUser = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:5000/auth/login", {
          first_name,
          last_name,
          email,
          email_verified,
        });
        localStorage.setItem('user-id', response.data.id);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    if (!first_name || !last_name || !email || !email_verified) {
      authenticateUser();
    }
  

    if (posts.length === 0) {
      const getPosts = async () => {
        try {
          const response = await axios.get(
            `http://127.0.0.1:5000/retirement/accounts/${localStorage.getItem('user-id')}`
          );
          const jsonData = JSON.parse(response.data);
          setPosts(jsonData);

        } catch (error) {
          console.log(error);
        }
      };
      getPosts();
    }
  });

  return (
    <>
      { posts.length === 0 ? (
        <PlaceHolder />
      ) : (
        <div className="retirement-account-page">
          <div className="buttons-container">
            <div className="setting-container">
              <VscSettings className="settings-icon" />
              <h1 className="icon-label">Filter</h1>
            </div>
            <div className="create-container">
              <IoCreateOutline className="create-icon" />
              <h1 className="icon-label">Create</h1>
            </div>
          </div>
          { posts.map((post) => (
            <AccountComponent name={post.name}/>
          ))}
        </div>
      )}
    </>
  );
};

export default RetirementAccountLog;
