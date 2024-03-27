import { GoogleLogin, googleLogout } from '@react-oauth/google';

const GoogleLoginButton = () => {
  googleLogout();
  return (
    <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        size='medium'
        shape='circle'
        logo_alignment='left'
    />
  )
}

export default GoogleLoginButton
