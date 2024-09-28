import React, { useState } from 'react';
import './RecomendPlate.scss';
import { ReactComponent as IconBook } from './icons/Book.svg';
import { ReactComponent as IconCheck } from './icons/Check.svg';
import CommentPlate from '../commentPlate/CommentPlate';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData'; // Import custom hook

function RecomendPlate({ onToggleCommentPlate }) {
    const { id } = useParams();
    const { data: recommendationData, loading, error } = useFetchData(id, 'testapi3.php'); // Use custom hook
    const [showCommentPlate, setShowCommentPlate] = useState(false);

    const toggleCommentPlate = () => {
        setShowCommentPlate(!showCommentPlate);
    };

    const renderRecommendationItems = () => {
        return recommendationData?.recommendations?.items?.map((recommendation, index) => (
            <div className='medical_recomend' key={index}>
                <div className='medical_recomend_info'>
                    <div className='check_icon'><IconCheck /></div>
                    <div className='medical_info'>{recommendation.name}</div>
                </div>
                {recommendation.values.length > 0 ? (
                    recommendation.values.map((value, i) => (
                        <div className='medical_recomend_comments' key={i}>
                            {value}
                        </div>
                    ))
                ) : (
                    <div className='medical_recomend_comments'>Нет дополнительных комментариев.</div>
                )}
            </div>
        ));
    };

    if (!id) {
        return <div>Error: Recommendation ID not specified.</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !recommendationData?.recommendations?.items) {
        return <div>Error: {error || 'No recommendation data available.'}</div>;
    }

    return (
        <div className='recomend_wrapper'>
            <div className='recomend_block'>
                <div className='header_recomend'>
                    <div className='text_recomend'>Рекомендации</div>
                    <div className='text_icon' onClick={onToggleCommentPlate}>
                        <div className='text_comments'>Комментарий</div>
                        <div className='icon_book'><IconBook /></div>
                    </div>
                </div>
                <div className='main_recomend'>
                    {renderRecommendationItems()}
                </div>
            </div>
            {showCommentPlate && <CommentPlate onClose={toggleCommentPlate} />}
        </div>
    );
}

export default RecomendPlate;