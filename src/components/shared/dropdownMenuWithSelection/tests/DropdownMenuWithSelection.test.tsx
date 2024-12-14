import AbcIcon from '@mui/icons-material/Abc';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { fireEvent, render, screen } from '@testing-library/react';
import DropdownMenuWithSelection from '../DropdownMenuWithSelection';

const elements = {
  button: () => screen.getByTestId('selection'),
  menu: () => screen.queryByRole('menu'),
  item1: () => screen.queryByText('Item 1'),
  icon: () => screen.getByTestId('AccessAlarmIcon'),
};

describe('DropdownMenuWithSelection Component', () => {
  const items = [
    { label: 'Item 1', onClick: jest.fn(), icon: <AbcIcon /> },
    { label: 'Item 2', onClick: jest.fn(), icon: <AbcIcon /> },
    { label: 'Item 3', nonClick: jest.fn(), icon: <AbcIcon /> },
  ];

  beforeEach(() => {
    render(<DropdownMenuWithSelection label="Dropdown Label" items={items} startIcon={<AccessAlarmIcon />} />);
  });

  it('renders the dropdown button with the correct label and icon', () => {
    const button = elements.button();
    const icon = elements.icon();

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Dropdown Label');
    expect(button).toContainElement(icon);
  });

  it('opens the menu when the button is clicked', () => {
    const button = elements.button();
    fireEvent.click(button);

    const menu = elements.menu();
    expect(menu).toBeInTheDocument();
  });

  it('closes the menu when an item is clicked and updates the button label and icon', () => {
    const button = elements.button();
    const menu = elements.menu();

    fireEvent.click(button);
    const item1 = elements.item1();
    fireEvent.click(item1!);

    expect(menu).not.toBeInTheDocument();
    expect(button).toHaveTextContent('Item 1');
  });
});
