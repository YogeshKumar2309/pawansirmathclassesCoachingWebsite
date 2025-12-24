import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import {useLogout} from "../api/useLogout"


export const useLogoutHandler = () => {
  const { logout } = useAuth();
  const { logoutUser } = useLogout();

  const handleLogout = async () => {
    try {
      const res = await logoutUser();

      if (res) {
        logout(); // 🔥 AuthContext reset
        toast.success("Logout successfully!");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Try again");
    }
  };

  return handleLogout;
};
