import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import useDebounce from '../../hooks/searchDebounce';

export default function Search() {
  const { searchMov, statusReq, searchInput, search } = useContext(Context);
  const debouncedSearchTerm = useDebounce(searchInput, 2000);
  useEffect(() => {
    searchMov(searchInput);
    statusReq(searchInput);
  }, [debouncedSearchTerm]);
  return (
    <div>
      <input
        type='text'
        placeholder='Buscar...'
        onChange={(e) => {
          search(e.target.value);
        }}
        value={searchInput}
      />
    </div>
  );
}
