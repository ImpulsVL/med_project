import React from 'react';
import './DiagnosisPage.scss';
import DiagnosisPlates from "./diagnosisPlates/DiagnosisPlates";
import { ReactComponent as IconBack } from './diagnosisPlates/icons/Back.svg'
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';

function DiagnosisPage() {
    return (
        <div className='second_wrapper'>
            <div className='header-1'>
                <Header />
            </div>
            <div className="main-container_second_page ">
                <a className='back_wrapper' href='/'>
                    <div className='icon_back'>
                        <IconBack id="back_icon"/>
                    </div>
                    <div className='back_button_text'>
                        Специальности
                    </div>
                </a>
                <div className='text_main_second_page'>
                    Популярные диагнозы
                </div>
                <div className='Plates'>
                    <DiagnosisPlates />
                </div>
            </div>
        </div>
    );
}

export default DiagnosisPage;