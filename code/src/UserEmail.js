import React from 'react';

const UserEmail = ({email, onEmailChange}) => {
  return (
    <div className="section-user-email" id="sectionUserEmail">
      <label htmlFor="userEmail">Your Email</label>
      <input 
        type="email" 
        id="userEmail"
        className="email-input"
        onChange={(event) => onEmailChange(event.target.value)}
        value={email}
      />
    </div>
  )
}

export default UserEmail;