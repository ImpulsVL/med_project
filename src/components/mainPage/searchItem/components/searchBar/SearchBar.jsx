import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as SearchLogo } from './icons/Search.svg';
import { ReactComponent as ClearIcon } from './icons/Clear.svg';
import './SearchBar.scss';

// Тестовые данные для поиска
const testDiagnoses = [
  { code: 'E21', name: 'Хандрид' },
  { code: 'A01', name: 'Тестовый диагноз 1' },
  { code: 'B02', name: 'Тестовый диагноз 2' },
  { code: 'C03', name: 'Тестовый диагноз 3' },
  { code: 'D04', name: 'Тестовый диагноз 4' },
  { code: 'F05', name: 'Тестовый диагноз 5' },
];

export const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [showResults, setShowResults] = useState(false); // Управление видимостью результатов
  const inputRef = useRef(null);
  const wrapperRef = useRef(null); // Реф для отслеживания кликов вне компонента

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    setShowResults(true); // Показываем результаты при вводе текста
  };

  const clearSearch = () => {
    setSearchText('');
    setShowResults(false); // Скрываем результаты при очистке поля
  };

  const handleSearchIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Фильтрация данных на основе введенного текста
  const filteredDiagnoses = testDiagnoses.filter(
    (diagnosis) =>
      diagnosis.name.toLowerCase().includes(searchText.toLowerCase()) ||
      diagnosis.code.toLowerCase().includes(searchText.toLowerCase())
  );

  // Обработчик клика вне компонента поиска
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowResults(false); // Скрываем результаты
    }
  };

  // Добавляем и удаляем обработчик события на document
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="search_bar_wrapper" ref={wrapperRef}>
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
      
      {/* Блок результатов поиска */}
      {showResults && searchText && (
        <div className="search_results">
          {filteredDiagnoses.length > 0 ? (
            filteredDiagnoses.map((diagnosis, index) => (
              <div key={index} className="search_result_item">
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