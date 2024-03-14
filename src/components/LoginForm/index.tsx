import { Dispatch, SetStateAction } from "react";

export type Props = {
  login: {
    registration: string;
    password: string;
  };
  setLogin: Dispatch<
    SetStateAction<{
      registration: string;
      password: string;
    }>
  >;
  loading: boolean;
  loginRequest: () => Promise<void>;
};

export default function LoginForm({
  login,
  setLogin,
  loading,
  loginRequest,
}: Props) {
  return (
    <div>
      <label htmlFor="registrationInput">Registration</label>
      <input
        required
        id="registrationInput"
        placeholder="111111111111"
        type="text"
        value={login.registration}
        onChange={(event) =>
          setLogin((oldState) => ({
            ...oldState,
            registration: event.target.value,
          }))
        }
      />
      <label htmlFor="passwordInput">Password</label>
      <input
        required
        id="passwordInput"
        placeholder="********"
        type="password"
        value={login.password}
        onChange={(event) =>
          setLogin((oldState) => ({
            ...oldState,
            password: event.target.value,
          }))
        }
      />
      <button disabled={loading} id="loginButton" onClick={loginRequest}>
        {loading ? "Loading..." : "Login"}
      </button>
    </div>
  );
}
