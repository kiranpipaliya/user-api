import React, { useReducer } from 'react';
import AuthContext from './AuthContex';

const initialState = {
  token: '',
  message: '',
};

const AuthReducer = (state, action) => {
  if (action.type === 'LOGIN') {
    return {
      token: action.data,
      message: action.message,
    };
  }
  return {
    items: 'updatedList',
    totalAmount: 0,
  };
};
const AuthProvider = (props) => {
  const [state, dispatchAction] = useReducer(AuthReducer, initialState);
  const loginHandler = (data) => {
    dispatchAction({ type: 'LOGIN', data: data });
  };
  const authContext = {
    token: state.token,
    message: state.message,
    login: loginHandler,
  };
  return <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>;
};
export default AuthProvider;
