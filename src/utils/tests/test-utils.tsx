import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { AppStoreType, RootStateType, setupStore } from 'redux/config/Store';

interface ExtendedRenderOptions {
  preloadedState?: Partial<RootStateType>;
  store?: AppStoreType;
}

export function renderWithProviders(
  ui: React.ReactElement,
  { preloadedState = {}, store = setupStore(preloadedState), ...renderOptions }: ExtendedRenderOptions = {}
) {
  const Wrapper = ({ children }: PropsWithChildren) => <Provider store={store}>{children}</Provider>;

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
