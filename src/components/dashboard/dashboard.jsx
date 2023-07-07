import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useState((e) => {
    const data = localStorage.getItem("user");
    if (data) {
      setLoggedIn(true);
    }
  });

  return (
    <>
      {!loggedIn ? (
        <Navigate to="/login" />
      ) : (
        <div>
          <p>Welcome to your Dashboard</p>
        </div>
      )}
    </>
  );
};

export default Dashboard;
