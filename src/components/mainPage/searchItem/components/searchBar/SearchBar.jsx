import React, { useEffect, useState, useRef } from 'react'
import { ReactComponent as SearchLogo } from './icons/Search.svg'
import { ReactComponent as ClearIcon } from './icons/Clear.svg';
import './SearchBar.scss'

export const SearchBar = () => {

    const [searchText, setSearchText] = useState('');
    const inputRef = useRef(null);

    const handleInputChange = (e) => {
      setSearchText(e.target.value);
    };
  
    const clearSearch = () => {
      setSearchText('');
    };

    const handleSearchIconClick = () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      };

    return (
        <div className='input_wrapper'>
          <input
            ref={inputRef}
            type="text"
            value={searchText}
            onChange={handleInputChange}
            placeholder='Введите название диагноза или код по МКБ'
          />
          <button
            type="button"
            className="icon_button"
            onClick={clearSearch}
            style={{ display: searchText ? 'block' : 'none' }} // Показ крестика если есть текст
          >
            <ClearIcon id="clear_icon" />
          </button>
          <button
            type="button"
            className="icon_button"
            onClick={handleSearchIconClick}
            style={{ display: searchText ? 'none' : 'block' }} // Показ лупы если нет текста
          >
            <SearchLogo id="search_icon" />
          </button>
        </div>
      );
    };

export default SearchBar