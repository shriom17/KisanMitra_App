import React from 'react';
import { ProfileScreen } from '../frontend/src/screens/ProfileScreen';

export default function Profile() {
  // TODO: Get actual user login status from context/state management
  const isLoggedIn = false; // This should come from your auth state
  const userName = 'John Farmer';
  const userEmail = 'john.farmer@example.com';

  return (
    <ProfileScreen 
      isLoggedIn={isLoggedIn}
      userName={userName}
      userEmail={userEmail}
    />
  );
}