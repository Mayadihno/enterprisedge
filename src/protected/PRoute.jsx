import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PRoute = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PRoute;
