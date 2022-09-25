import React from 'react';
const AuthContext = React.createContext({
  token: '',
  message: '',
  login: (data) => {},
});
export default AuthContext;
