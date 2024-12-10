import { useState, useCallback, ChangeEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { debounce } from 'lodash';
interface ISearchBarProps {
  onSearch: (value: string) => void;
  disabled?: boolean;
}

function BackendSearchBar({ onSearch, disabled }: ISearchBarProps) {
  const [searchText, setSearchText] = useState('');

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      onSearch(value);
    }, 1500),
    [onSearch]
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
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

export default BackendSearchBar;
