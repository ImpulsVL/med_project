import React, { useState, useRef, useEffect } from 'react';
import './DiagnosisPageAdmin.scss';
import { useNavigate, useLocation, Link, useParams } from 'react-router-dom';
import HeaderAdmin from '../headerAdmin/HeaderAdmin';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CheckTopIcon } from './icons/check-top.svg';
import { ReactComponent as CheckBottomIcon } from './icons/check-top.svg';
import { ReactComponent as SearchLogo } from './icons/Search.svg';
import { ReactComponent as ClearIcon } from './icons/Clear.svg';
import PlatesAdmin from './PlatesAdmin/PlatesAdmin';
import CountBlock from '../countBlock/CountBlock';
import SideBar from '../sidebar/SideBar';

import CheckTopIconImg from './icons/check-top.svg';
import PlusIconImg from './icons/plus.svg';

function DiagnosisPageAdmin() {
    const env = process.env;
    const [searchText, setSearchText] = useState('');
    const [filteredDiagnoses, setFilteredDiagnoses] = useState([]);
    const [diagnoses, setDiagnoses] = useState([]);

    const inputRef = useRef(null);
    // const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    const { specialization, allSpecializations } = location.state || {};

    console.log(specialization, '1');
    console.log(allSpecializations, '2');

    // const currentSpecializationCode = specialization?.code;
    // const currentSpecializationName = specialization?.name;

    var currentSpecializationName = specialization?.section;
    currentSpecializationName = specialization?.code;
    const currentSpecializationCode = params?.code;

    console.log(currentSpecializationCode, '3');
    console.log(currentSpecializationName, '4');

    const [showPopup, setShowPopup] = useState(false);
    const [newDiagnosis, setNewDiagnosis] = useState({ name: '', code: '', visitsCount: 0 });

    const [showEditPopup, setShowEditPopup] = useState(false);
    const [editDiagnosis, setEditDiagnosis] = useState(null);

    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [deleteDiagnosis, setDeleteDiagnosis] = useState(null);

    const [sortField, setSortField] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortCode, setSortCode] = useState(null);

    const [filterCondition, setFilterCondition] = useState('greater'); // 'greater', 'less', 'equal'
    const [filterValue, setFilterValue] = useState('');
    const [showFilterPopup, setShowFilterPopup] = useState(false);
    const [originalDiagnoses, setOriginalDiagnoses] = useState([]);
    const [codeFilterText, setCodeFilterText] = useState('');

    const [loading, setLoading] = useState(true);
    const [empty, setEmpty] = useState(true);
    const [error, setError] = useState(true);


    // console.log(currentSpecializationCode, 'currentSpecCode');

    useEffect(() => {
        const fetchDiagnoses = async () => {
            if (currentSpecializationCode) {
                try {
                    const response = await fetch(`${env.REACT_APP_APP_API_PROTOCOL}://${env.REACT_APP_API_DOMEN_NAME}/api/diagnoses?code=${currentSpecializationCode}`);
                    const data = await response.json();
                    setDiagnoses(data.result.items.map(item => ({
                        id: item.id,
                        code: item.code,
                        name: item.name,
                        visitsCount: item.visitsCount
                    })));
                    setOriginalDiagnoses(data.result.items.map(item => ({
                        id: item.id,
                        code: item.code,
                        name: item.name,
                        visitsCount: item.visitsCount
                    })));
                } catch (error) {
                    console.error("Ошибка при загрузке диагнозов:", error);
                }
            }
        };

        fetchDiagnoses();
    }, [currentSpecializationCode]);

    useEffect(() => {
        // Сброс состояния диагнозов при изменении специализации
        setDiagnoses([]);
        setFilteredDiagnoses([]);
    }, [currentSpecializationCode]);

    useEffect(() => {
        const fetchDiagnoses = async () => {
            try {
                if (location.state == null) {
                    setLoading(true);
                }
                var currentSpecialization = await fetch(`${env.REACT_APP_APP_API_PROTOCOL}://${env.REACT_APP_API_DOMEN_NAME}/api/diagnoses?code=${params.code}`);
                var allSpecializations = await fetch(`${env.REACT_APP_APP_API_PROTOCOL}://${env.REACT_APP_API_DOMEN_NAME}/api/sections`);

                if (!currentSpecialization.ok) {
                    throw new Error('Ошибка при загрузке данных текущей специализации');
                }
                if (!allSpecializations.ok) {
                    throw new Error('Ошибка при загрузке данных всех специализаций');
                }

                var resultCurrentSpecialization = await currentSpecialization.json();
                var resultAllSpecializations = await allSpecializations.json();

                location.state = new Object;
                location.state.allSpecializations = resultAllSpecializations.result;
                location.state.specialization = resultCurrentSpecialization.result;
                location.state.current = params.code;
                if (resultCurrentSpecialization.result.items == undefined) {
                    setEmpty(true);
                    setDiagnoses([]);
                }
                else {
                    setEmpty(false);
                    setDiagnoses(resultCurrentSpecialization.result.items);
                }
                setCurrentPage(1);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchDiagnoses();

    }, []);

    useEffect(() => {
        // Сброс состояния диагнозов при изменении специализации
        const fetchDiagnoses = async () => {
            try {
                setLoading(true);

                var currentSpecialization = await fetch(`${env.REACT_APP_APP_API_PROTOCOL}://${env.REACT_APP_API_DOMEN_NAME}/api/diagnoses?code=${params.code}`);
                var allSpecializations = await fetch(`${env.REACT_APP_APP_API_PROTOCOL}://${env.REACT_APP_API_DOMEN_NAME}/api/sections`);

                if (!currentSpecialization.ok) {
                    throw new Error('Ошибка при загрузке данных текущей специализации');
                }
                if (!allSpecializations.ok) {
                    throw new Error('Ошибка при загрузке данных всех специализаций');
                }

                var resultCurrentSpecialization = await currentSpecialization.json();
                var resultAllSpecializations = await allSpecializations.json();

                location.state = new Object;
                location.state.allSpecializations = resultAllSpecializations.result;
                location.state.specialization = resultCurrentSpecialization.result;
                location.state.current = params.code;
                if (resultCurrentSpecialization.result.items == undefined) {
                    setEmpty(true);
                    setDiagnoses([]);
                }
                else {
                    setEmpty(false);
                    setDiagnoses(resultCurrentSpecialization.result.items);
                }
                setCurrentPage(1);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchDiagnoses();
        setFilteredDiagnoses([]);
    }, [currentSpecializationCode]);

    useEffect(() => {
        if (searchText) {
            const lowerCasedSearch = searchText.toLowerCase();
            const results = diagnoses.filter(
                (diagnosis) =>
                    diagnosis.name.toLowerCase().includes(lowerCasedSearch) ||
                    diagnosis.code.toLowerCase().includes(lowerCasedSearch)
            );
            setFilteredDiagnoses(results);
        } else {
            setFilteredDiagnoses([]);
        }
    }, [searchText, diagnoses]);

    // console.log(diagnoses, 'diagnoses');

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

    const handleAddDiagnosis = async () => {
        if (newDiagnosis.name && newDiagnosis.code && currentSpecializationCode) {
            try {
                const response = await fetch(`${env.REACT_APP_APP_API_PROTOCOL}://${env.REACT_APP_API_DOMEN_NAME}/api/addDiagnosis?name=${newDiagnosis.name}&sectionCode=${currentSpecializationCode}&code=${newDiagnosis.code}`, {
                    method: 'GET'
                });

                if (response.ok) {
                    const data = await response.json();
                    setDiagnoses(prevDiagnoses => [
                        ...prevDiagnoses,
                        {
                            id: data.id,
                            code: newDiagnosis.code,
                            name: newDiagnosis.name,
                            visitsCount: 0,
                        },
                    ]);
                    setNewDiagnosis({ name: '', code: '', visitsCount: 0 });
                    setShowPopup(false);
                } else {
                    console.error("Ошибка при добавлении диагноза:", response.statusText);
                }
            } catch (error) {
                console.error("Ошибка при добавлении диагноза:", error);
            }
        }
    };

    const handleEditClick = (diagnosis) => {
        setEditDiagnosis(diagnosis);
        setShowEditPopup(true);
    };

    const handleUpdateDiagnosis = async () => {
        if (editDiagnosis) {
            try {
                const response = await fetch(`${env.REACT_APP_APP_API_PROTOCOL}://${env.REACT_APP_API_DOMEN_NAME}/api/updateDiagnosis?id=${editDiagnosis.id}&name=${encodeURIComponent(editDiagnosis.name)}&code=${encodeURIComponent(editDiagnosis.code)}`, {
                    method: 'GET',
                });

                if (response.ok) {
                    // Обновляем состояние диагнозов без перезагрузки страницы
                    setDiagnoses(prevDiagnoses =>
                        prevDiagnoses.map(diagnosis =>
                            diagnosis.id === editDiagnosis.id ? { ...diagnosis, name: editDiagnosis.name, code: editDiagnosis.code } : diagnosis
                        )
                    );
                    setShowEditPopup(false);
                } else {
                    console.error("Ошибка при обновлении диагноза:", response.statusText);
                }
            } catch (error) {
                console.error("Ошибка при обновлении диагноза:", error);
            }
        }
    };

    const handleDeleteClick = (diagnosis) => {
        setDeleteDiagnosis(diagnosis);
        setShowDeletePopup(true);
    };

    const handleDeleteDiagnosis = async () => {
        if (deleteDiagnosis) {
            try {
                const response = await fetch(`${env.REACT_APP_APP_API_PROTOCOL}://${env.REACT_APP_API_DOMEN_NAME}/api/deleteDiagnosis?id=${deleteDiagnosis.id}`, {
                    method: 'GET',
                });

                if (response.ok) {
                    // Обновляем состояние диагнозов без перезагрузки страницы
                    setDiagnoses(prevDiagnoses =>
                        prevDiagnoses.filter(diagnosis => diagnosis.id !== deleteDiagnosis.id)
                    );
                    setShowDeletePopup(false);
                } else {
                    console.error("Ошибка при удалении диагноза:", response.statusText);
                }
            } catch (error) {
                console.error("Ошибка при удалении диагноза:", error);
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

    const handleSortByCode = () => {
        if (sortField === 'code') {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField('code');
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

    const sortedDiagnoses = [...diagnoses].sort((a, b) => {
        if (sortField === 'name') {
            return sortOrder === 'asc'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        } else if (sortField === 'code') {
            return sortOrder === 'asc'
                ? a.code.localeCompare(b.code)
                : b.code.localeCompare(a.code);
        } else if (sortField === 'visitsCount') {
            return sortOrder === 'asc'
                ? a.visitsCount - b.visitsCount
                : b.visitsCount - a.visitsCount;
        }
        return 0;
    });

    const handleApplyFilter = () => {
        const value = parseInt(filterValue, 10);
        let filteredDiagnoses = originalDiagnoses;

        if (!isNaN(value)) {
            filteredDiagnoses = filteredDiagnoses.filter(diagnosis => {
                if (filterCondition === 'greater') {
                    return diagnosis.visitsCount > value;
                } else if (filterCondition === 'less') {
                    return diagnosis.visitsCount < value;
                } else if (filterCondition === 'equal') {
                    return diagnosis.visitsCount === value;
                }
                return true;
            });
        }

        // Фильтрация по коду
        if (codeFilterText) {
            const lowerCasedCodeFilter = codeFilterText.toLowerCase();
            filteredDiagnoses = filteredDiagnoses.filter(diagnosis =>
                diagnosis.code.toLowerCase().includes(lowerCasedCodeFilter)
            );
        }

        setDiagnoses(filteredDiagnoses);
    };

    const handleClearFilter = () => {
        setFilterValue('');
        setCodeFilterText('');
        setFilterCondition('greater');
        setDiagnoses(originalDiagnoses);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [diagnosesPerPage] = useState(10);

    const indexOfLastDiagnosis = currentPage * diagnosesPerPage;
    const indexOfFirstDiagnosis = indexOfLastDiagnosis - diagnosesPerPage;
    const currentDiagnoses = sortedDiagnoses.slice(indexOfFirstDiagnosis, indexOfLastDiagnosis);

    const totalPages = Math.ceil(sortedDiagnoses.length / diagnosesPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (loading) {
        (
            <div className='wrapper-diagnosis'>
                <div className='sidebar'>
                    <div className='header-sidebar'>Специализации</div>
                    <div className='diagnosis-components'>
                        {allSpecializations ? (
                            allSpecializations.map((spec, index) => (
                                <Link
                                    to={`/admin/specialization/${spec.code}/`}
                                    state={{ specialization: spec, allSpecializations, currentSpecializationName }}
                                    className={`diagnosis-item ${currentSpecializationCode == spec.code ? 'active' : ''}`}
                                    key={index}
                                >
                                    {spec.name}
                                </Link>
                            ))
                        ) : (
                            <div>Специализации не найдены</div>
                        )}
                    </div>
                </div>
                <div className='main-content'>
                    <div className='header-1'>
                        <div className='header-block'>
                            <HeaderAdmin />
                            <div className='count-wrapper'>
                                <div className='count-block'>
                                    Количество посещений: {specialization?.visitsCount}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-container">
                        <div className='SearchItem'>
                            <div className="search_bar_container">
                                <div className="search_bar_wrapper">
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


                                    {searchText && (
                                        <div className="search_results">
                                            {filteredDiagnoses.length > 0 ? (
                                                filteredDiagnoses.map((diagnosis, index) => (
                                                    <Link
                                                        key={index}
                                                        className="search_result_item"
                                                        to={`/admin/specialization/${specialization.name}/diagnos/${diagnosis.id}/`}
                                                        state={{ diagnosisId: diagnosis.id, diagnosis, iddig: diagnosis.id, allSpecializations, specialization, current: specialization.name }}
                                                    >
                                                        <span className="diagnosis_code">{diagnosis.code}</span>
                                                        <span className="diagnosis_name">{diagnosis.name}</span>
                                                    </Link>
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
                                        placeholder="Введите значение по посещениям"
                                    />
                                </div>
                                <input
                                    className='input-filter'
                                    type="text"
                                    value={codeFilterText}
                                    onChange={(e) => setCodeFilterText(e.target.value)}
                                    placeholder="Введите код для фильтрации"
                                />
                                <button className='filter-result' onClick={handleApplyFilter}>Отфильтровать</button>
                                <button className='filter-out' onClick={handleClearFilter}>Убрать фильтрацию</button>
                            </div>
                        )}
                        <div className='add-spec-block'>
                            <div className='add-spec' onClick={() => setShowPopup(true)}>
                                <img src={PlusIconImg} alt="" />
                                Добавление диагноза
                            </div>
                        </div>
                        <div className='Plates'>
                            <div className='plates_wrapper'>
                                <div className='head_diagnosis_plate_second'>
                                    <div className='text-sort'>
                                        <div className='head_code_diagnosis_plate'>
                                            Код
                                        </div>
                                        <div className='check-icons' onClick={() => handleSortByCode()}>
                                            <img src={CheckTopIconImg} alt="" className="top-icon" />
                                            <img src={CheckTopIconImg} alt="" className="bottom-icon" />
                                            Web Server's Default Page
                                            diagnosis.name
                                            02:38


                                        </div>
                                    </div>
                                    <div className='text-sort'>
                                        <div className='head_name_diagnosis_plate'>
                                            Название
                                        </div>
                                        <div className='check-icons' onClick={() => handleSortByName()}>
                                            <img src={CheckTopIconImg} alt="" className="top-icon" />
                                            <img src={CheckTopIconImg} alt="" className="bottom-icon" />
                                        </div>
                                    </div>
                                    <div className='text-sort'>
                                        <div className='head_count_diagnosis_plate'>
                                            Количество посещений
                                        </div>
                                        <div className='check-icons' onClick={() => handleSortByVisits()}>
                                            <img src={CheckTopIconImg} alt="" className="top-icon" />
                                            <img src={CheckTopIconImg} alt="" className="bottom-icon" />
                                        </div>
                                    </div>
                                    <div className='text-sort'>

                                    </div>
                                    <div className='for-head'></div>
                                </div>
                                <div>Загрузка...</div>
                            </div>
                            <div className="pagination">
                                {/* <div>Страница {currentPage} из {totalPages}</div> */}
                                <button className='button-pagination' onClick={handlePreviousPage} disabled={currentPage === 1}>
                                    Предыдущая
                                </button>
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index + 1}
                                        onClick={() => setCurrentPage(index + 1)}
                                        className={currentPage === index + 1 ? 'active' : ''}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                <button className='button-pagination' onClick={handleNextPage} disabled={currentPage === totalPages}>
                                    Следующая
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        );
    }

    // console.log(diagnoses, '12313');

    return (
        <div className='wrapper-diagnosis'>
            <div className='sidebar'>
                <div className='header-sidebar'>Специализации</div>
                <div className='diagnosis-components'>
                    {allSpecializations ? (
                        allSpecializations.map((spec, index) => (
                            <Link
                                to={`/admin/specialization/${spec.code}/`}
                                state={{ specialization: spec, allSpecializations, currentSpecializationName }}
                                className={`diagnosis-item ${currentSpecializationCode === spec.code ? 'active' : ''}`}
                                key={index}
                            >
                                {spec.name}
                            </Link>
                        ))
                    ) : (
                        <div>Специализации не найдены</div>
                    )}
                </div>
            </div>
            <div className='main-content'>
                <div className='header-1'>
                    <div className='header-block'>
                        <HeaderAdmin />
                        <div className='count-wrapper'>
                            <div className='count-block'>
                                Количество посещений: {specialization?.visitsCount}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-container">
                    <div className='SearchItem'>
                        <div className="search_bar_container">
                            <div className="search_bar_wrapper">
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


                                {searchText && (
                                    <div className="search_results">
                                        {filteredDiagnoses.length > 0 ? (
                                            filteredDiagnoses.map((diagnosis, index) => (
                                                <Link
                                                    key={index}
                                                    className="search_result_item"
                                                    to={`/admin/specialization/${params.code}/diagnos/${diagnosis.id}/`}
                                                    state={{ diagnosisId: diagnosis.id, diagnosis, iddig: diagnosis.id, allSpecializations, specialization, current: specialization.code }}
                                                >
                                                    <span className="diagnosis_code">{diagnosis.code}</span>
                                                    <span className="diagnosis_name">{diagnosis.name}</span>
                                                </Link>
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
                                    placeholder="Введите значение по посещениям"
                                />
                            </div>
                            <input
                                className='input-filter'
                                type="text"
                                value={codeFilterText}
                                onChange={(e) => setCodeFilterText(e.target.value)}
                                placeholder="Введите код для фильтрации"
                            />
                            <button className='filter-result' onClick={handleApplyFilter}>Отфильтровать</button>
                            <button className='filter-out' onClick={handleClearFilter}>Убрать фильтрацию</button>
                        </div>
                    )}
                    <div className='add-spec-block'>
                        <div className='add-spec' onClick={() => setShowPopup(true)}>
                            <img src={PlusIconImg} alt="" />
                            Добавление диагноза
                        </div>
                    </div>
                    <div className='Plates'>
                        <div className='plates_wrapper'>
                            <div className='head_diagnosis_plate_second'>
                                <div className='special-text-sort'>
                                    <div className='text-sort-second'>
                                        <div className='head_code_diagnosis_plate'>
                                            Код
                                        </div>
                                        <div className='check-icons' onClick={() => handleSortByCode()}>
                                            <img src={CheckTopIconImg} alt="" className="top-icon" />
                                            <img src={CheckTopIconImg} alt="" className="bottom-icon" />
                                        </div>
                                    </div>
                                    <div className='text-sort-second'>
                                        <div className='head_name_diagnosis_plate'>
                                            Название
                                        </div>
                                        <div className='check-icons' onClick={() => handleSortByName()}>
                                            <img src={CheckTopIconImg} alt="" className="top-icon" />
                                            <img src={CheckTopIconImg} alt="" className="bottom-icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-sort-second'>
                                    <div className='head_count_diagnosis_plate'>
                                        Количество посещений
                                    </div>
                                    <div className='check-icons' onClick={() => handleSortByVisits()}>
                                        <img src={CheckTopIconImg} alt="" className="top-icon" />
                                        <img src={CheckTopIconImg} alt="" className="bottom-icon" />
                                    </div>
                                </div>
                                <div className='for-head'></div>
                            </div>
                            {currentDiagnoses.map((diagnosis, index) => (
                                <div className='diagnosis_plate' key={index}>
                                    <Link
                                        className='link-plate'
                                        to={`/admin/specialization/${params.code}/diagnos/${diagnosis.id}`}
                                        // state={{ diagnosis, allSpecializations: [], specialization }}
                                        state={{ diagnosisId: diagnosis.id, diagnosis, iddig: diagnosis.id, allSpecializations, specialization, current: specialization.name }}

                                    >
                                        <div className='force_diagnosis_plate'></div>
                                        <div className='code_diagnosis_plate'>{diagnosis.code}</div>
                                        <div className='name_diagnosis_plate'>{diagnosis.name}</div>
                                        <div className='count_diagnosis_plate'>Количество посещений: {diagnosis?.visitsCount}</div>
                                    </Link>
                                    <div className='buttons-plate'>
                                        <div className='button-change' onClick={() => handleEditClick(diagnosis)}>Изменить</div>
                                        <div className='button-delete' onClick={() => handleDeleteClick(diagnosis)}>Удалить</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pagination">
                            {/* <div>Страница {currentPage} из {totalPages}</div> */}
                            <button className='button-pagination' onClick={handlePreviousPage} disabled={currentPage === 1}>
                                Предыдущая
                            </button>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={currentPage === index + 1 ? 'active' : ''}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button className='button-pagination' onClick={handleNextPage} disabled={currentPage === totalPages}>
                                Следующая
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Добавить диагноз</h2>
                        <input
                            type="text"
                            value={newDiagnosis.name}
                            onChange={(e) => setNewDiagnosis({ ...newDiagnosis, name: e.target.value })}
                            placeholder="Название диагноза"
                        />
                        <input
                            type="text"
                            value={newDiagnosis.code}
                            onChange={(e) => setNewDiagnosis({ ...newDiagnosis, code: e.target.value })}
                            placeholder="Код диагноза"
                        />
                        <div className="popup-buttons">
                            <button className='popup-button-add' onClick={handleAddDiagnosis}>Добавить</button>
                            <button className='popup-button-close' onClick={() => setShowPopup(false)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
            {showEditPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Изменить диагноз</h2>
                        <input
                            type="text"
                            value={editDiagnosis.name}
                            onChange={(e) => setEditDiagnosis({ ...editDiagnosis, name: e.target.value })}
                            placeholder="Название диагноза"
                        />
                        <input
                            type="text"
                            value={editDiagnosis.code}
                            onChange={(e) => setEditDiagnosis({ ...editDiagnosis, code: e.target.value })}
                            placeholder="Код диагноза"
                        />
                        <div className="popup-buttons">
                            <button className='popup-button-add' onClick={handleUpdateDiagnosis}>Сохранить</button>
                            <button className='popup-button-close' onClick={() => setShowEditPopup(false)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
            {showDeletePopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Вы уверены, что хотите удалить диагноз?</h2>
                        <div className="popup-buttons">
                            <button className='popup-button-delete' onClick={handleDeleteDiagnosis}>Удалить</button>
                            <button className='popup-button-close' onClick={() => setShowDeletePopup(false)}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default DiagnosisPageAdmin;