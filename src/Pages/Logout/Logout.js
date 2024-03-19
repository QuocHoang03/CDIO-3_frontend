import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../../services/userService";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleLogoutUser = async () => {
      try {
        const response = await logoutUser();
        if (response.EC === 0) {
          localStorage.removeItem("dataUsers");
          toast.success(response.EM);
          navigate("/");
        } else {
          toast.error(response.EM);
        }
      } catch (error) {
        console.log("Lỗi trong quá trình đăng xuất: ", error);
      }
    };
    const handleLogout = () => {
      handleLogoutUser();
    };
    handleLogout();
  });

  return <div>Logging out...</div>;
};

export default Logout;
