/* eslint-disable @typescript-eslint/prefer-destructuring */
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

interface IResponseData {
  isError?: boolean;
  message?: string;
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

export const extendedOnQueryStartedWithNotifications = <T, U>({
  successMessage,
  successCallback,
}: IQueryStartedConfig<T, U>) => {
  return async (
    arg: unknown,
    { dispatch, queryFulfilled }: { dispatch: Dispatch<AnyAction>; queryFulfilled: Promise<{ data: T }> }
  ) => {
    try {
      const { data } = await queryFulfilled;

      if ((data as IResponseData | undefined)?.isError && (data as IResponseData).message) {
        throw new Error((data as IResponseData).message);
      }

      const result = successCallback(data, dispatch, queryFulfilled, arg);

      enqueueSnackbar(successMessage, { variant: 'success' });
      return result;
    } catch (error: unknown) {
      let message = 'Operation failed';

      if (isIError(error)) {
        message = error.error.data.message;
      } else if (error instanceof Error) {
        message = error.message;
      }

      enqueueSnackbar(message, { variant: 'error' });
      return undefined;
    }
  };
};
