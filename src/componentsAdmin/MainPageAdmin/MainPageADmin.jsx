import React, { useState, useRef, useEffect } from 'react';
import './MainPageAdmin.scss';
import './PlatesAdmin.scss';

import { useNavigate, Link } from 'react-router-dom';

import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CheckTopIcon } from './icons/check-top.svg';
import { ReactComponent as CheckBottomIcon } from './icons/check-top.svg';
import { ReactComponent as SearchLogo } from './icons/Search.svg';
import { ReactComponent as ClearIcon } from './icons/Clear.svg';

import HeaderAdmin from '../headerAdmin/HeaderAdmin';

function MainPageAdmin() {
    const env = process.env;

    const [searchText, setSearchText] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [specializations, setSpecializations] = useState([]);
    const [loading, setLoading] = useState(false);

    const [showPopup, setShowPopup] = useState(false);
    const [newSpecialization, setNewSpecialization] = useState({ name: '', visitsCount: 0, diagnoses: [] });

    const [showEditPopup, setShowEditPopup] = useState(false);
    const [editSpecialization, setEditSpecialization] = useState(null);

    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [deleteSpecialization, setDeleteSpecialization] = useState(null);

    const [sortField, setSortField] = useState(null); // 'name' или 'visites'
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' или 'desc'

    const [filterCondition, setFilterCondition] = useState('greater'); // 'greater', 'less', 'equal'
    const [filterValue, setFilterValue] = useState('');
    const [showFilterPopup, setShowFilterPopup] = useState(false);
    const [originalSpecializations, setOriginalSpecializations] = useState([]);

    const [visibleCount, setVisibleCount] = useState(10);

    const inputRef = useRef(null);
    const wrapperRef = useRef(null);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // const response = await fetch('http://test-asya.ru/api/');
                const response = await fetch(`${env.REACT_APP_APP_API_PROTOCOL}://${env.REACT_APP_API_DOMEN_NAME}/api/`);
                const data = await response.json();
                setSpecializations(data.result.map(item => ({
                    name: item.name,
                    visitsCount: item.visitsCount,
                    code: item.code,
                    diagnoses: []
                })));
                setOriginalSpecializations(data.result.map(item => ({
                    name: item.name,
                    visitsCount: item.visitsCount,
                    code: item.code,
                    diagnoses: []
                })));
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (searchText) {
            setShowResults(true);
        } else {
            setShowResults(false);
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

    useEffect(() => {
    }, [specializations]);

    const filteredSpecializations = specializations.filter(specialization =>
        specialization.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleAddSpecialization = async () => {
        if (newSpecialization.name) {
            setLoading(true);
            try {
                const response = await fetch(`${env.REACT_APP_APP_API_PROTOCOL}://${env.REACT_APP_API_DOMEN_NAME}/api/addSpecialization?name=${newSpecialization.name}`, {
                    method: 'GET'
                });

                if (response.ok) {
                    const data = await response.json();
                    // Обновляем состояние с новыми данными
                    setSpecializations([...specializations, {
                        name: newSpecialization.name,
                        visitsCount: 0,
                        code: data.code,
                        diagnoses: [],
                    }]);
                    setNewSpecialization({ name: '', visitsCount: 0, diagnoses: [] });
                    setShowPopup(false);
                } else {
                    console.error("Ошибка при добавлении специализации:", response.statusText);
                }
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleEditClick = (specialization) => {
        setEditSpecialization(specialization);
        setShowEditPopup(true);
    };

    const handleEditSpecialization = async () => {
        if (editSpecialization) {
            setLoading(true);
            try {
                const response = await fetch(`${env.REACT_APP_APP_API_PROTOCOL}://${env.REACT_APP_API_DOMEN_NAME}/api/editSpecialization?name=${encodeURIComponent(editSpecialization.name)}&code=${encodeURIComponent(editSpecialization.code)}`, {
                    method: 'GET',
                });

                if (response.ok) {
                    const updatedSpecialization = await response.json();
                    setSpecializations(specializations.map(specialization =>
                        specialization.code === updatedSpecialization.code ? updatedSpecialization : specialization
                    ));
                    setEditSpecialization(null);
                    setShowEditPopup(false);
                    window.location.reload();
                } else {
                    console.error("Ошибка при редактировании специализации:", response.statusText);
                }
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleDeleteClick = (specialization) => {
        setDeleteSpecialization(specialization);
        setShowDeletePopup(true);
    };

    const handleDeleteSpecialization = async () => {
        if (deleteSpecialization) {
            setLoading(true);
            try {
                const response = await fetch(`${env.REACT_APP_APP_API_PROTOCOL}://${env.REACT_APP_API_DOMEN_NAME}/api/deleteSpecialization?code=${deleteSpecialization.code}`, {
                    method: 'GET',
                });

                if (response.ok) {
                    setSpecializations(specializations.filter(specialization => specialization.code !== deleteSpecialization.code));
                    setDeleteSpecialization(null);
                    setShowDeletePopup(false);
                } else {
                    console.error("Ошибка при удалении специализации:", response.statusText);
                }
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleSortByName = () => {
        if (sortField === 'name') {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField('name');
            setSortOrder('asc');
        }
    };

    const handleSortByVisits = () => {
        if (sortField === 'visitsCount') {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField('visitsCount');
            setSortOrder('asc');
        }
    };

    const sortedSpecializations = [...specializations].sort((a, b) => {
        if (sortField === 'name') {
            return sortOrder === 'asc'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        } else if (sortField === 'visitsCount') {
            return sortOrder === 'asc'
                ? a.visitsCount - b.visitsCount
                : b.visitsCount - a.visitsCount;
        }
        return 0; // Если сортировка не выбрана
    });

    const handleApplyFilter = () => {
        const value = parseInt(filterValue, 10);
        if (!isNaN(value)) {
            setSpecializations(originalSpecializations.filter(specialization => {
                if (filterCondition === 'greater') {
                    return specialization.visitsCount > value;
                } else if (filterCondition === 'less') {
                    return specialization.visitsCount < value;
                } else if (filterCondition === 'equal') {
                    return specialization.visitsCount === value;
                }
                return true;
            }));
        }
    };

    const handleClearFilter = () => {
        setFilterValue('');
        setFilterCondition('greater');
        setSpecializations(originalSpecializations); // Возвращаем все специализации
    };

    // console.log(specializations);


    return (
        <div className='wrapper'>
            <div className='header-1'>
                <HeaderAdmin />
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

                            {showResults && searchText && (
                                <div className="search_results">
                                    {loading ? (
                                        <div className="loading">Загрузка...</div>
                                    ) : filteredSpecializations.length > 0 ? (
                                        filteredSpecializations.map((specialization, index) => (
                                            <Link
                                                key={index}
                                                to={`/admin/specialization/${specialization.code}/`}
                                                className="search_result_item"
                                                state={{ specialization, allSpecializations: specializations }}
                                            >
                                                <div className="specialization_name">{specialization.name}</div>
                                            </Link>
                                        ))
                                    ) : (
                                        <div className="no_results">В соответствии с запросом не найдены специализации</div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='filter-block'>
                    <div className='filter' onClick={() => setShowFilterPopup(!showFilterPopup)}>
                        Фильтрация
                    </div>
                </div>
                {showFilterPopup && (
                    <div className="filter-popup">
                        <div className='filter-data'>
                            <select className='select-filter' value={filterCondition} onChange={(e) => setFilterCondition(e.target.value)}>
                                <option value="greater">Больше чем</option>
                                <option value="less">Меньше чем</option>
                                <option value="equal">Равно</option>
                            </select>
                            <input
                                className='input-filter'
                                type="number"
                                value={filterValue}
                                onChange={(e) => setFilterValue(e.target.value)}
                                placeholder="Введите значение"
                            />
                        </div>
                        <button className='filter-result' onClick={handleApplyFilter}>Отфильтровать</button>
                        <button className='filter-out' onClick={handleClearFilter}>Убрать фильтрацию</button>
                    </div>
                )}
                <div className='add-spec-block'>
                    <div className='add-spec' onClick={() => setShowPopup(true)}>
                        <PlusIcon />
                        Добавление специализации
                    </div>
                </div>
                <div className='Plates'>
                    <div className='plates_wrapper'>
                        <div className='head_diagnosis_plate'>
                            <div className='text-sort'>
                                <div className='head_text_diagnosis_plate'>
                                    Специализация
                                </div>
                                <div className='check-icons' onClick={handleSortByName}>
                                    <CheckTopIcon className="top-icon" />
                                    <CheckBottomIcon className="bottom-icon" />
                                </div>
                            </div>
                            <div className='text-sort'>
                                <div className='head_count_diagnosis_plate'>
                                    Количество посещений
                                </div>
                                <div className='check-icons' onClick={handleSortByVisits}>
                                    <CheckTopIcon className="top-icon" />
                                    <CheckBottomIcon className="bottom-icon" />
                                </div>
                            </div>
                            <div className='for-head'></div>
                        </div>
                        {!loading && sortedSpecializations.length > 0 && (
                            sortedSpecializations.slice(0, visibleCount).map((specialization, index) => (
                                <div className='diagnosis_plate'>
                                    <Link
                                        key={index}
                                        to={`/admin/specialization/${specialization.code}/`}
                                        state={{ specialization, allSpecializations: specializations }}
                                        className='link-plate for-styles'
                                    >
                                        <div className='force_diagnosis_plate'></div>
                                        <div className='text_diagnosis_plate'>{specialization.name}</div>
                                        <div className='count_diagnosis_plate'>Количество посещений: {specialization.visitsCount}</div>
                                    </Link>
                                    <div className='buttons-plate'>
                                        <div className='button-change' onClick={(e) => handleEditClick(specialization)}>Изменить</div>
                                        <div className='button-delete' onClick={() => handleDeleteClick(specialization)}>Удалить</div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    {sortedSpecializations.length > visibleCount && (
                        <button className='show-more-button' onClick={() => setVisibleCount(visibleCount + 10)}>
                            Показать еще
                        </button>
                    )}
                </div>
            </div>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Добавить специализацию</h2>
                        <input
                            type="text"
                            value={newSpecialization.name}
                            onChange={(e) => setNewSpecialization({ ...newSpecialization, name: e.target.value })}
                            placeholder="Название специализации"
                        />
                        <div className="popup-buttons">
                            <button className='popup-button-add' onClick={handleAddSpecialization}>Добавить</button>
                            <button className='popup-button-close' onClick={() => setShowPopup(false)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
            {showEditPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Изменить специализацию</h2>
                        <input
                            type="text"
                            value={editSpecialization.name}
                            onChange={(e) => setEditSpecialization({ ...editSpecialization, name: e.target.value })}
                            placeholder="Название специализации"
                        />
                        <div className="popup-buttons">
                            <button className='popup-button-add' onClick={handleEditSpecialization}>Сохранить</button>
                            <button className='popup-button-close' onClick={() => setShowEditPopup(false)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
            {showDeletePopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Вы уверены, что хотите удалить специализацию?</h2>
                        <div className="popup-buttons">
                            <button className='popup-button-delete' onClick={handleDeleteSpecialization}>Удалить</button>
                            <button className='popup-button-close' onClick={() => setShowDeletePopup(false)}>Отмена</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainPageAdmin;