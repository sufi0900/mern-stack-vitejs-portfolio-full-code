/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  return user ? children : <LoadingToRedirect />;
};

export default PrivateRoute;
