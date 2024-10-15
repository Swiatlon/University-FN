import React, { useState, useCallback } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, TextField } from '@mui/material';
import { debounce } from 'lodash';
import './Style.scss';

interface ISearchBarProps {
  onSearch: (value: string) => void;
  disabled?: boolean;
}

function SearchBar({ onSearch, disabled }: ISearchBarProps) {
  const [searchText, setSearchText] = useState('');

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      onSearch(value);
    }, 1500),
    [onSearch]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchText(value.trimEnd());
    debouncedSearch(value.trimEnd());
  };

  return (
    <Box className="SearchBar">
      <TextField
        className="SearchInput"
        placeholder="Search..."
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
    </Box>
  );
}

export default SearchBar;
