import React from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./UserPage.css";
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useEffect, useState } from "react";

function UsersPage() {
    const location = useLocation();
    const { userEmail, password } = location.state;
  
    const emailPrefix = userEmail.split('@')[0];
  
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = () => {
        // Handle form submission here
        console.log('Form submitted:', { dateOfBirth, address, phoneNumber });
      };

 
  return (
    <body>
      <div className='heading'>
        <Typography variant="overline" className='heading' color="Blue" style={{ fontFamily: 'Roboto', fontSize: '4rem' }}>
          Welcome to our portal {emailPrefix}
        </Typography>
      </div>
      <div className='updateProfileBody'>
        <div className='updateProfileArea'>
          <h3>Update User Information</h3>
          <TextField id="dateOfBirth" label="Date of Birth" variant="outlined" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
          <TextField id="address" label="Address" variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)} />
          <TextField id="phoneNumber" label="Phone Number" variant="outlined" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        </div>
    
      </div>
    </body>
  );
}

export default UsersPage;
