import { useState } from 'react';
import type { IQueryParams, TSearchQueryType } from 'Contract/Interfaces/Requests/Requests';

interface IUseQueryParamsProps {
  initialQueryParams?: Partial<IQueryParams>;
}

const useQueryParams = ({ initialQueryParams = {} }: IUseQueryParamsProps) => {
  const [queryParams, setQueryParams] = useState<IQueryParams>({
    pagination: { page: 1, pageSize: 1_000 },
    ...initialQueryParams,
  });

  const setSearch = (lookupText: string, fields?: string[]) => {
    setQueryParams(prevState => ({
      ...prevState,
      search: fields
        ? ({ lookupText, fields } as TSearchQueryType)
        : ({ lookupText, searchAllFields: true } as TSearchQueryType),
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
