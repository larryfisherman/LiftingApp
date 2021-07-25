import { setUser } from "../store/userSlice";
import { store } from "../store/store";
import { useHistory } from "react-router-dom";

function checkUser() {
  const token = localStorage.token;
  const userId = localStorage.userId;

  if (token && userId) {
    store.dispatch(setUser({ token, userId }));
  }
  return;
}

export default checkUser;
