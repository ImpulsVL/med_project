import React, { useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './DiagnosPageAdmin.scss';
import './DiagnosPageAdminWriteBox.scss'
import { ReactComponent as PlusIcon } from '../diagnosisPageAdmin/icons/plus.svg';
import { ReactComponent as PlusIconGreen } from './icons/plus.svg';
import HeaderAdmin from '../headerAdmin/HeaderAdmin';
import CountBlock from '../countBlock/CountBlock';
import SideBar from '../sidebar/SideBar';

import { ReactComponent as IconBack } from './icons/Back.svg';
import { ReactComponent as IconOpenRadio } from './icons/OpenRadio.svg';
import { ReactComponent as IconBold } from './icons/Bold.svg';
import { ReactComponent as IconStroke } from './icons/Stroke.svg';
import { ReactComponent as IconLink } from './icons/Link.svg';
import { ReactComponent as IconDot } from './icons/Dot.svg';
import { ReactComponent as IconNumber } from './icons/Number.svg';
import { ReactComponent as IconNextOption } from './icons/NextOption.svg';
import { ReactComponent as IconBackOption } from './icons/BackOption.svg';
import { ReactComponent as CopyIcon } from './icons/Copy.svg';
import { ReactComponent as PrinterIcon } from './icons/Printer.svg';

import PlusIconImg from '../diagnosisPageAdmin/icons/plus.svg';
import PlusIconGreenImg from './icons/plus.svg';

function DiagnosPageAdmin() {

    const [activeTab, setActiveTab] = useState('inspection'); // 'inspection' или 'comments'

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const [activeTab2, setActiveTab2] = useState('inspection'); // 'inspection' или 'comments'

    const handleTabChange2 = (tab) => {
        setActiveTab2(tab);
    };

    const [activeTab3, setActiveTab3] = useState('inspection'); // 'inspection' или 'comments'

    const handleTabChange3 = (tab) => {
        setActiveTab3(tab);
    };


    // const location = useLocation();
    // const inspectionList = location.state?.inspectionList || [];
    // const medicalTreatmentList = location.state?.medicalTreatmentList || [];
    // const recomendList = location.state?.recomendList || [];

    // const sectionCode = location.state.sectionCode;

    const textRef = useRef(null); // Референс на блок с текстом
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isDot, setIsDot] = useState(false);
    const [isNumber, setIsNumber] = useState(false);

    const [selectedFormat, setSelectedFormat] = useState('Choose heading');

    // Handler for applying styles
    const applyFormat = (format) => {
        setSelectedFormat(format);
        if (format === 'Heading') {
            document.execCommand('formatBlock', false, 'h1');
        } else if (format === 'Subheading') {
            document.execCommand('formatBlock', false, 'h2');
        } else if (format === 'Comment') {
            document.execCommand('fontSize', false, 'small');
            document.execCommand('foreColor', false, 'gray');
        } else if (format === 'Text') {
            ;
            document.execCommand('foreColor', false, 'black');
        } else {
            document.execCommand('formatBlock', false, 'span');
        }
    };

    // Function to handle Enter or line breaks, resetting to normal text
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const selection = window.getSelection();
            const parentElement = selection.anchorNode.parentElement;

            // Если текущий блок — это заголовок, то добавляем новый абзац
            if (parentElement.tagName === 'H1' || parentElement.tagName === 'H2') {
                e.preventDefault(); // Останавливаем стандартное поведение Enter
                document.execCommand('formatBlock', false, 'p'); // Создаем новый абзац
                setSelectedFormat('Text'); // Сбрасываем формат на текст
            }
        }
    };

    // Функция для копирования текста
    const handleCopyText = () => {
        const text = textRef.current.innerText; // Получаем текст из блока
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                alert('Текст скопирован!');
            }).catch((err) => {
                console.error('Ошибка копирования текста: ', err);
            });
        } else {
            // Для старых браузеров
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('Текст скопирован!');
        }
    };

    const toggleBold = () => {
        document.execCommand('bold'); // Применяем жирный текст к выделенному
        setIsBold(!isBold); // Переключаем состояние кнопки
    };

    const toggleItalic = () => {
        document.execCommand('italic'); // Применяем курсив к выделенному
        setIsItalic(!isItalic); // Переключаем состояние кнопки
    };

    // Логика для отмены действия (Ctrl + Z)
    const handleUndo = () => {
        document.execCommand('undo');
    };

    // Логика для повторения действия (Ctrl + Y)
    const handleRedo = () => {
        document.execCommand('redo');
    };

    const insertUnorderedList = () => {
        document.execCommand('insertUnorderedList');
        setIsDot(!isDot);
    };

    // Логика для создания нумерованного списка
    const insertOrderedList = () => {
        document.execCommand('insertOrderedList');
        setIsNumber(!isNumber);
    };

    // Функция для печати текста
    const handlePrintText = () => {
        const printContent = textRef.current.innerHTML; // Получаем HTML из блока
        const newWindow = window.open('', '', 'height=500, width=800');
        newWindow.document.write('<html><head><title></title>');
        newWindow.document.write('</head><body>');
        newWindow.document.write(printContent); // Вставляем контент
        newWindow.document.write('</body></html>');
        newWindow.document.close(); // Закрываем документ для завершения загрузки
        newWindow.focus(); // Фокусируем окно
        newWindow.print(); // Запускаем печать
        newWindow.close(); // Закрываем окно после печати
    };

    return (
        <div className='wrapper-diagnos'>
            <div className='sidebar'>
                <div className='header-sidebar'>Специализации</div>
                <div className='diagnosis-components'>
                    <div className='diagnosis-item'>
                        Андрология
                    </div>
                    <div className='diagnosis-item'>
                        Андрология
                    </div>
                    <div className='diagnosis-item'>
                        Андрология
                    </div>
                    <div className='diagnosis-item'>
                        Андрология
                    </div>
                    <div className='diagnosis-item'>
                        Андрология
                    </div>
                    <div className='diagnosis-item'>
                        Андрология
                    </div>
                    <div className='diagnosis-item'>
                        Андрология
                    </div>
                    <div className='diagnosis-item'>
                        Андрология
                    </div>
                </div>
            </div>
            <div className='main-content'>
                <div className='header-1'>
                    <div className='header-block'>
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
                        <div className='count-wrapper'>
                            <div className='count-block'>
                                Количество посещений: 1
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-container-diagnos">
                    <div className='description-wrapper'>
                        <div className='description-block'>
                            <div className='description-spec'>
                                <div className='description-text'>Специализации:</div>
                                <div className='spec-items'>
                                    <div className='spec-item'>
                                        Андрология
                                    </div>
                                    <div className='spec-item'>
                                        Гинекология
                                    </div>
                                </div>
                                <div className='change-button'>Изменить</div>
                            </div>
                            <div className='description-code'>
                                <div className='description-text'>Код диагноза:</div>
                                <div className='code-item'>
                                    МКБ 10
                                </div>
                                <div className='change-button'>Изменить</div>
                            </div>
                            <div className='description-name'>
                                <div className='description-text'>Название диагноза:</div>
                                <div className='name-item'>
                                    Туберкулез
                                </div>
                                <div className='change-button'>Изменить</div>
                            </div>
                            <div className='description-sort'>
                                <div className='description-text'>Расположение диагноза:</div>
                                <div className='sort-item'>
                                    10
                                </div>
                                <div className='change-button'>Изменить</div>
                            </div>
                        </div>
                        <div className='save-button-block'>
                            <div className='save-button'>
                                Сохранить изменения
                            </div>
                        </div>
                    </div>
                    <div className='diagnos-plates-admin'>
                        <div className='inspection-plate-admin'>
                            <div className='inspection-headers-admin'>
                                <div
                                    className={`main-header-admin ${activeTab === 'inspection' ? 'headCheck' : ''}`}
                                    onClick={() => handleTabChange('inspection')}
                                >
                                    Обследования
                                </div>
                                <div
                                    className={`comment-header-admin ${activeTab === 'comments' ? 'headCheck' : ''}`}
                                    onClick={() => handleTabChange('comments')}
                                >
                                    Комментарии к обследованиям
                                </div>
                            </div>
                            <div className='inspection-body-admin' style={{ display: activeTab === 'inspection' ? 'block' : 'none' }}>
                                <div className='save-button'>
                                    <img src={PlusIconImg} alt="" />
                                    Добавление обследования
                                </div>
                                <div className='inspection-admin-items'>
                                    <div className='inspection-admin-item'>
                                        <div className='inspection-admin-block'>
                                            <div className='inspection-head-text-admin'>
                                                Анализ крови(натощак)
                                                <div className='inspection-comment-text-admin'>
                                                    Описание анализ крови
                                                </div>
                                            </div>
                                            <div className='inspection-components-text-admin'>
                                                <div className='inspection-component-text-admin'>
                                                    Анализ крови
                                                    <div className='inspection-components-comment-text-admin'>
                                                        Типа коммент
                                                    </div>
                                                </div>
                                                <div className='inspection-component-text-admin'>
                                                    Анализ крови
                                                    <div className='inspection-components-comment-text-admin'>
                                                        Типа коммент
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='create-component-button'>
                                                <img src={PlusIconGreenImg} alt="" />
                                                Добавление компонента
                                            </div>
                                        </div>
                                        <div className='crud-admin-buttons'>
                                            <div className='admin-change-button'>
                                                Изменить
                                            </div>
                                            <div className='admin-delete-button'>
                                                Удалить
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='inspection-body-admin-comments' style={{ display: activeTab === 'comments' ? 'flex' : 'none' }}>
                                <div className='recomend-block-section'>
                                    <div className='recomend-text-head'>
                                        Рекомендовано
                                    </div>
                                    <div className='write_option'>
                                        <div className='option_wrapper'>
                                            <div className='option_panel'>
                                                <div className='button_comments'>
                                                    <button className='button_comments_force'>
                                                        <div className='button_comments_options'>
                                                            <select
                                                                className="custom-select"
                                                                value={selectedFormat}
                                                                onChange={(e) => applyFormat(e.target.value)}
                                                            >
                                                                <option value="Choose heading">Choose heading</option>
                                                                <option value="Heading">Заголовок</option>
                                                                <option value="Subheading">Подзаголовок</option>
                                                                <option value="Text">Текст</option>
                                                                <option value="Comment">Комментарий</option>
                                                            </select>
                                                        </div>
                                                    </button>
                                                </div>
                                                <button
                                                    className={`option_bold ${isBold ? 'active' : ''}`}
                                                    onClick={toggleBold}
                                                >
                                                    <IconBold />
                                                </button>
                                                <button
                                                    className={`option_stroke ${isItalic ? 'active' : ''}`}
                                                    onClick={toggleItalic}
                                                >
                                                    <IconStroke />
                                                </button>
                                                {/* <button className='option_link'>
                                                                        <IconLink />
                                                                    </button> */}
                                                <button className={`option_dot ${isDot ? 'active' : ''}`} onClick={insertUnorderedList}>
                                                    <IconDot />
                                                </button>
                                                <button className={`option_number ${isNumber ? 'active' : ''}`} onClick={insertOrderedList}>
                                                    <IconNumber />
                                                </button>
                                                <button
                                                    className='option_back'
                                                    onClick={handleUndo} // Логика Ctrl + Z
                                                >
                                                    <IconBackOption />
                                                </button>
                                                <button
                                                    className='option_next'
                                                    onClick={handleRedo} // Логика Ctrl + Y
                                                >
                                                    <IconNextOption />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='write_wrapper'>
                                            <div
                                                className='write_wrapper_box'
                                                contentEditable="true"
                                                ref={textRef} // Присваиваем референс блоку с текстом
                                                onKeyDown={handleKeyDown}
                                            >
                                                {/* {inspectionList.length > 0 &&
                                                <ul>
                                                    <h2>Обследования</h2>
                                                    {inspectionList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            <p className='strong_box'>{item.comment}</p>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <React.Fragment key={i}>
                                                                            <li key={`${i}-name`}>{child.name}</li>
                                                                            <lo className="lo_box" key={`${i}-comment`}>{child.comment}</lo>
                                                                        </React.Fragment>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                            {medicalTreatmentList.length > 0 &&
                                                <ul>
                                                    <h2 className='med_box'>Медикаментозное лечение</h2>
                                                    {medicalTreatmentList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            <p className='strong_box'>{item.comment}</p>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <React.Fragment key={i}>
                                                                            <li key={`${i}-name`}>{child.name}</li>
                                                                            <lo className="lo_box" key={`${i}-comment`}>{child.comment}</lo>
                                                                        </React.Fragment>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                            {recomendList.length > 0 &&
                                                <ul>
                                                    <h2 className='med_box'>Рекомендации</h2>
                                                    {recomendList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <lo className="lo_box" key={i}>{child.name}{child.comment}</lo>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            } */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-under-box'>
                                        <div className='list-pdf'>
                                            <div className='item-pdf'>
                                                Гистолог
                                            </div>
                                            <div className='item-pdf'>
                                                PDF
                                            </div>
                                        </div>
                                        <div className='buttons-under-box'>
                                            <div className='add-pdf'>
                                                Добавить PDF
                                            </div>
                                            <div className='button-save-pdf'>
                                                Сохранить
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='non-recomend-block-section'>
                                    <div className='recomend-text-head'>
                                        Не рекомендовано
                                    </div>
                                    <div className='write_option'>
                                        <div className='option_wrapper'>
                                            <div className='option_panel'>
                                                <div className='button_comments'>
                                                    <button className='button_comments_force'>
                                                        <div className='button_comments_options'>
                                                            <select
                                                                className="custom-select"
                                                                value={selectedFormat}
                                                                onChange={(e) => applyFormat(e.target.value)}
                                                            >
                                                                <option value="Choose heading">Choose heading</option>
                                                                <option value="Heading">Заголовок</option>
                                                                <option value="Subheading">Подзаголовок</option>
                                                                <option value="Text">Текст</option>
                                                                <option value="Comment">Комментарий</option>
                                                            </select>
                                                        </div>
                                                    </button>
                                                </div>
                                                <button
                                                    className={`option_bold ${isBold ? 'active' : ''}`}
                                                    onClick={toggleBold}
                                                >
                                                    <IconBold />
                                                </button>
                                                <button
                                                    className={`option_stroke ${isItalic ? 'active' : ''}`}
                                                    onClick={toggleItalic}
                                                >
                                                    <IconStroke />
                                                </button>
                                                {/* <button className='option_link'>
                                                                        <IconLink />
                                                                    </button> */}
                                                <button className={`option_dot ${isDot ? 'active' : ''}`} onClick={insertUnorderedList}>
                                                    <IconDot />
                                                </button>
                                                <button className={`option_number ${isNumber ? 'active' : ''}`} onClick={insertOrderedList}>
                                                    <IconNumber />
                                                </button>
                                                <button
                                                    className='option_back'
                                                    onClick={handleUndo} // Логика Ctrl + Z
                                                >
                                                    <IconBackOption />
                                                </button>
                                                <button
                                                    className='option_next'
                                                    onClick={handleRedo} // Логика Ctrl + Y
                                                >
                                                    <IconNextOption />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='write_wrapper'>
                                            <div
                                                className='write_wrapper_box'
                                                contentEditable="true"
                                                ref={textRef} // Присваиваем референс блоку с текстом
                                                onKeyDown={handleKeyDown}
                                            >
                                                {/* {inspectionList.length > 0 &&
                                                <ul>
                                                    <h2>Обследования</h2>
                                                    {inspectionList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            <p className='strong_box'>{item.comment}</p>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <React.Fragment key={i}>
                                                                            <li key={`${i}-name`}>{child.name}</li>
                                                                            <lo className="lo_box" key={`${i}-comment`}>{child.comment}</lo>
                                                                        </React.Fragment>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                            {medicalTreatmentList.length > 0 &&
                                                <ul>
                                                    <h2 className='med_box'>Медикаментозное лечение</h2>
                                                    {medicalTreatmentList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            <p className='strong_box'>{item.comment}</p>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <React.Fragment key={i}>
                                                                            <li key={`${i}-name`}>{child.name}</li>
                                                                            <lo className="lo_box" key={`${i}-comment`}>{child.comment}</lo>
                                                                        </React.Fragment>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                            {recomendList.length > 0 &&
                                                <ul>
                                                    <h2 className='med_box'>Рекомендации</h2>
                                                    {recomendList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <lo className="lo_box" key={i}>{child.name}{child.comment}</lo>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            } */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-under-box'>
                                        <div className='list-pdf'>
                                            <div className='item-pdf'>
                                                Гистолог
                                            </div>
                                            <div className='item-pdf'>
                                                PDF
                                            </div>
                                        </div>
                                        <div className='buttons-under-box'>
                                            <div className='add-pdf'>
                                                Добавить PDF
                                            </div>
                                            <div className='button-save-pdf'>
                                                Сохранить
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='medical_treatment-plate-admin'>
                            <div className='medical_treatment-headers-admin'>
                                <div
                                    className={`main-header-admin ${activeTab2 === 'inspection' ? 'headCheck' : ''}`}
                                    onClick={() => handleTabChange2('inspection')}
                                >
                                    Медикоментозное лечение
                                </div>
                                <div
                                    className={`comment-header-admin ${activeTab2 === 'comments' ? 'headCheck' : ''}`}
                                    onClick={() => handleTabChange2('comments')}
                                >
                                    Комментарии к Медикоментозному лечению
                                </div>
                            </div>
                            {/* <div className='medical_treatment-headers-admin'>
                                <div className='main-header-admin headCheck'>
                                    Медикоментозное лечение
                                </div>
                                <div className='comment-header-admin'>
                                    Комментарии к медикоментозному лечению
                                </div>
                            </div> */}
                            <div className='medical_treatment-body-admin' style={{ display: activeTab2 === 'inspection' ? 'block' : 'none' }}>
                                <div className='save-button spec-med-treat'>
                                    <img src={PlusIconImg} alt="" />
                                    Добавление медикоментозного лечения
                                </div>
                                <div className='medical_treatment-admin-items'>
                                    <div className='medical_treatment-admin-item'>
                                        <div className='medical_treatment-admin-block'>
                                            <div className='medical_treatment-head-text-admin'>
                                                Анализ крови(натощак)
                                                <div className='medical_treatment-comment-text-admin'>
                                                    Описание анализ крови
                                                </div>
                                            </div>
                                            <div className='medical_treatment-components-text-admin'>
                                                <div className='medical_treatment-component-text-admin'>
                                                    Анализ крови
                                                    <div className='medical_treatment-components-comment-text-admin'>
                                                        Типа коммент
                                                    </div>
                                                </div>
                                                <div className='medical_treatment-component-text-admin'>
                                                    Анализ крови
                                                    <div className='medical_treatment-components-comment-text-admin'>
                                                        Типа коммент
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='create-component-button'>
                                                <img src={PlusIconGreenImg} alt="" />
                                                Добавление компонента
                                            </div>
                                        </div>
                                        <div className='crud-admin-buttons'>
                                            <div className='admin-change-button'>
                                                Изменить
                                            </div>
                                            <div className='admin-delete-button'>
                                                Удалить
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='medical_treatment-body-admin-comments' style={{ display: activeTab2 === 'comments' ? 'flex' : 'none' }}>
                                <div className='recomend-block-section'>
                                    <div className='recomend-text-head'>
                                        Рекомендовано
                                    </div>
                                    <div className='write_option'>
                                        <div className='option_wrapper'>
                                            <div className='option_panel'>
                                                <div className='button_comments'>
                                                    <button className='button_comments_force'>
                                                        <div className='button_comments_options'>
                                                            <select
                                                                className="custom-select"
                                                                value={selectedFormat}
                                                                onChange={(e) => applyFormat(e.target.value)}
                                                            >
                                                                <option value="Choose heading">Choose heading</option>
                                                                <option value="Heading">Заголовок</option>
                                                                <option value="Subheading">Подзаголовок</option>
                                                                <option value="Text">Текст</option>
                                                                <option value="Comment">Комментарий</option>
                                                            </select>
                                                        </div>
                                                    </button>
                                                </div>
                                                <button
                                                    className={`option_bold ${isBold ? 'active' : ''}`}
                                                    onClick={toggleBold}
                                                >
                                                    <IconBold />
                                                </button>
                                                <button
                                                    className={`option_stroke ${isItalic ? 'active' : ''}`}
                                                    onClick={toggleItalic}
                                                >
                                                    <IconStroke />
                                                </button>
                                                {/* <button className='option_link'>
                                                                        <IconLink />
                                                                    </button> */}
                                                <button className={`option_dot ${isDot ? 'active' : ''}`} onClick={insertUnorderedList}>
                                                    <IconDot />
                                                </button>
                                                <button className={`option_number ${isNumber ? 'active' : ''}`} onClick={insertOrderedList}>
                                                    <IconNumber />
                                                </button>
                                                <button
                                                    className='option_back'
                                                    onClick={handleUndo} // Логика Ctrl + Z
                                                >
                                                    <IconBackOption />
                                                </button>
                                                <button
                                                    className='option_next'
                                                    onClick={handleRedo} // Логика Ctrl + Y
                                                >
                                                    <IconNextOption />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='write_wrapper'>
                                            <div
                                                className='write_wrapper_box'
                                                contentEditable="true"
                                                ref={textRef} // Присваиваем референс блоку с текстом
                                                onKeyDown={handleKeyDown}
                                            >
                                                {/* {inspectionList.length > 0 &&
                                                <ul>
                                                    <h2>Обследования</h2>
                                                    {inspectionList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            <p className='strong_box'>{item.comment}</p>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <React.Fragment key={i}>
                                                                            <li key={`${i}-name`}>{child.name}</li>
                                                                            <lo className="lo_box" key={`${i}-comment`}>{child.comment}</lo>
                                                                        </React.Fragment>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                            {medicalTreatmentList.length > 0 &&
                                                <ul>
                                                    <h2 className='med_box'>Медикаментозное лечение</h2>
                                                    {medicalTreatmentList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            <p className='strong_box'>{item.comment}</p>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <React.Fragment key={i}>
                                                                            <li key={`${i}-name`}>{child.name}</li>
                                                                            <lo className="lo_box" key={`${i}-comment`}>{child.comment}</lo>
                                                                        </React.Fragment>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                            {recomendList.length > 0 &&
                                                <ul>
                                                    <h2 className='med_box'>Рекомендации</h2>
                                                    {recomendList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <lo className="lo_box" key={i}>{child.name}{child.comment}</lo>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            } */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-under-box'>
                                        <div className='list-pdf'>
                                            <div className='item-pdf'>
                                                Гистолог
                                            </div>
                                            <div className='item-pdf'>
                                                PDF
                                            </div>
                                        </div>
                                        <div className='buttons-under-box'>
                                            <div className='add-pdf'>
                                                Добавить PDF
                                            </div>
                                            <div className='button-save-pdf'>
                                                Сохранить
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='non-recomend-block-section'>
                                    <div className='recomend-text-head'>
                                        Не рекомендовано
                                    </div>
                                    <div className='write_option'>
                                        <div className='option_wrapper'>
                                            <div className='option_panel'>
                                                <div className='button_comments'>
                                                    <button className='button_comments_force'>
                                                        <div className='button_comments_options'>
                                                            <select
                                                                className="custom-select"
                                                                value={selectedFormat}
                                                                onChange={(e) => applyFormat(e.target.value)}
                                                            >
                                                                <option value="Choose heading">Choose heading</option>
                                                                <option value="Heading">Заголовок</option>
                                                                <option value="Subheading">Подзаголовок</option>
                                                                <option value="Text">Текст</option>
                                                                <option value="Comment">Комментарий</option>
                                                            </select>
                                                        </div>
                                                    </button>
                                                </div>
                                                <button
                                                    className={`option_bold ${isBold ? 'active' : ''}`}
                                                    onClick={toggleBold}
                                                >
                                                    <IconBold />
                                                </button>
                                                <button
                                                    className={`option_stroke ${isItalic ? 'active' : ''}`}
                                                    onClick={toggleItalic}
                                                >
                                                    <IconStroke />
                                                </button>
                                                {/* <button className='option_link'>
                                                                        <IconLink />
                                                                    </button> */}
                                                <button className={`option_dot ${isDot ? 'active' : ''}`} onClick={insertUnorderedList}>
                                                    <IconDot />
                                                </button>
                                                <button className={`option_number ${isNumber ? 'active' : ''}`} onClick={insertOrderedList}>
                                                    <IconNumber />
                                                </button>
                                                <button
                                                    className='option_back'
                                                    onClick={handleUndo} // Логика Ctrl + Z
                                                >
                                                    <IconBackOption />
                                                </button>
                                                <button
                                                    className='option_next'
                                                    onClick={handleRedo} // Логика Ctrl + Y
                                                >
                                                    <IconNextOption />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='write_wrapper'>
                                            <div
                                                className='write_wrapper_box'
                                                contentEditable="true"
                                                ref={textRef} // Присваиваем референс блоку с текстом
                                                onKeyDown={handleKeyDown}
                                            >
                                                {/* {inspectionList.length > 0 &&
                                                <ul>
                                                    <h2>Обследования</h2>
                                                    {inspectionList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            <p className='strong_box'>{item.comment}</p>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <React.Fragment key={i}>
                                                                            <li key={`${i}-name`}>{child.name}</li>
                                                                            <lo className="lo_box" key={`${i}-comment`}>{child.comment}</lo>
                                                                        </React.Fragment>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                            {medicalTreatmentList.length > 0 &&
                                                <ul>
                                                    <h2 className='med_box'>Медикаментозное лечение</h2>
                                                    {medicalTreatmentList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            <p className='strong_box'>{item.comment}</p>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <React.Fragment key={i}>
                                                                            <li key={`${i}-name`}>{child.name}</li>
                                                                            <lo className="lo_box" key={`${i}-comment`}>{child.comment}</lo>
                                                                        </React.Fragment>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                            {recomendList.length > 0 &&
                                                <ul>
                                                    <h2 className='med_box'>Рекомендации</h2>
                                                    {recomendList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <lo className="lo_box" key={i}>{child.name}{child.comment}</lo>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            } */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-under-box'>
                                        <div className='list-pdf'>
                                            <div className='item-pdf'>
                                                Гистолог
                                            </div>
                                            <div className='item-pdf'>
                                                PDF
                                            </div>
                                        </div>
                                        <div className='buttons-under-box'>
                                            <div className='add-pdf'>
                                                Добавить PDF
                                            </div>
                                            <div className='button-save-pdf'>
                                                Сохранить
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='recomend-plate-admin'>
                            {/* <div className='recomend-headers-admin'>
                                <div className='main-header-admin headCheck'>
                                    Рекомендации
                                </div>
                                <div className='comment-header-admin'>
                                    Комментарии к рекомендациям
                                </div>
                            </div> */}
                            <div className='recomend-headers-admin'>
                                <div
                                    className={`main-header-admin ${activeTab3 === 'inspection' ? 'headCheck' : ''}`}
                                    onClick={() => handleTabChange3('inspection')}
                                >
                                    Рекомендации
                                </div>
                                <div
                                    className={`comment-header-admin ${activeTab3 === 'comments' ? 'headCheck' : ''}`}
                                    onClick={() => handleTabChange3('comments')}
                                >
                                    Комментарии к рекомендациям
                                </div>
                            </div>
                            <div className='recomend-body-admin' style={{ display: activeTab3 === 'inspection' ? 'block' : 'none' }}>
                                <div className='save-button'>
                                    <img src={PlusIconImg} alt="" />
                                    Добавление рекомендаций
                                </div>
                                <div className='recomend-admin-items'>
                                    <div className='recomend-admin-item'>
                                        <div className='recomend-admin-block'>
                                            <div className='recomend-head-text-admin'>
                                                Анализ крови(натощак)
                                                <div className='recomend-comment-text-admin'>
                                                    Описание анализ крови
                                                </div>
                                            </div>
                                            <div className='recomend-components-text-admin'>
                                                <div className='recomend-component-text-admin'>
                                                    Анализ крови
                                                    <div className='recomend-components-comment-text-admin'>
                                                        Типа коммент
                                                    </div>
                                                </div>
                                                <div className='recomend-component-text-admin'>
                                                    Анализ крови
                                                    <div className='recomend-components-comment-text-admin'>
                                                        Типа коммент
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='create-component-button'>
                                                <img src={PlusIconGreenImg} alt="" />
                                                Добавление компонента
                                            </div>
                                        </div>
                                        <div className='crud-admin-buttons'>
                                            <div className='admin-change-button'>
                                                Изменить
                                            </div>
                                            <div className='admin-delete-button'>
                                                Удалить
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='recomend-body-admin-comments' style={{ display: activeTab3 === 'comments' ? 'flex' : 'none' }}>
                                <div className='recomend-block-section'>
                                    <div className='recomend-text-head'>
                                        Рекомендовано
                                    </div>
                                    <div className='write_option'>
                                        <div className='option_wrapper'>
                                            <div className='option_panel'>
                                                <div className='button_comments'>
                                                    <button className='button_comments_force'>
                                                        <div className='button_comments_options'>
                                                            <select
                                                                className="custom-select"
                                                                value={selectedFormat}
                                                                onChange={(e) => applyFormat(e.target.value)}
                                                            >
                                                                <option value="Choose heading">Choose heading</option>
                                                                <option value="Heading">Заголовок</option>
                                                                <option value="Subheading">Подзаголовок</option>
                                                                <option value="Text">Текст</option>
                                                                <option value="Comment">Комментарий</option>
                                                            </select>
                                                        </div>
                                                    </button>
                                                </div>
                                                <button
                                                    className={`option_bold ${isBold ? 'active' : ''}`}
                                                    onClick={toggleBold}
                                                >
                                                    <IconBold />
                                                </button>
                                                <button
                                                    className={`option_stroke ${isItalic ? 'active' : ''}`}
                                                    onClick={toggleItalic}
                                                >
                                                    <IconStroke />
                                                </button>
                                                {/* <button className='option_link'>
                                                                        <IconLink />
                                                                    </button> */}
                                                <button className={`option_dot ${isDot ? 'active' : ''}`} onClick={insertUnorderedList}>
                                                    <IconDot />
                                                </button>
                                                <button className={`option_number ${isNumber ? 'active' : ''}`} onClick={insertOrderedList}>
                                                    <IconNumber />
                                                </button>
                                                <button
                                                    className='option_back'
                                                    onClick={handleUndo} // Логика Ctrl + Z
                                                >
                                                    <IconBackOption />
                                                </button>
                                                <button
                                                    className='option_next'
                                                    onClick={handleRedo} // Логика Ctrl + Y
                                                >
                                                    <IconNextOption />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='write_wrapper'>
                                            <div
                                                className='write_wrapper_box'
                                                contentEditable="true"
                                                ref={textRef} // Присваиваем референс блоку с текстом
                                                onKeyDown={handleKeyDown}
                                            >
                                                {/* {inspectionList.length > 0 &&
                                                <ul>
                                                    <h2>Обследования</h2>
                                                    {inspectionList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            <p className='strong_box'>{item.comment}</p>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <React.Fragment key={i}>
                                                                            <li key={`${i}-name`}>{child.name}</li>
                                                                            <lo className="lo_box" key={`${i}-comment`}>{child.comment}</lo>
                                                                        </React.Fragment>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                            {medicalTreatmentList.length > 0 &&
                                                <ul>
                                                    <h2 className='med_box'>Медикаментозное лечение</h2>
                                                    {medicalTreatmentList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            <p className='strong_box'>{item.comment}</p>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <React.Fragment key={i}>
                                                                            <li key={`${i}-name`}>{child.name}</li>
                                                                            <lo className="lo_box" key={`${i}-comment`}>{child.comment}</lo>
                                                                        </React.Fragment>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                            {recomendList.length > 0 &&
                                                <ul>
                                                    <h2 className='med_box'>Рекомендации</h2>
                                                    {recomendList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <lo className="lo_box" key={i}>{child.name}{child.comment}</lo>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            } */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-under-box'>
                                        <div className='list-pdf'>
                                            <div className='item-pdf'>
                                                Гистолог
                                            </div>
                                            <div className='item-pdf'>
                                                PDF
                                            </div>
                                        </div>
                                        <div className='buttons-under-box'>
                                            <div className='add-pdf'>
                                                Добавить PDF
                                            </div>
                                            <div className='button-save-pdf'>
                                                Сохранить
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='non-recomend-block-section'>
                                    <div className='recomend-text-head'>
                                        Не рекомендовано
                                    </div>
                                    <div className='write_option'>
                                        <div className='option_wrapper'>
                                            <div className='option_panel'>
                                                <div className='button_comments'>
                                                    <button className='button_comments_force'>
                                                        <div className='button_comments_options'>
                                                            <select
                                                                className="custom-select"
                                                                value={selectedFormat}
                                                                onChange={(e) => applyFormat(e.target.value)}
                                                            >
                                                                <option value="Choose heading">Choose heading</option>
                                                                <option value="Heading">Заголовок</option>
                                                                <option value="Subheading">Подзаголовок</option>
                                                                <option value="Text">Текст</option>
                                                                <option value="Comment">Комментарий</option>
                                                            </select>
                                                        </div>
                                                    </button>
                                                </div>
                                                <button
                                                    className={`option_bold ${isBold ? 'active' : ''}`}
                                                    onClick={toggleBold}
                                                >
                                                    <IconBold />
                                                </button>
                                                <button
                                                    className={`option_stroke ${isItalic ? 'active' : ''}`}
                                                    onClick={toggleItalic}
                                                >
                                                    <IconStroke />
                                                </button>
                                                {/* <button className='option_link'>
                                                                        <IconLink />
                                                                    </button> */}
                                                <button className={`option_dot ${isDot ? 'active' : ''}`} onClick={insertUnorderedList}>
                                                    <IconDot />
                                                </button>
                                                <button className={`option_number ${isNumber ? 'active' : ''}`} onClick={insertOrderedList}>
                                                    <IconNumber />
                                                </button>
                                                <button
                                                    className='option_back'
                                                    onClick={handleUndo} // Логика Ctrl + Z
                                                >
                                                    <IconBackOption />
                                                </button>
                                                <button
                                                    className='option_next'
                                                    onClick={handleRedo} // Логика Ctrl + Y
                                                >
                                                    <IconNextOption />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='write_wrapper'>
                                            <div
                                                className='write_wrapper_box'
                                                contentEditable="true"
                                                ref={textRef} // Присваиваем референс блоку с текстом
                                                onKeyDown={handleKeyDown}
                                            >
                                                {/* {inspectionList.length > 0 &&
                                                <ul>
                                                    <h2>Обследования</h2>
                                                    {inspectionList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            <p className='strong_box'>{item.comment}</p>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <React.Fragment key={i}>
                                                                            <li key={`${i}-name`}>{child.name}</li>
                                                                            <lo className="lo_box" key={`${i}-comment`}>{child.comment}</lo>
                                                                        </React.Fragment>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                            {medicalTreatmentList.length > 0 &&
                                                <ul>
                                                    <h2 className='med_box'>Медикаментозное лечение</h2>
                                                    {medicalTreatmentList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            <p className='strong_box'>{item.comment}</p>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <React.Fragment key={i}>
                                                                            <li key={`${i}-name`}>{child.name}</li>
                                                                            <lo className="lo_box" key={`${i}-comment`}>{child.comment}</lo>
                                                                        </React.Fragment>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                            {recomendList.length > 0 &&
                                                <ul>
                                                    <h2 className='med_box'>Рекомендации</h2>
                                                    {recomendList.map((item, index) => (
                                                        <li key={index}>
                                                            <strong>{item.parent}</strong>
                                                            {item.children.length > 0 && (
                                                                <ul>
                                                                    {item.children.map((child, i) => (
                                                                        <lo className="lo_box" key={i}>{child.name}{child.comment}</lo>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            } */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-under-box'>
                                        <div className='list-pdf'>
                                            <div className='item-pdf'>
                                                Гистолог
                                            </div>
                                            <div className='item-pdf'>
                                                PDF
                                            </div>
                                        </div>
                                        <div className='buttons-under-box'>
                                            <div className='add-pdf'>
                                                Добавить PDF
                                            </div>
                                            <div className='button-save-pdf'>
                                                Сохранить
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiagnosPageAdmin;