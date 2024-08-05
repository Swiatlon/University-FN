import { useState } from 'react';
import type { IQueryParams, TSearchQuery } from 'Contract/Interfaces/Requests/Requests';

interface UseQueryParamsProps {
  initialQueryParams?: Partial<IQueryParams>;
}

const useQueryParams = ({ initialQueryParams = {} }: UseQueryParamsProps) => {
  const [queryParams, setQueryParams] = useState<IQueryParams>({
    pagination: { page: 1, pageSize: 1_000 },
    ...initialQueryParams,
  });

  const setSearch = (lookupText: string, fields?: string[]) => {
    setQueryParams(prevState => ({
      ...prevState,
      search: fields ? ({ lookupText, fields } as TSearchQuery) : ({ lookupText, searchAllFields: true } as TSearchQuery),
    }));
  };

  const setPagination = (page: number, pageSize: number) => {
    setQueryParams(prevState => ({
      ...prevState,
      pagination: { page, pageSize },
    }));
  };

  const setPaginationPage = (page: number) => {
    setQueryParams(prevState => ({
      ...prevState,
      pagination: {
        ...prevState.pagination,
        page,
        pageSize: prevState.pagination!.pageSize,
      },
    }));
  };

  const setSelectFields = (fields: string[]) => {
    setQueryParams(prevState => ({
      ...prevState,
      selectFields: fields,
    }));
  };

  return {
    queryParams,
    setSearch,
    setPagination,
    setPaginationPage,
    setSelectFields,
  };
};

export default useQueryParams;
