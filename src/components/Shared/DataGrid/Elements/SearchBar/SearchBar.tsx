import React, { useState, useCallback } from 'react';
import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';
import './Style.scss';

interface SearchBarProps {
  onSearch: (value: string) => void;
  disabled?: boolean;
}

function SearchBar({ onSearch, disabled }: SearchBarProps) {
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
