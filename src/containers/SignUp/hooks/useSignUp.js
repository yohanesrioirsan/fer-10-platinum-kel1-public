import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import {
  signupSuccess,
  signupStart,
  signupFailure,
} from "../../../redux/SignUp/slice";

function useSignUp() {
  const signup = useSelector((state) => state.signup);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const doSignUp = async (credentials) => {
    try {
      dispatch(signupStart());
      const response = await axios.post(
        "https://api-car-rental.binaracademy.org/customer/auth/register",
        credentials
      );
      dispatch(signupSuccess(response.data));
      navigate("/signin");
    } catch (error) {
      dispatch(signupFailure());
    }
  };

  return {
    signup,
    doSignUp,
  };
}

export default useSignUp;
