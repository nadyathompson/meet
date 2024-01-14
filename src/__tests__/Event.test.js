import { render } from "@testing-library/react";
import mockData from "../mock-data";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let EventComponent;
  const event = mockData[0];

  beforeEach(async () => {
    EventComponent = render(<Event event={event} />);
  });

  test("renders event title", () => {
    expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
  });

  test("renders event start time", () => {
    expect(EventComponent.queryByText(event.created)).toBeInTheDocument();
  });

  test("renders event location", () => {
    expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
  });

  test("renders event detail button with the title (show details)", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    const details = EventComponent.container.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });

  test("shows details when user clicks 'shows details' button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText("show details");
    await user.click(button);
    const details = EventComponent.container.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  test("hides details when user clicks 'hides details' button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByText("show details");
    await user.click(button);
    const details = EventComponent.container.querySelector(".details");
    expect(details).toBeInTheDocument();
  });
});
