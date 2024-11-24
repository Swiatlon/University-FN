import React, { useState, useCallback, type RefObject } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { debounce } from 'lodash';
import type { AgGridReact } from 'ag-grid-react';

interface ISearchBarProps {
  disabled?: boolean;
  gridRef: RefObject<AgGridReact>;
}

function FrontEndSearchBar({ gridRef, disabled }: ISearchBarProps) {
  const [searchText, setSearchText] = useState('');

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      gridRef.current?.api.setGridOption('quickFilterText', value);
    }, 500),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchText(value.trim());
    debouncedSearch(value.trim());
  };

  return (
    <TextField
      sx={{ ml: 'auto', width: '40%', minWidth: '120px' }}
      className="SearchInput"
      placeholder="Search..."
      size="small"
      value={searchText}
      onChange={handleSearchChange}
      disabled={disabled}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default FrontEndSearchBar;
