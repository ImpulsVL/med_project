import React, { useState } from 'react';
import './InspectionPlate.scss';
import { ReactComponent as IconBook } from './icons/Book.svg'
import { ReactComponent as IconCheck } from './icons/Check.svg'
import { ReactComponent as ActiveCheck } from './icons/ActiveCheck.svg'
import { useNavigate } from 'react-router-dom';
import CommentPlate from '../commentPlate/CommentPlate';


function InspectionPlate({ onToggleCommentPlate }) {

    const [showCommentPlate, setShowCommentPlate] = useState(false);

    const toggleCommentPlate = () => {
        setShowCommentPlate(!showCommentPlate);
    };

    return (
        <div className='inspection_wrapper'>
            <div className='inspection_block'>
                <div className='header_inspection'>
                    <div className='text_inspection'>Обследования</div>
                    <div className='text_icon' onClick={onToggleCommentPlate}>
                        <div className='text_comments'>Комментарий</div>
                        <div className='icon_book'><IconBook /></div>
                    </div>
                </div>
                <div className='main_inspection'>
                    <div className='medical_inspection'>
                        <div className='medical_inspection_header'>
                            <div className='check_icon'><IconCheck /></div>
                            <div className='header_info'>Анализ крови(натощах)</div>
                        </div>
                        <div className='medical_inspection_info'>
                            <div className='check_icon'><IconCheck /></div>
                            <div className='medical_info'>Тиреотропный гормон (ТТГ)</div>
                        </div>
                        <div className='medical_inspection_info'>
                            <div className='check_icon'><IconCheck /></div>
                            <div className='medical_info'>Пролактин</div>
                        </div>
                        <div className='medical_inspection_info'>
                            <div className='check_icon'><IconCheck /></div>
                            <div className='medical_info'>Хронический гонадотропин человека (ХГЧ)</div>
                        </div>
                        <div className='medical_inspection_info'>
                            <div className='check_icon'><IconCheck /></div>
                            <div className='medical_info'>Соматомедин</div>
                        </div>
                        <div className='medical_inspection_info'>
                            <div className='check_icon'><IconCheck /></div>
                            <div className='medical_info'>Триглицериды (ТГ)</div>
                        </div>
                    </div>
                    <div className='medical_inspection'>
                        <div className='medical_inspection_header'>
                            <div className='check_icon'><IconCheck /></div>
                            <div className='header_info'>Анализ крови на гормоны во вторую фазу цикла (на 5-6 день после дня предполагаемой овуляции)</div>
                        </div>
                        <div className='medical_inspection_info'>
                            <div className='check_icon'><IconCheck /></div>
                            <div className='medical_info'>Прогестерон</div>
                        </div>
                    </div>
                    <div className='medical_inspection'>
                        <div className='medical_inspection_header'>
                            <div className='check_icon'><IconCheck /></div>
                            <div className='header_info'>Анализ мочи</div>
                        </div>
                        <div className='medical_inspection_info'>
                            <div className='check_icon'><IconCheck /></div>
                            <div className='medical_info'>Свободный кортизол, суточная моча</div>
                        </div>
                    </div>
                    <div className='medical_inspection'>
                        <div className='medical_inspection_header'>
                            <div className='check_icon'><IconCheck /></div>
                            <div className='header_info'>Инструментальные методы исследования</div>
                        </div>
                        <div className='medical_inspection_info'>
                            <div className='check_icon'><IconCheck /></div>
                            <div className='medical_info'>Узи органов малого таза</div>
                        </div>
                        <div className='medical_inspection_info'>
                            <div className='check_icon'><IconCheck /></div>
                            <div className='medical_info'>Фолликулометрия</div>
                        </div>
                        <div className='medical_inspection_info'>
                            <div className='check_icon'><IconCheck /></div>
                            <div className='medical_info'>КТ надпочечников</div>
                        </div>
                        <div className='medical_inspection_info'>
                            <div className='check_icon'><IconCheck /></div>
                            <div className='medical_info'>МРТ надпочечников</div>
                        </div>
                    </div>
                </div>
            </div>
            {showCommentPlate && <CommentPlate onClose={toggleCommentPlate} />}
        </div>
    );
}

export default InspectionPlate;