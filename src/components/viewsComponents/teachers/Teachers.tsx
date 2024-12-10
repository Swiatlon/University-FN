import { useMemo, useCallback } from 'react';
import { Box } from '@mui/material';
import DataGrid, { SearchBarVariantEnum } from 'components/shared/dataGrid/DataGrid';
import useQueryParams from 'hooks/useQueryParams.Hook';
import { useGetAllTeachersQuery } from 'redux/apiSlices/community/Community.Api.Slice';
import { TeachersColumns } from './constants/Columns';
import type { IQueryParams } from 'contract/interfaces/requests/Requests';

const initialQueryParams: IQueryParams = {
  selectFields: ['id', 'name', 'surname', 'contactEmail', 'contactPhone'],
  pagination: { page: 1, pageSize: 500 },
};

const Teachers = () => {
  const { queryParams, setSearch, setPagination, setPaginationPage } = useQueryParams({ initialQueryParams });
  const { data = { items: [] }, isFetching, error } = useGetAllTeachersQuery(queryParams);
  const rowData = useMemo(() => data.items, [data]);

  const handleSearch = useCallback(
    (value: string) => {
      setPaginationPage(1);
      setSearch(value, ['name', 'surname', 'contactEmail', 'contactPhone']);
    },
    [setPaginationPage, setSearch]
  );

  const handlePagination = useCallback(
    (page: number, pageSize: number) => {
      setPagination(page, pageSize);
    },
    [setPagination]
  );

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <Box>
      <DataGrid
        sx={{ height: '70vh', width: '100%' }}
        columnDefs={TeachersColumns}
        rowData={rowData}
        isLoading={isFetching}
        rowSelection="single"
        searchVariant={SearchBarVariantEnum.BackEnd}
        handleSearch={handleSearch}
        exportFileName="teachers_export"
        pagination={{
          setPagination: handlePagination,
          page: queryParams.pagination!.page,
          pageSize: queryParams.pagination!.pageSize,
          totalRows: data.count,
        }}
      />
    </Box>
  );
};

export default Teachers;
