import { render, screen } from '@testing-library/react';
import SummaryCard from '../SummaryCard';

describe('SummaryCard', () => {
  it('renders the icon, title, and text correctly', () => {
    const mockIcon = <span data-testid="mock-icon">Icon</span>;
    const mockTitle = 'Test Title';
    const mockText = 'Test Text';
    const mockColor = 'blue';

    render(<SummaryCard icon={mockIcon} title={mockTitle} text={mockText} color={mockColor} />);

    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
    expect(screen.getByText(mockText)).toBeInTheDocument();
  });
});
