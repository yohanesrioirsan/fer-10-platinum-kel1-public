import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NoAuth(props) {
  const { children } = props;
  const user = useSelector((state) => state.login);
  const [mounted, setMounted] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    setMounted(true);
  }, [user]);

  return mounted ? children : <span />;
}

export default NoAuth;
