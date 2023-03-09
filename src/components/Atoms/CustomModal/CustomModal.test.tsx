import { render, screen } from "@testing-library/react";
import { CustomModal } from "./CustomModal";

const defaultValue: React.ComponentProps<typeof CustomModal> = {
  handleClose: () => {},
};

const makeComponent = (args?: React.ComponentProps<typeof CustomModal>) =>
  render(<CustomModal {...defaultValue} {...args} />);

const dataTestId = "CustomModal";

describe("Should render modal exacly", () => {
  it("should modal invisible default", () => {
    makeComponent();
    const modalContainer = screen.queryByTestId(dataTestId);
    expect(modalContainer).not.toBeInTheDocument();
  });
  it("should modal work", () => {
    const handleClose = jest.fn();
    makeComponent({ isOpen: true, handleClose, title: "modalTitle" });
    const modalContainerEl = screen.getByTestId(dataTestId);
    expect(modalContainerEl).toBeInTheDocument();
    const titleModalEl = screen.getByTestId(`${dataTestId}-title`);
    expect(titleModalEl).toBeInTheDocument();
  });
});
