import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Auth(props) {
  const { children } = props;
  const { token } = useSelector((state) => state.signin);
  const [mounted, setMounted] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/signin");
    }

    setMounted(true);
  }, [token]);

  return mounted ? children : <span />;
}

export default Auth;
