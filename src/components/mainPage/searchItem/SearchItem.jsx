import React, { useState } from 'react'
import './SearchItem.scss'
import { SearchBar } from './components/searchBar/SearchBar';

function SearchItem() {
    return ( // Добавляем return для возврата JSX
        <div className="search_bar_container">
            <SearchBar />
        </div>
    );
}

export default SearchItem;