const axios = require('axios');

// LinkedIn and Google OAuth credentials
const linkedinClientId = '<linkedin-client-id>';
const googleClientId = '<google-client-id>';

 

// redirect URLs
const linkedinRedirectUrl = 'http://localhost:3000/auth/linkedin/callback';
const googleRedirectUrl = 'http://localhost:3000/auth/google/callback';

 

// Function to handle LinkedIn login
function linkedinLogin() {
  const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${linkedinClientId}&redirect_uri=${linkedinRedirectUrl}&state=foobar&scope=liteprofile%20emailaddress%20w_member_social`;
  window.location.href = url;
}

// Function to handle Google login
function googleLogin() {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${googleClientId}&redirect_uri=${googleRedirectUrl}&scope=profile%20email`;
  window.location.href = url;
}

document.getElementById('linkedin-login').addEventListener('click', linkedinLogin);
document.getElementById('google-login').addEventListener('click', googleLogin);