import { render, screen } from '@testing-library/react';
import { CreateInvoiceForm } from './CreateInvoiceForm';

const defaultValue: React.ComponentProps<typeof CreateInvoiceForm> = {
  isOpen: false,
  onClose: () => {},
};

const makeComponent = (args?: React.ComponentProps<typeof CreateInvoiceForm>) =>
  render(<CreateInvoiceForm {...defaultValue} {...args} />);

const dataTestId = 'CreateInvoiceForm';

describe('Should render modal exacly', () => {
  it('should modal invisible default', () => {
    makeComponent();
    const modalContainer = screen.queryByTestId(dataTestId);
    expect(modalContainer).not.toBeInTheDocument();
  });
  it('should modal work', () => {
    const onClose = jest.fn();
    makeComponent({ isOpen: true, onClose });
    const titleModalEl = screen.getByTestId('CustomModal-title');
    expect(titleModalEl).toBeInTheDocument();
  });
});
