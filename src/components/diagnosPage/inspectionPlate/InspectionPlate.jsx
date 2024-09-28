import React, { useState } from 'react';
import './InspectionPlate.scss';
import { ReactComponent as IconBook } from './icons/Book.svg';
import { ReactComponent as IconCheck } from './icons/Check.svg';
import { useParams } from 'react-router-dom';
import CommentPlate from '../commentPlate/CommentPlate';
import useFetchData from '../../hooks/useFetchData'; // Import custom hook

function InspectionPlate({ onToggleCommentPlate }) {
    const { id } = useParams();
    const { data: inspectionData, loading, error } = useFetchData(id, 'testapi3.php'); // Use custom hook
    const [showCommentPlate, setShowCommentPlate] = useState(false);

    const toggleCommentPlate = () => {
        setShowCommentPlate(!showCommentPlate);
    };

    const renderInspectionItems = () => {
        return inspectionData?.survey?.items?.map((inspection, index) => (
            <div className='medical_inspection' key={index}>
                <div className='medical_inspection_header'>
                    <div className='check_icon'><IconCheck /></div>
                    <div className='header_info'>{inspection.name}</div>
                </div>
                {inspection.values.map((value, i) => (
                    <div className='medical_inspection_info' key={i}>
                        <div className='check_icon'><IconCheck /></div>
                        <div className='medical_info'>{value}</div>
                    </div>
                ))}
            </div>
        ));
    };

    if (!id) {
        return <div>Ошибка: не указан идентификатор обследования.</div>;
    }

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error || !inspectionData?.survey?.items) {
        return <div>Ошибка: {error || 'Данные обследования отсутствуют.'}</div>;
    }

    const commentData = inspectionData.survey.comment;

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
                    {renderInspectionItems()}
                </div>
            </div>
            {showCommentPlate && <CommentPlate onClose={toggleCommentPlate} data={commentData} />}
        </div>
    );
}

export default InspectionPlate;