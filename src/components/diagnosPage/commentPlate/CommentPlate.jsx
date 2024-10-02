import React from 'react';
import './CommentPlate.scss';
import { ReactComponent as IconClose } from './icons/Close.svg';

function CommentPlate({ onClose, data, section, title  }) {
    const getRecommendations = () => {
        if (data) {
            return data.recomendation || '';
        }
        return '';
    };

    const getNonRecommendations = () => {
        if (data) {
            return data.notrecomendation || '';
        }
        return '';
    };

    const recommendations = getRecommendations();
    const nonRecommendations = getNonRecommendations();

    return (
        <div className='comment_wrapper'>
            <div className='comment_header'>
                <div className='comment_header_text'>{title}</div>
                {/* <div className='comment_header_close_icon' onClick={onClose}>
                    <IconClose />
                </div> */}
            </div>
            <div className='main_recomend_comment'>
                <div className='recomend_text'>РЕКОМЕНДУЕМ</div>
                <div className='recomend_comment_info'>
                    <p>
                        <p dangerouslySetInnerHTML={{ __html: recommendations }} />
                    </p>
                </div>
            </div>
            <div className='main_nonrecomend_comment'>
                <div className='nonrecomend_text'>НЕ РЕКОМЕНДУЕМ</div>
                <div className='nonrecomend_comment_info'>
                    <p>
                        <p dangerouslySetInnerHTML={{ __html: nonRecommendations }} />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CommentPlate;