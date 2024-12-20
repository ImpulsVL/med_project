import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import PavlovPng from '../header/icon/pavlov3.png'
import './header.scss';

function Header() {
    const [showCalculators, setShowCalculators] = useState(false);
    const [showScales, setShowScales] = useState(false);
    const [showForms, setShowForms] = useState(false);
    const [showTables, setShowTables] = useState(false);

    const headerRef = useRef(null); // Реф для всего хедера

    // Функция для скрытия выпадающих списков
    const hideDropdowns = () => {
        setShowCalculators(false);
        setShowScales(false);
        setShowForms(false);
        setShowTables(false);
    };

    // Функция для переключения видимости меню калькуляторов
    const toggleCalculators = () => {
        setShowCalculators((prev) => !prev);
        setShowScales(false); // Скрываем шкалы при нажатии на калькуляторы
        setShowForms(false); // Скрываем анкеты при нажатии на калькуляторы
        setShowTables(false); // Скрываем таблицы при нажатии на калькуляторы

    };

    // Функция для переключения видимости меню шкал
    const toggleScales = () => {
        setShowScales((prev) => !prev);
        setShowCalculators(false); // Скрываем калькуляторы при нажатии на шкалы
        setShowForms(false); // Скрываем анкеты при нажатии на калькуляторы
        setShowTables(false); // Скрываем таблицы при нажатии на калькуляторы
    };

    // Функция для переключения видимости меню анкет
    const toggleForms = () => {
        setShowForms((prev) => !prev);
        setShowCalculators(false); // Скрываем калькуляторы при нажатии на шкалы
        setShowScales(false); // Скрываем шкалы при нажатии на калькуляторы
        setShowTables(false); // Скрываем таблицы при нажатии на калькуляторы
    };

    // Функция для переключения видимости меню таблиц
    const toggleTables = () => {
        setShowTables((prev) => !prev);
        setShowCalculators(false); // Скрываем калькуляторы при нажатии на шкалы
        setShowForms(false); // Скрываем анкеты при нажатии на калькуляторы
        setShowScales(false); // Скрываем шкалы при нажатии на калькуляторы
    };

    // Обработчик кликов вне элемента
    const handleClickOutside = (event) => {
        if (headerRef.current && !headerRef.current.contains(event.target)) {
            hideDropdowns(); // Скрываем оба меню
        }
    };

    // Добавляем обработчик кликов при монтировании и удаляем при размонтировании
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='header' ref={headerRef}>
            <Link className='header_href' to="/">
                <img className="img_pavlov" src={PavlovPng}></img>
                <h1 className="assistant_header">ПАВЛОВ медикаль</h1>
            </Link>
            <div className="menu_section">
                <h2 className='calculators' onClick={toggleCalculators}>Калькуляторы</h2>
                {showCalculators && (
                    <ul className="dropdown">
                        <li><Link target="_blank" to="/isa-calc">Калькулятор ИСА</Link></li>
                        <li><Link target="_blank" to="/imt-calc">Калькулятор ИМТ</Link></li>
                        <li><Link target="_blank" to="/roma-calc">Калькулятор индекса ROMA</Link></li>
                        <li><Link target="_blank" to="/rmi-calc">Калькулятор индекса RMI I</Link></li>
                        <li><Link target="_blank" to="/intensive-calc">Оценка ИМК</Link></li>
                    </ul>
                )}
            </div>
            <div className="menu_section">
                <h2 className='scales' onClick={toggleScales}>Шкалы</h2>
                {showScales && (
                    <ul className="dropdown">
                        <li><Link target="_blank" to="/gallay-scale">Шкала Ферримана-Галлвея</Link></li>
                        <li><Link target="_blank" to="/hurt-scale">Шкала оценки боли</Link></li>
                        <li><Link target="_blank" to="/ludwig-scale">Шкала Людвига</Link></li>
                        <li><Link target="_blank" to="/baden-scale">POP-Q и Baden-Walker</Link></li>
                        <li><Link target="_blank" to="/musa-scale">Ультразвуковые признаки аденомиоза, MUSA 2022</Link></li>
                        <li><Link target="_blank" to="/figo-scale">Миома матки: классификация FIGO</Link></li>
                        <li><Link target="_blank" to="/tanner-scale">Оценка развития молочных желез</Link></li>
                    </ul>
                )}
            </div>
            <div className="menu_section">
                <h2 className='scales' onClick={toggleForms}>Анкеты</h2>
                {showForms && (
                    <ul className="dropdown">
                        <li><Link target="_blank" to="/vteo-form">Оценка риска ВТЭО во время беременности и после родов</Link></li>
                        <li><Link target="_blank" to="/preeclampsia-form">Определение группы риска развития преэклампсии</Link></li>
                        <li><Link target="_blank" to="/edinburg-form">Эдинбургская шкала послеродовой депрессии</Link></li>
                        <li><Link target="_blank" to="/checklist-form">Чек-лист перед назначением комбинированных гормональных контрацептивов</Link></li>
                        <li><Link target="_blank" to="/oral-form">Чек-лист перед назначением чисто прогестиновых оральных контрацептивов</Link></li>
                        <li><Link target="_blank" to="/metal-form">Чек-лист перед установкой металлсодержащего ВМК</Link></li>
                        <li><Link target="_blank" to="/lng-form">Чек-лист перед установкой ЛНГ-ВМС</Link></li>
                        <li><Link target="_blank" to="/implant-form">Чек-лист перед установкой чисто прогестинового контрацептивного имплантата</Link></li>
                        <li><Link target="_blank" to="/injection-form">Чек-лист перед использованием прогестиновых инъекционных контрацептивов</Link></li>
                        <li><Link target="_blank" to="/prolaps-form">Анкета для пациенток с пролапсом</Link></li>
                        <li><Link target="_blank" to="/diagnostics-form">Диагностика ОМК</Link></li>
                        <li><Link target="_blank" to="/pmdr-form">Определение диагноза "ПМДР"</Link></li>
                        <li><Link target="_blank" to="/migrain-form">Экспресс-диагностика мигренозной головной боли</Link></li>
                        <li><Link target="_blank" to="/krisp-form">Критерии преждевременного семяизвержения (КРИПС)</Link></li>
                        <li><Link target="_blank" to="/pedt-form">Опросник по диагностике преждевременной эякуляции (PEDT)</Link></li>
                        <li><Link target="_blank" to="/ams-form">Опрос по симптомам старения у мужчин (AMS)</Link></li>
                        <li><Link target="_blank" to="/mief-form">Опрос по диагностике эректильной дисфункции (МИЭФ-5)</Link></li>
                    </ul>
                )}
            </div>

            <div className="menu_section">
                <h2 className='tables' onClick={toggleTables}>Таблицы</h2>
                {showTables && (
                    <ul className="dropdown">
                        <li><Link target="_blank" to="/contracepts-table">Таблица контрацептивов</Link></li>
                        <li><Link target="_blank" to="/vteo-table">Профилактика ВТЭО при наличии тромбофилии и/или ВТЭО во время беременности и после родов</Link></li>
                        <li><Link target="_blank" to="/nmg-table">Дозы НМГ для профилактики ВТЭО во время беременности и после родов</Link></li>
                        <li><Link target="_blank" to="/holestaz-table">Дифференциальная диагностика внутрипеченочного холестаза беременных</Link></li>
                        <li><Link target="_blank" to="/coloscopy-table">Международная классификация кольпоскопических терминов</Link></li>
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Header;