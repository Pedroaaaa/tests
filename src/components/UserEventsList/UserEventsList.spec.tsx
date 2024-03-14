import { render, screen } from "@testing-library/react";
import UserEventsList from ".";
import { Type } from "../../types/Type";

describe("LoginForm Component", () => {
  it("should render the userEventsList correctly", async () => {
    const date = new Date();
    const userEvents = [
      {
        id: 1,
        description: "Test 1",
        date,
        type: Type.NOTE,
        userRegistration: "111111",
      },
      {
        id: 2,
        description: "Test 2",
        date,
        type: Type.NOTE,
        userRegistration: "111111",
      },
    ];
    render(<UserEventsList userEvents={userEvents} />);

    expect(
      screen.getByText(
        `${userEvents[0].description} - ${new Date(date).toDateString()}`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${userEvents[1].description} - ${new Date(date).toDateString()}`
      )
    ).toBeInTheDocument();
  });

  it("should render the userEventsList correctly after a rerender", async () => {
    const date = new Date();
    const userEvents = [
      {
        id: 1,
        description: "Test 1",
        date,
        type: Type.NOTE,
        userRegistration: "111111",
      },
      {
        id: 2,
        description: "Test 2",
        date,
        type: Type.NOTE,
        userRegistration: "111111",
      },
    ];
    const { rerender } = render(<UserEventsList userEvents={userEvents} />);

    expect(
      screen.getByText(
        `${userEvents[0].description} - ${new Date(date).toDateString()}`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${userEvents[1].description} - ${new Date(date).toDateString()}`
      )
    ).toBeInTheDocument();

    rerender(<UserEventsList userEvents={[userEvents[0]]} />);

    expect(
      screen.getByText(
        `${userEvents[0].description} - ${new Date(date).toDateString()}`
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        `${userEvents[1].description} - ${new Date(date).toDateString()}`
      )
    ).not.toBeInTheDocument();
  });
});
