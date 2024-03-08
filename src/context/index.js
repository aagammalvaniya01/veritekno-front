import React, { createContext, useReducer, useState } from "react";
import { ACTION } from "./constant";
import PropTypes from "prop-types";
const AppContext = createContext();

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: userInfoFromStorage,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADMIN_LOGIN_SUCCESS:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const adminLogin = localStorage.getItem("isAdminLogin");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isAuthenticated, setIsAuthenticated] = useState(adminLogin || false);
  const [isLoading, setIsLoading] = useState(false);

  const value = {
    state,
    dispatch,
    setIsAuthenticated,
    isAuthenticated,
    isLoading,
    setIsLoading,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppProvider.defaultProps = {};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { AppContext, AppProvider };
