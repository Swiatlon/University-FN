import { useState } from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CheckIcon from '@mui/icons-material/Check';
import { fireEvent, render, screen } from '@testing-library/react';
import DropDownMenuWithCheckboxes, { ICheckboxDropdownItem } from '../DropdownMenuWithCheckboxes';

describe('DropDownMenuWithCheckboxes Component', () => {
  const mockOnCheckboxChange = jest.fn();

  const initialItems: ICheckboxDropdownItem[] = [
    { identifier: 'item1', checked: false, label: 'Item 1', icon: <CheckIcon /> },
    { identifier: 'item2', checked: true, label: 'Item 2', icon: <CheckIcon /> },
  ];

  const MockWrapper = () => {
    const [items, setItems] = useState(initialItems);

    return (
      <DropDownMenuWithCheckboxes
        tooltipLabel="tooltip"
        items={items}
        label="select items"
        setItems={setItems}
        onCheckboxChange={mockOnCheckboxChange}
        startIcon={<AccessAlarmIcon />}
      />
    );
  };

  beforeEach(() => {
    render(<MockWrapper />);
  });

  const elements = {
    button: () => screen.getByRole('button'),
    menu: () => screen.queryByRole('menu'),
    checkboxItem: (label: string) => screen.getByLabelText(label),
    icon: () => screen.getByTestId('AccessAlarmIcon'),
    item1: () => screen.getByRole('checkbox', { name: 'Item 1' }),
    item2: () => screen.getByRole('checkbox', { name: 'Item 2' }),
  };

  it('renders the dropdown button with the correct label and icon', () => {
    const button = elements.button();
    const icon = elements.icon();

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('select items');
    expect(icon).toBeInTheDocument();
  });

  it('opens the menu when the button is clicked', () => {
    const button = elements.button();
    fireEvent.click(button);

    const menu = elements.menu();
    expect(menu).toBeInTheDocument();
  });

  it('does not close the menu when a checkbox is clicked', () => {
    const button = elements.button();
    fireEvent.click(button);

    const menu = elements.menu();
    const checkboxItem1 = elements.item1();

    expect(menu).toBeInTheDocument();
    fireEvent.click(checkboxItem1!);
    expect(menu).toBeInTheDocument();
  });

  it('toggles the checkbox state when clicked', () => {
    const button = elements.button();
    fireEvent.click(button);

    const checkboxItem1 = elements.item1();
    const checkboxItem2 = elements.item2();
    expect(checkboxItem1).not.toBeChecked();
    expect(checkboxItem2).toBeChecked();

    fireEvent.click(checkboxItem1!);
    expect(mockOnCheckboxChange).toHaveBeenCalledWith('item1', true);
    expect(checkboxItem1).toBeChecked();
  });
});
