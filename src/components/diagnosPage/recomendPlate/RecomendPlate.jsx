import React, { useState } from 'react';
import './RecomendPlate.scss';
import { ReactComponent as IconBook } from './icons/Book.svg'
import { ReactComponent as IconCheck } from './icons/Check.svg'
import { ReactComponent as ActiveCheck } from './icons/ActiveCheck.svg'
import { useNavigate } from 'react-router-dom';
import CommentPlate from '../commentPlate/CommentPlate';

function RecomendPlate({ onToggleCommentPlate }) {

    const [showCommentPlate, setShowCommentPlate] = useState(false);

    const toggleCommentPlate = () => {
        setShowCommentPlate(!showCommentPlate);
    };

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
                    <div className='medical_recomend'>
                        <div>
                            <div className='medical_recomend_info'>
                                <div className='check_icon'><IconCheck /></div>
                                <div className='medical_info'>Черный чай, кофе и молоко замедляют всасывание препаратов железа, поэтому следует избегать их одновременного приема.</div>
                            </div>
                            <div className='medical_treatment_comments'>
                                400-800 мкг по 1 таблетке в сутки за 2-3 месяца до беременности и до 12 недель беременности
                            </div>
                        </div>
                        <div>
                            <div className='medical_recomend_info'>
                                <div className='check_icon'><IconCheck /></div>
                                <div className='medical_info'>Черный чай, кофе и молоко замедляют всасывание препаратов железа, поэтому следует избегать их одновременного приема.</div>
                            </div>
                            <div className='medical_recomend_comments'>
                                
                            </div>
                        </div>
                        <div>
                            <div className='medical_recomend_info'>
                                <div className='check_icon'><IconCheck /></div>
                                <div className='medical_info'>От гепатита А</div>
                            </div>
                            <div className='medical_recomend_comments'>
                                Всем непривитым
                            </div>
                        </div>
                        <div>
                            <div className='medical_recomend_info'>
                                <div className='check_icon'><IconCheck /></div>
                                <div className='medical_info'>От гепатита В</div>
                            </div>
                            <div className='medical_recomend_comments'>
                                400-800 мкг по 1 таблетке в сутки за 2-3 месяца до беременности и до 12 недель беременности
                            </div>
                        </div>
                        <div>
                            <div className='medical_recomend_info'>
                                <div className='check_icon'><IconCheck /></div>
                                <div className='medical_info'>Черный чай, кофе и молоко замедляют всасывание препаратов железа, поэтому следует избегать их одновременного приема.</div>
                            </div>
                            <div className='medical_recomend_comments'>
                                400-800 мкг по 1 таблетке в сутки за 2-3 месяца до беременности и до 12 недель беременности
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showCommentPlate && <CommentPlate onClose={toggleCommentPlate} />}
        </div>
    );
}

export default RecomendPlate;