import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { ReactComponent as SearchLogo } from './icons/Search.svg';
import { ReactComponent as ClearIcon } from './icons/Clear.svg';
import './SearchBar.scss';

export const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [diagnoses, setDiagnoses] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(false); // Loading state
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);
  const navigate = useNavigate(); // For programmatic navigation

  // Fetch data from API when searchText changes
  useEffect(() => {
    if (searchText) {
      const fetchData = async () => {
        setLoading(true); // Set loading state before fetching data
        try {
          const response = await fetch(`http://test-asya.ru/api/find?search=${searchText}`);
          const data = await response.json();
          const parsedData = (data.result); // Parse nested JSON string
          setDiagnoses(parsedData.items); // Assuming the API returns one diagnosis at a time
          setShowResults(true); // Show the results when data is fetched
        } catch (error) {
          setDiagnoses([]); // Clear diagnoses if there's an error
        } finally {
          setLoading(false); // Remove loading state after fetching ends
        }
      };

      fetchData();
    } else {
      setShowResults(false); // Hide results when the search text is cleared
      setDiagnoses([]); // Clear results if search text is empty
    }
  }, [searchText]); // Dependency on searchText, triggers fetch when it changes

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => {
    setSearchText('');
    setShowResults(false);
  };

  const handleSearchIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Handle click outside the search component
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowResults(false);
    }
  };

  // Attach event listener to detect clicks outside
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Navigate to the diagnosis page
  const handleDiagnosisClick = (diagnosis) => {
    navigate(`/diagnos/${diagnosis.id}`); // Navigate to the diagnosis page
  };

  return (
    <div className="search_bar_wrapper" ref={wrapperRef}>
      <div className="input_wrapper">
        <input
          ref={inputRef}
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Введите название диагноза или код по МКБ"
        />
        <button
          type="button"
          className="icon_button"
          onClick={clearSearch}
          style={{ display: searchText ? 'block' : 'none' }}
        >
          <ClearIcon id="clear_icon" />
        </button>
        <button
          type="button"
          className="icon_button"
          onClick={handleSearchIconClick}
          style={{ display: searchText ? 'none' : 'block' }}
        >
          <SearchLogo id="search_icon" />
        </button>
      </div>

      {/* Search results */}
      {showResults && searchText && (
        <div className="search_results">
          {loading ? (
            <div className="loading">Загрузка...</div>
          ) : diagnoses !== undefined ? (
            diagnoses.map((diagnosis, index) => (
              <div
                key={index}
                className="search_result_item"
                onClick={() => handleDiagnosisClick(diagnosis)} // Handle click
              >
                <span className="diagnosis_code">{diagnosis.code}</span>
                <span className="diagnosis_name">{diagnosis.name}</span>
              </div>
            ))
          ) : (
            <div className="no_results">В соответствии с запросом не найдены диагнозы</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;