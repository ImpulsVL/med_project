import React, { useRef, useState } from 'react';
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

function BlockPage() {

    const textRef = useRef(null); // Референс на блок с текстом
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);

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

    return (
        <div className='wrapper_four'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="main_block_page">
                <a className='back_wrapper' href='/diagnosis'>
                    <div className='icon_back'>
                        <IconBack id="back_icon" />
                    </div>
                    <div className='back_button_text'>
                        Популярные диагнозы
                    </div>
                </a>
                <div className='wrapper_box'>
                    <div className='write_box'>
                        <div className='write_option'>
                            <div className='option_wrapper'>
                                <div className='option_panel'>
                                    <div className='button_comments'>
                                        <button className='button_comments_force'>
                                            <div className='button_comments_options'>
                                                <span className="button_comments_name">Комментарий</span>
                                                <IconOpenRadio />
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
                                    <button className='option_dot'>
                                        <IconDot />
                                    </button>
                                    <button className='option_number'>
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
                                >
                                    {/* Добавлено contentEditable */}
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
                                    <button className='printer_button'>
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