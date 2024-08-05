import { enqueueSnackbar } from 'notistack';
import type { AnyAction, Dispatch } from '@reduxjs/toolkit';

interface IError {
  error: {
    data: {
      message: string;
      status: number;
    };
    isUnhandledError: boolean;
  };
  meta: {
    request: Request;
    response: Response;
  };
}

interface IQueryStartedConfig<T, U> {
  successMessage: string;
  successCallback: (data: T, dispatch: Dispatch<AnyAction>, queryFulfilled: Promise<{ data: T }>, arg: unknown) => U;
}

const isIError = (error: unknown): error is IError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'error' in error &&
    typeof (error as IError).error === 'object' &&
    'data' in (error as IError).error &&
    typeof (error as IError).error.data === 'object' &&
    'message' in (error as IError).error.data
  );
};

export const extendedOnQueryStartedWithNotifications = <T, U>({ successMessage, successCallback }: IQueryStartedConfig<T, U>) => {
  return async (arg: unknown, { dispatch, queryFulfilled }: { dispatch: Dispatch<AnyAction>; queryFulfilled: Promise<{ data: T }> }) => {
    try {
      const { data } = await queryFulfilled;
      const result = successCallback(data, dispatch, queryFulfilled, arg);

      enqueueSnackbar(successMessage, { variant: 'success' });
      return result;
    } catch (error: unknown) {
      let message = 'Operation failed';

      if (isIError(error)) {
        // eslint-disable-next-line @typescript-eslint/prefer-destructuring
        message = error.error.data.message;
      }

      enqueueSnackbar(message, { variant: 'error' });
      return undefined;
    }
  };
};
