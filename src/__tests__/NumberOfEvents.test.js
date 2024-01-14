import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;

  beforeEach(async () => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setNumberOfEvents={() => {}} />
    );
  });

  test("checks for component", () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
  });

  test("sets default number of events to 32", () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toHaveValue("32");
  });

  test("updates number of events correctly when user types in textbox", async () => {
    const user = userEvent.setup();
    const NumberOfEventsTextBox =
      NumberOfEventsComponent.queryByRole("textbox");
    await user.type(NumberOfEventsTextBox, "{backspace}{backspace}10");
    expect(NumberOfEventsTextBox).toHaveValue("10");
  });
});
