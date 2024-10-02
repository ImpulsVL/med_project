import React, { Children, useState } from 'react';
import './RecomendPlate.scss';
import { ReactComponent as IconBook } from './icons/Book.svg';
import { ReactComponent as IconCheck } from './icons/Check.svg';
import CommentPlate from '../commentPlate/CommentPlate';
import { useParams } from 'react-router-dom';

function RecomendPlate({ onToggleCommentPlate, diagnos, onSelectionChange, onChange }) {
    const { id } = useParams();
    const [showCommentPlate, setShowCommentPlate] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]); // State to store selected items

    const recommendationData = diagnos.items;
    const comment = diagnos.comment;

    const toggleCommentPlate = () => {
        setShowCommentPlate(!showCommentPlate);
    };

    const handleToggleCommentPlate = () => {
        onToggleCommentPlate(recommendationData, 'recommendations');
        toggleCommentPlate();
    };

    const handleItemClick = (recommendation) => {
        const isSelected = selectedItems.some(item => item.parent === recommendation.name);
        let updatedSelection = [];

        if (isSelected) {
            // Unselect parent and all children
            updatedSelection = selectedItems.filter(item => item.parent !== recommendation.name);
        } else {
            // Select parent and all children
            updatedSelection = [
                ...selectedItems,
                { parent: recommendation.name, children: [...recommendation.values]}
            ];
        }

        setSelectedItems(updatedSelection);
        onSelectionChange(updatedSelection); // Pass selected items to the parent
        onChange(updatedSelection);
    };

    const renderRecommendationItems = () => {
        return recommendationData?.map((recommendation, index) => {
            const isSelected = selectedItems.some(item => item.parent === recommendation.name);

            return (
                <div className='medical_recomend' key={index}>
                    <div 
                        className={`medical_recomend_info ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleItemClick(recommendation)}
                    >
                        <div className='check_icon'><IconCheck /></div>
                        <div className='medical_info'>{recommendation.name}</div>
                    </div>
                    {recommendation.values.length > 0 ? (
                        recommendation.values.map((value, i) => (
                            <div className={`medical_recomend_comments ${isSelected ? 'selected' : ''}`} key={i}>
                                {value}
                            </div>
                        ))
                    ) : (
                        <div className='medical_recomend_comments'></div>
                    )}
                </div>
            );
        });
    };

    return (
        <div className='recomend_wrapper'>
            <div className='recomend_block'>
                <div className='header_recomend'>
                    <div className='text_recomend'>Рекомендации</div>
                    <div className='text_icon' onClick={handleToggleCommentPlate}>
                        <div className='text_comments'>Комментарий</div>
                        <div className='icon_book'><IconBook /></div>
                    </div>
                </div>
                <div className='main_recomend'>
                    {renderRecommendationItems()}
                </div>
            </div>
            {showCommentPlate && <CommentPlate onClose={toggleCommentPlate} data={comment} section="recommendations" title="Рекомендации"/>}
        </div>
    );
}

export default RecomendPlate;