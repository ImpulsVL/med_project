import React, { useState } from 'react';
import './Medical_treatmentPlate.scss';
import { ReactComponent as OpenRadio } from './icons/OpenRadio.svg';
import { ReactComponent as IconBook } from './icons/Book.svg';
import { ReactComponent as IconCheck } from './icons/Check.svg';
import CommentPlate from '../commentPlate/CommentPlate';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData'; // Импортируем кастомный хук

function Medical_treatmentPlate({ onToggleCommentPlate }) {
    const { id } = useParams(); // Получаем id из URL
    const { data: treatmentData, loading, error } = useFetchData(id, 'testapi3.php'); // Используем хук для получения данных
    const [showCommentPlate, setShowCommentPlate] = useState(false);
    const [expandedItems, setExpandedItems] = useState({}); // Состояние для каждого элемента списка

    // Переключение состояния комментариев
    const toggleExpand = (index) => {
        setExpandedItems(prevState => ({
            ...prevState,
            [index]: !prevState[index] // Переключаем только конкретный элемент
        }));
    };

    const toggleCommentPlate = () => {
        setShowCommentPlate(!showCommentPlate);
    };

    // Рендеринг элементов лечения
    const renderTreatmentItems = () => {
        return treatmentData?.drug_treatment?.items?.map((treatment, index) => (
            <div className='medical_medical_treatment' key={index}>
                <div>
                    <div className='medical_treatment_info'>
                        <div className='check_icon'><IconCheck /></div>
                        <div className='medical_medical_info'>{treatment.name}</div>
                        <button
                            className={`openRadio_icon ${expandedItems[index] ? 'rotated' : ''}`}
                            onClick={() => toggleExpand(index)} // Передаем индекс
                        >
                            <OpenRadio />
                        </button>
                    </div>
                    <div className='medical_treatment_comments'>
                        {treatment.values.length > 0}
                        {/*{treatment.values.length > 0 ? treatment.values.join(', ') : 'Нет дополнительных комментариев.'}*/}
                    </div>
                </div>
                {expandedItems[index] && (
                    <div className='radio_wrapper'>
                        {treatment.values.map((value, i) => (
                            <div className='radio_info' key={i}>
                                <div className='radio_treatment_info'>
                                    <div className='check_icon'><IconCheck /></div>
                                    <div className='radio_medical_info'>{value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ));
    };

    if (!id) {
        return <div>Error: Treatment ID not specified.</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !treatmentData?.drug_treatment?.items) {
        return <div>Error: {error || 'No treatment data available.'}</div>;
    }

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
                    {renderTreatmentItems()}
                </div>
            </div>
            {showCommentPlate && <CommentPlate onClose={toggleCommentPlate} />}
        </div>
    );
}

export default Medical_treatmentPlate;