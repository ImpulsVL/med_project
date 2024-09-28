import React, { useState } from 'react';
import './CommentPlate.scss';
import { ReactComponent as IconClose } from './icons/Close.svg';

function CommentPlate({ onClose, data, section }) {
    const getRecommendations = () => {
        if (data && data.recommendations) {
            return data.recommendations[section] || {};
        }
        return {};
    };

    const getNonRecommendations = () => {
        if (data && data.recommendations) {
            return data.recommendations[section] || {};
        }
        return {};
    };

    const recommendations = getRecommendations();
    const nonRecommendations = getNonRecommendations();

    return (
        <div className='comment_wrapper'>
            <div className='comment_header'>
                <div className='comment_header_text'>Обследования</div>
                <div className='comment_header_close_icon' onClick={onClose}>
                    <IconClose />
                </div>
            </div>
            <div className='main_recomend_comment'>
                <div className='recomend_text'>РЕКОМЕНДУЕМ</div>
                <div className='recomend_comment_info'>
                    <p>{recommendations.comment?.recomendation}</p>
                    {recommendations.items?.map((item, index) => (
                        <p key={index}>{item.name}: {item.values.join(', ')}</p>
                    ))}
                </div>
            </div>
            <div className='main_nonrecomend_comment'>
                <div className='nonrecomend_text'>НЕ РЕКОМЕНДУЕМ</div>
                <div className='nonrecomend_comment_info'>
                    <ul>
                        {nonRecommendations.items?.map((item, index) => (
                            <li key={index}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CommentPlate;