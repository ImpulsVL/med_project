import React, { useState } from 'react';
import './DiagnosPage.scss';
import { ReactComponent as IconBack } from './icons/Back.svg'
import { Link, useNavigate } from 'react-router-dom';
import InspectionPlate from './inspectionPlate/InspectionPlate';
import Medical_treatmentPlate from './medical_treatmentPlate/Medical_treatmentPlate';
import RecomendPlate from './recomendPlate/RecomendPlate';
import MoveFooter from './moveFooter/MoveFooter';
import CommentPlate from './commentPlate/CommentPlate';
import Header from '../header/header';

function DiagnosPage() {

    const [showCommentPlate, setShowCommentPlate] = useState(false);

    const toggleCommentPlate = () => {
        setShowCommentPlate(!showCommentPlate);
    };

    return (
        <div className='third_wrapper'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="main-container_third_page ">
                <Link to='/diagnosis'>
                    <a className='back_wrapper'>
                        <div className='icon_back'>
                            <IconBack id="back_icon" />
                        </div>
                        <div className='back_button_text'>
                            Вернуться к диагнозам
                        </div>
                    </a>
                </Link>
                <div className='text_main_third_page'>
                    E28.2 Cиндром поликистоза яичников
                </div>
                <div className='content_wrapper'>
                    <div className='inspection_plate_wrapper'>
                        <InspectionPlate onToggleCommentPlate={toggleCommentPlate} />
                    </div>
                    <div className='medical_treatment_plate_wrapper'>
                        <Medical_treatmentPlate onToggleCommentPlate={toggleCommentPlate} />
                    </div>
                    <div className='recomend_plate_wrapper'>
                        <RecomendPlate onToggleCommentPlate={toggleCommentPlate} />
                    </div>
                    {showCommentPlate && (
                        <div className='comment_plate_wrapper'>
                            <CommentPlate onClose={toggleCommentPlate} />
                        </div>
                    )}
                </div>
                <div className='footer'>
                    <MoveFooter />
                </div>
            </div>
        </div>
    );
}

export default DiagnosPage;