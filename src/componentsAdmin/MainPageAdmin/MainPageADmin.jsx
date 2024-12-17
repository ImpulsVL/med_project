import React, { useState, useRef, useEffect } from 'react';
import './MainPageAdmin.scss';
import './PlatesAdmin.scss';
import SearchItem from "./searchItemAdmin/SearchItemAdmin";
// import Plates from "./plates/Plates";
import { useNavigate } from 'react-router-dom';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CheckTopIcon } from './icons/check-top.svg';
import { ReactComponent as CheckBottomIcon } from './icons/check-top.svg';
import { ReactComponent as SearchLogo } from './icons/Search.svg';
import { ReactComponent as ClearIcon } from './icons/Clear.svg';
import PlatesAdmin from './PlatesAdmin/PlatesAdmin';

function MainPageAdmin() {


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
                    const response = await fetch(`http://assistant-admin.pavlov-mc.ru/api/find?search=${searchText}`);
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
        navigate(`/diagnos/${diagnosis.id}/${diagnosis.section}`); // Navigate to the diagnosis page
    };

    return (
        <div className='wrapper'>
            <div className='header-1'>
                <div className='header-admin'>
                    <div className="menu_section">
                        <h2 className='admin-panel'>Админ панель</h2>
                    </div>
                    <div className="menu_section">
                        <h2 className='scales'>Парсер</h2>
                    </div>
                    <div className="menu_section">
                        <h2 className='scales'>Модерация</h2>
                    </div>
                </div>
            </div>
            <div className="main-container">
                <div className='SearchItem'>
                    <div className="search_bar_container">
                        <div className="search_bar_wrapper" ref={wrapperRef}>
                            <div className="input_wrapper">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={searchText}
                                    onChange={handleInputChange}
                                    placeholder="Поиск"
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
                    </div>
                </div>
                <div className='filter-block'>
                    <div className='filter'>
                        Фильтрация
                    </div>
                </div>
                <div className='add-spec-block'>
                    <div className='add-spec'>
                        <PlusIcon />
                        Добавление специализации
                    </div>
                </div>
                <div className='Plates'>
                    <div className='plates_wrapper'>
                        <div className='head_diagnosis_plate'>
                            <div className='text-sort'>
                                <div className='head_text_diagnosis_plate'>
                                    Урология
                                </div>
                                <div className='check-icons'>
                                    <CheckTopIcon />
                                    <CheckBottomIcon className="bottom-icon" />
                                </div>
                            </div>
                            <div className='text-sort'>
                                <div className='head_count_diagnosis_plate'>
                                    Количество посещений
                                </div>
                                <div className='check-icons'>
                                    <CheckTopIcon />
                                    <CheckBottomIcon className="bottom-icon" />
                                </div>
                            </div>
                            <div className='for-head'></div>
                        </div>
                        <a
                            className='diagnosis_plate'
                            to={`/admin`}
                        >
                            <div className='force_diagnosis_plate'></div>
                            <div className='text_diagnosis_plate'>Урология</div>
                            <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                            <div className='buttons-plate'>
                                <div className='button-change'>
                                    Изменить
                                </div>
                                <div className='button-delete'>
                                    Удалить
                                </div>
                            </div>
                        </a>
                        <a
                            className='diagnosis_plate'
                            to={`/admin`}
                        >
                            <div className='force_diagnosis_plate'></div>
                            <div className='text_diagnosis_plate'>Урология</div>
                            <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                            <div className='buttons-plate'>
                                <div className='button-change'>
                                    Изменить
                                </div>
                                <div className='button-delete'>
                                    Удалить
                                </div>
                            </div>
                        </a>
                        <a
                            className='diagnosis_plate'
                            to={`/admin`}
                        >
                            <div className='force_diagnosis_plate'></div>
                            <div className='text_diagnosis_plate'>Урология</div>
                            <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                            <div className='buttons-plate'>
                                <div className='button-change'>
                                    Изменить
                                </div>
                                <div className='button-delete'>
                                    Удалить
                                </div>
                            </div>
                        </a>
                        <a
                            className='diagnosis_plate'
                            to={`/admin`}
                        >
                            <div className='force_diagnosis_plate'></div>
                            <div className='text_diagnosis_plate'>Урология</div>
                            <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                            <div className='buttons-plate'>
                                <div className='button-change'>
                                    Изменить
                                </div>
                                <div className='button-delete'>
                                    Удалить
                                </div>
                            </div>
                        </a>
                        <a
                            className='diagnosis_plate'
                            to={`/admin`}
                        >
                            <div className='force_diagnosis_plate'></div>
                            <div className='text_diagnosis_plate'>Урология</div>
                            <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                            <div className='buttons-plate'>
                                <div className='button-change'>
                                    Изменить
                                </div>
                                <div className='button-delete'>
                                    Удалить
                                </div>
                            </div>
                        </a>
                        <a
                            className='diagnosis_plate'
                            to={`/admin`}
                        >
                            <div className='force_diagnosis_plate'></div>
                            <div className='text_diagnosis_plate'>Урология</div>
                            <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                            <div className='buttons-plate'>
                                <div className='button-change'>
                                    Изменить
                                </div>
                                <div className='button-delete'>
                                    Удалить
                                </div>
                            </div>
                        </a>
                        <a
                            className='diagnosis_plate'
                            to={`/admin`}
                        >
                            <div className='force_diagnosis_plate'></div>
                            <div className='text_diagnosis_plate'>Урология</div>
                            <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                            <div className='buttons-plate'>
                                <div className='button-change'>
                                    Изменить
                                </div>
                                <div className='button-delete'>
                                    Удалить
                                </div>
                            </div>
                        </a>
                        <a
                            className='diagnosis_plate'
                            to={`/admin`}
                        >
                            <div className='force_diagnosis_plate'></div>
                            <div className='text_diagnosis_plate'>Урология</div>
                            <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                            <div className='buttons-plate'>
                                <div className='button-change'>
                                    Изменить
                                </div>
                                <div className='button-delete'>
                                    Удалить
                                </div>
                            </div>
                        </a>
                        <a
                            className='diagnosis_plate'
                            to={`/admin`}
                        >
                            <div className='force_diagnosis_plate'></div>
                            <div className='text_diagnosis_plate'>Урология</div>
                            <div className='count_diagnosis_plate'>Количество посещений: 123</div>
                            <div className='buttons-plate'>
                                <div className='button-change'>
                                    Изменить
                                </div>
                                <div className='button-delete'>
                                    Удалить
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPageAdmin;