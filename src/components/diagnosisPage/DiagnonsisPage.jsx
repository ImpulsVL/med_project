import React from 'react';
import './DiagnosisPage.scss';
import DiagnosisPlates from "./diagnosisPlates/DiagnosisPlates";
import { ReactComponent as IconBack } from './diagnosisPlates/icons/Back.svg'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Header from '../header/header';

function DiagnosisPage() {
    const location = useLocation();
    const { displayName } = location.state || { displayName: 'Популярные диагнозы' };

    return (
        <div className='second_wrapper'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="main-container_second_page ">
                <Link to='/'>
                    <a className='back_wrapper'>
                        <div className='icon_back'>
                            <IconBack id="back_icon" />
                        </div>
                        <div className='back_button_text'>
                            Специальности
                        </div>
                    </a>
                </Link>
                <div className='text_main_second_page'>
                    {displayName}
                </div>
                <div className='Plates'>
                    <DiagnosisPlates />
                </div>
            </div>
        </div>
    );
}

export default DiagnosisPage;