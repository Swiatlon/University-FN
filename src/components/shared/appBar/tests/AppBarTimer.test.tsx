import { screen } from '@testing-library/react';
import { useAppBarTimer } from 'hooks/useAppBarTimer';
import { useTypedSelector } from 'hooks/useStore.Hooks';
import { renderWithProviders } from 'utils/tests/test-utils';
import AppBarTimer from '../elements/AppBarTimer';

jest.mock('hooks/useAppBarTimer');
jest.mock('hooks/useStore.Hooks');
jest.mock('redux/apiSlices/auth/Auth.Api.Slice');
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}));

describe('AppBarTimer Component', () => {
  const mockSendLogout = jest.fn();
  const mockUseTypedSelector = useTypedSelector as jest.Mock;
  const mockUseAppBarTimer = useAppBarTimer as jest.Mock;
  const mockUseMediaQuery = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockSendLogout.mockClear();
  });

  it('renders timer with correct value and icon', () => {
    mockUseAppBarTimer.mockReturnValue({
      timeLeft: '00:10',
      timerState: 'active',
    });
    mockUseTypedSelector.mockReturnValue('2024-12-15T00:00:00Z');
    mockUseMediaQuery.mockReturnValue(false);

    const preloadedState = {
      authSlice: { user: { name: 'Test User' } },
      viewSlice: { someValue: 'some value' },
    };

    renderWithProviders(<AppBarTimer />, { preloadedState });

    const timerText = screen.getByText(/Timer: 00:10/);
    expect(timerText).toBeInTheDocument();
    expect(timerText).toHaveStyle('color: activeColor');
    expect(screen.getByTestId('AppBarExtSessionIcon')).toBeInTheDocument();
  });
});
