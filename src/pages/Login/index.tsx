import { useState } from "react";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";
import { useAuth } from "../../contexts/Auth";
import ErrorToastHandler from "../../components/ErrorToastHandler";
import LoginForm from "../../components/LoginForm";

export default function Login() {
  useTitle("Login");
  const { signIn } = useAuth();

  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState({
    registration: "",
    password: "",
  });

  const loginRequest = async () => {
    try {
      setLoading(true);
      await signIn(login);
      toast.success("Success");
    } catch (error) {
      setLoading(false);
      ErrorToastHandler(error);
    }
  };

  return (
    <div className="loginPage">
      <LoginForm
        login={login}
        setLogin={setLogin}
        loading={loading}
        loginRequest={loginRequest}
      />
    </div>
  );
}
