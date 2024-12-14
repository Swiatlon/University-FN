import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CheckIcon from '@mui/icons-material/Check';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import DropdownMenu from '../DropdownMenu';

describe('DropdownMenu Component', () => {
  const mockOnClickItem1 = jest.fn();
  const mockOnClickItem2 = jest.fn();

  const items = [
    { label: 'Item 1', icon: <CheckIcon />, onClick: mockOnClickItem1 },
    { label: 'Item 2', icon: <CheckIcon />, onClick: mockOnClickItem2 },
    { label: 'Item 3', icon: <CheckIcon />, onClick: () => {} },
  ];

  beforeEach(() => {
    render(<DropdownMenu label="Select an item" items={items} startIcon={<AccessAlarmIcon />} />);
  });

  const elements = {
    button: () => screen.getByRole('button', { name: /select an item/i }),
    menu: () => screen.queryByRole('menu'),
    menuItems: () => screen.getAllByRole('menuitem'),
    menuItem: (label: string) => screen.getByText(label),
  };

  it('renders the dropdown button with the correct label and icon', () => {
    const button = elements.button();

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Select an item');
    expect(screen.getByTestId('AccessAlarmIcon')).toBeInTheDocument();
  });

  it('opens the menu when the button is clicked', () => {
    const button = elements.button();
    fireEvent.click(button);

    const menu = elements.menu();
    expect(menu).toBeInTheDocument();
    expect(elements.menuItems()).toHaveLength(3);
  });

  it('renders menu items with the correct labels and icons', () => {
    const button = elements.button();
    fireEvent.click(button);

    items.forEach(item => {
      const menuItem = elements.menuItem(item.label);
      expect(menuItem).toBeInTheDocument();
      expect(menuItem.querySelector('svg')).toBeInTheDocument();
    });
  });

  it('updates selection state when a clickable item is selected', async () => {
    const button = elements.button();
    fireEvent.click(button);

    const menuItem1 = elements.menuItem('Item 1');
    fireEvent.click(menuItem1);

    await waitFor(() => {
      expect(button).toHaveTextContent('Item 1');
    });
  });

  it('calls onClick callback when a menu item is selected', () => {
    const button = elements.button();
    fireEvent.click(button);

    const menuItem1 = elements.menuItem('Item 1');
    fireEvent.click(menuItem1);

    expect(mockOnClickItem1).toHaveBeenCalled();
    expect(mockOnClickItem2).not.toHaveBeenCalled();
  });
});
