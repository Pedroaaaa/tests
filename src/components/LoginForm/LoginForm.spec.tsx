import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import LoginForm from ".";

describe("LoginForm Component", () => {
  it("should be able to input login infos", async () => {
    const user = userEvent.setup();

    const setState = jest.fn();
    const loginRequest = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [
        { registration: "111111", password: "123456" },
        setState,
      ]);
    const [login, setLogin] = React.useState({
      registration: "111111",
      password: "123456",
    });
    render(
      <LoginForm
        login={login}
        setLogin={setLogin}
        loading={false}
        loginRequest={loginRequest}
      />
    );

    const registrationInput = screen.getByLabelText("Registration");
    const passwordInput = screen.getByLabelText("Password");

    await user.type(registrationInput, "222222");
    await user.type(passwordInput, "654321");

    expect(setState).toHaveBeenCalled();
  });

  it("should be able to submit a login request", async () => {
    const user = userEvent.setup();

    const setState = jest.fn();
    const loginRequest = jest.fn();
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [
        { registration: "111111", password: "123456" },
        setState,
      ]);
    const [login, setLogin] = React.useState({
      registration: "111111",
      password: "123456",
    });
    render(
      <LoginForm
        login={login}
        setLogin={setLogin}
        loading={false}
        loginRequest={loginRequest}
      />
    );

    const loginButton = screen.getByText("Login");

    await user.click(loginButton);

    expect(loginRequest).toHaveBeenCalled();
  });
});
