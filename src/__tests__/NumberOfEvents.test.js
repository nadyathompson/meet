// import { render } from "@testing-library/react";
// import NumberOfEvents from "../components/NumberOfEvents";
// import userEvent from "@testing-library/user-event";

// describe("<NumberOfEvents /> component", () => {
//   let NumberOfEventsComponent;

//   beforeEach(async () => {
//     NumberOfEventsComponent = render(
//       <NumberOfEvents setNumberOfEvents={() => {}} />
//     );
//   });

//   test("checks for component", () => {
//     expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
//   });

//   test("sets default number of events to 32", () => {
//     expect(NumberOfEventsComponent.queryByRole("textbox")).toHaveValue("32");
//   });

//   test("updates number of events correctly when user types in textbox", async () => {
//     const user = userEvent.setup();
//     const NumberOfEventsTextBox =
//       NumberOfEventsComponent.queryByRole("textbox");
//     await user.type(NumberOfEventsTextBox, "{backspace}{backspace}10");
//     expect(NumberOfEventsTextBox).toHaveValue("10");
//   });
// });
import NumberOfEvents from "../components/NumberOfEvents";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} />
    );
  });
  test("has an element with role of a textbox", () => {
    const numberTextbox = NumberOfEventsComponent.queryByRole("textbox");
    expect(numberTextbox).toBeInTheDocument();
    expect(numberTextbox).toHaveClass("textboxNumber");
  });
  test("by default, number of event is listed 32", () => {
    const numberTextbox =
      NumberOfEventsComponent.getByPlaceholderText("Enter a number");
    expect(numberTextbox).toHaveValue("32");
  });
  test("updates number of events when user types", async () => {
    const numberTextbox = NumberOfEventsComponent.queryByRole("textbox");
    await userEvent.type(numberTextbox, "{backspace}{backspace}10");
    expect(numberTextbox.value).toBe("10");
  });
});
