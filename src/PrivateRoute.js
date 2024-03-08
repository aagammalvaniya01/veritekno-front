import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { AppContext } from "./context";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AppContext);

  if (!state?.userInfo) {
    return <Navigate to="/admin" replace />;
  } else {
    return children;
  }
};
PrivateRoute.defaultProps = {};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
