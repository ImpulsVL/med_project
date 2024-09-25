import React, { useState } from 'react';
import './Medical_treatmentPlate.scss';
import { ReactComponent as OpenRadio } from './icons/OpenRadio.svg'
import { ReactComponent as IconBook } from './icons/Book.svg'
import { ReactComponent as IconCheck } from './icons/Check.svg'
import { ReactComponent as ActiveCheck } from './icons/ActiveCheck.svg'
import { useNavigate } from 'react-router-dom';
import CommentPlate from '../commentPlate/CommentPlate';

function Medical_treatmentPlate({ onToggleCommentPlate }) {

    const [expandedItems, setExpandedItems] = useState({}); // Состояние для каждого элемента списка

    // Функция для переключения состояния конкретного элемента
    const toggleExpand = (index) => {
        setExpandedItems(prevState => ({
            ...prevState,
            [index]: !prevState[index] // Переключаем только конкретный элемент
        }));
    }

    const [showCommentPlate, setShowCommentPlate] = useState(false);

    const toggleCommentPlate = () => {
        setShowCommentPlate(!showCommentPlate);
    };

    return (
        <div className='medical_treatment_wrapper'>
            <div className='medical_treatment_block'>
                <div className='header_medical_treatment'>
                    <div className='text_medical_treatment'>Медикаментозное лечение</div>
                    <div className='text_icon' onClick={onToggleCommentPlate}>
                        <div className='text_comments'>Комментарий</div>
                        <div className='icon_book'><IconBook /></div>
                    </div>
                </div>
                <div className='main_medical_treatment'>
                    <div className='medical_medical_treatment'>
                        <div>
                            <div className='medical_treatment_info'>
                                <div className='check_icon'><IconCheck /></div>
                                <div className='medical_medical_info'>Фолиевая кислота</div>
                                <button
                                    className={`openRadio_icon ${expandedItems[0] ? 'rotated' : ''}`}
                                    onClick={() => toggleExpand(0)} // Передаем индекс
                                >
                                    <OpenRadio />
                                </button>
                            </div>
                            <div className='medical_treatment_comments'>
                                400-800 мкг по 1 таблетке в сутки за 2-3 месяца до беременности и до 12 недель беременности
                            </div>
                        </div>
                        {expandedItems[0] && (
                        <div className='radio_wrapper'>
                            <div className='radio_info'>
                                <div className='radio_treatment_info'>
                                    <div className='check_icon'><IconCheck /></div>
                                    <div className='radio_medical_info'>9 месяцев Фолиевая кислота, таб 400мкг</div>
                                </div>
                            </div>
                            <div className='radio_info'>
                                <div className='radio_treatment_info'>
                                    <div className='check_icon'><IconCheck /></div>
                                    <div className='radio_medical_info'>мамифол, таб 400 мкг</div>
                                </div>
                            </div>
                            <div className='radio_info'>
                                <div className='radio_treatment_info'>
                                    <div className='check_icon'><IconCheck /></div>
                                    <div className='radio_medical_info'>Фолацин, таб 5мг</div>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                    <div className='medical_medical_treatment'>
                        <div>
                            <div className='medical_treatment_info'>
                                <div className='check_icon'><IconCheck /></div>
                                <div className='medical_medical_info'>Калия йодид</div>
                                <button
                                    className={`openRadio_icon ${expandedItems[1] ? 'rotated' : ''}`}
                                    onClick={() => toggleExpand(1)} // Передаем индекс для второго элемента
                                >
                                    <OpenRadio />
                                </button>
                            </div>
                            <div className='medical_treatment_comments'>
                                по 20 мкг 1 раз в день до конца беременности и на весь период грудного вскармливания
                            </div>
                        </div>
                        {expandedItems[1] && (
                        <div className='radio_wrapper'>
                            <div className='radio_info'>
                                <div className='radio_treatment_info'>
                                    <div className='check_icon'><IconCheck /></div>
                                    <div className='radio_medical_info'>9 месяцев Фолиевая кислота, таб 400мкг</div>
                                </div>
                            </div>
                            <div className='radio_info'>
                                <div className='radio_treatment_info'>
                                    <div className='check_icon'><IconCheck /></div>
                                    <div className='radio_medical_info'>мамифол, таб 400 мкг</div>
                                </div>
                            </div>
                            <div className='radio_info'>
                                <div className='radio_treatment_info'>
                                    <div className='check_icon'><IconCheck /></div>
                                    <div className='radio_medical_info'>Фолацин, таб 5мг</div>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                    <div className='medical_medical_treatment'>
                        <div>
                            <div className='medical_treatment_info'>
                                <div className='check_icon'><IconCheck /></div>
                                <div className='medical_medical_info'>Железа препарат</div>
                                <button
                                    className={`openRadio_icon ${expandedItems[2] ? 'rotated' : ''}`}
                                    onClick={() => toggleExpand(2)} // Передаем индекс для второго элемента
                                >
                                    <OpenRadio />
                                </button>
                            </div>
                            <div className='medical_treatment_comments'>
                                по 20 мкг 1 раз в день до конца беременности и на весь период грудного вскармливания
                            </div>
                        </div>
                        {expandedItems[2] && (
                        <div className='radio_wrapper'>
                            <div className='radio_info'>
                                <div className='radio_treatment_info'>
                                    <div className='check_icon'><IconCheck /></div>
                                    <div className='radio_medical_info'>9 месяцев Фолиевая кислота, таб 400мкг</div>
                                </div>
                            </div>
                            <div className='radio_info'>
                                <div className='radio_treatment_info'>
                                    <div className='check_icon'><IconCheck /></div>
                                    <div className='radio_medical_info'>мамифол, таб 400 мкг</div>
                                </div>
                            </div>
                            <div className='radio_info'>
                                <div className='radio_treatment_info'>
                                    <div className='check_icon'><IconCheck /></div>
                                    <div className='radio_medical_info'>Фолацин, таб 5мг</div>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            {showCommentPlate && <CommentPlate onClose={toggleCommentPlate} />}
        </div>
    );
}

export default Medical_treatmentPlate;