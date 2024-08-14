import React, { useState } from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <TextField
            label="Search"
            value={searchTerm}
            onChange={(e) => {
                setSearchTerm(e.target.value);
                handleSearch();
            }}
            variant="outlined"
            fullWidth
        />
    );
};

export default SearchBar;
