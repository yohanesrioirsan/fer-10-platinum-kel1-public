import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  signupSuccess,
  signupStart,
  signupFailure,
} from "../../../redux/SignUp/slice";
import { useRouter } from "next/router";

function useSignUp() {
  const signup = useSelector((state) => state.signup);
  const dispatch = useDispatch();
  const router = useRouter()

  const doSignUp = async (credentials) => {
    try {
      dispatch(signupStart());
      const response = await axios.post(
        "https://bootcamp-rent-cars.herokuapp.com/customer/auth/register",
        credentials
      );
      dispatch(signupSuccess(response.data));
      router.push("/signin");
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
