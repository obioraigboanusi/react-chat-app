import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function withAuth(WrappedComponent) {
  const HOC = (props) => {
    const { pathname } = useLocation();
    const { isAuth } = useSelector((state) => state.auth);

    if (!isAuth && pathname === "/chat") {
      return <Navigate to="/" replace />;
    }
    if (isAuth && pathname === "/") {
      return <Navigate to="/chat" replace />;
    }
    return <WrappedComponent {...props} />;
  };

  return HOC;
}

export default withAuth;
