import React, { useState } from 'react'
import './SearchItem.scss'
import { useLocation } from 'react-router-dom';
import { SearchBar } from './components/searchBar/SearchBar';

function SearchItemSecond({sectionCode}) {

    return ( // Добавляем return для возврата JSX
        <div className="search_bar_container">
            <SearchBar sectionCodeSearch = {sectionCode}/>
        </div>
    );
}

export default SearchItemSecond;