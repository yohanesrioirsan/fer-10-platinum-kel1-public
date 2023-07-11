import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function NoAuth(props) {
  const { children } = props;
  const user = useSelector((state) => state.login);
  const [mounted, setMounted] = useState();
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push("/");
    }

    setMounted(true);
  }, [user]);

  return mounted ? children : <span />;
}

export default NoAuth;
