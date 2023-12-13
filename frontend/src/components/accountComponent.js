import React from "react";

export default function AccountComponent({ 
    name
}) {
    return (
        <div className="posts-container">
          <div className="circle"></div>
          <div className="red-line"></div>
          <h1 className="account-information">{name}</h1>
        </div>
    );
}