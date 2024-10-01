import React, { useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './BlockPage.scss';
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
import Header from '../header/header';
import useFetchData from '../hooks/useFetchData';

function BlockPage() {
    const location = useLocation();
    const inspectionList = location.state?.inspectionList || [];
    const medicalTreatmentList = location.state?.medicalTreatmentList || [];
    const recomendList = location.state?.recomendList || [];

    const sectionCode = location.state.sectionCode;

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
        } else if (format === 'Text') {;
            document.execCommand('foreColor', false, 'black');
        }else {
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
        <div className='wrapper_four'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="main_block_page">
                <Link to={`/diagnosis/${sectionCode}`}>
                    <a className='back_wrapper' href='/diagnosis'>
                        <div className='icon_back'>
                            <IconBack id="back_icon" />
                        </div>
                        <div className='back_button_text'>
                            Популярные диагнозы
                        </div>
                    </a>
                </Link>
                <div className='wrapper_box'>
                    <div className='write_box'>
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
                                    <button className='option_link'>
                                        <IconLink />
                                    </button>
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
                                    {inspectionList.length > 0 &&
                                        <ul>
                                            <h2>Обследования</h2>
                                            {inspectionList.map((item, index) => (
                                                <li key={index}>
                                                    <strong>{item.parent}</strong>
                                                    {item.children.length > 0 && (
                                                        <ul>
                                                            {item.children.map((child, i) => (
                                                                <li key={i}>{child}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                    {medicalTreatmentList.length > 0 &&
                                        <ul>
                                            <h2>Медикаментозное лечение</h2>
                                            {medicalTreatmentList.map((item, index) => (
                                                <li key={index}>
                                                    <strong>{item.parent}</strong>
                                                    {item.children.length > 0 && (
                                                        <ul>
                                                            {item.children.map((child, i) => (
                                                                <li key={i}>{child}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                    {recomendList.length > 0 &&
                                        <ul>
                                            <h2>Рекомендации</h2>
                                            {recomendList.map((item, index) => (
                                                <li key={index}>
                                                    <strong>{item.parent}</strong>
                                                    {item.children.length > 0 && (
                                                        <ul>
                                                            {item.children.map((child, i) => (
                                                                <li key={i}>{child}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='write_buttons'>
                            <div className='write_buttons_wrapper'>
                                <div className='copy_box'>
                                    <button className='copy_button' onClick={handleCopyText}>
                                        <div className='copy_button_text'>
                                            <CopyIcon /> Скопировать все
                                        </div>
                                    </button>
                                </div>
                                <div className='printer_box'>
                                    <button className='printer_button' onClick={handlePrintText}>
                                        <div className='printer_button_text'>
                                            <PrinterIcon /> Распечатать
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlockPage;