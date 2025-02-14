import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as SearchLogo } from './icons/Search.svg';
import { ReactComponent as ClearIcon } from './icons/Clear.svg';
import './SearchBar.scss';

export const SearchBar = () => {
  const env = process.env;
  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [diagnoses, setDiagnoses] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchText) {
      const fetchData = async () => {
        setLoading(true);
        try {
          // const response = await fetch(`http://assistant-admin.pavlov-mc.ru/api/find?search=${searchText}`);
          const response = await fetch(`${env.REACT_APP_APP_API_PROTOCOL}://${env.REACT_APP_DOMEN_NAME}/api/find?search=${searchText}`);
          const data = await response.json();
          const parsedData = (data.result);
          setDiagnoses(parsedData.items);
          setShowResults(true);
        } catch (error) {
          setDiagnoses([]);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    } else {
      setShowResults(false);
      setDiagnoses([]);
    }
  }, [searchText]);

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

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDiagnosisClick = (diagnosis) => {
    navigate(`/diagnos/${diagnosis.id}/${diagnosis.section}`);
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
                onClick={() => handleDiagnosisClick(diagnosis)}
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